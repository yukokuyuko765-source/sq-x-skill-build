import { useState, useCallback, useMemo } from "react";
import { SP_CONFIG } from "../skillData";

const STORAGE_KEY = "sqx_skill_builds";

export function useSkillBuild(classData, subClassData) {
  const [allocations, setAllocations] = useState({});
  const [currentLevel, setCurrentLevel] = useState(SP_CONFIG.maxLevel);
  const [bonusSP, setBonusSP] = useState(0);
  const [characterName, setCharacterName] = useState("");
  const [loadedSlot, setLoadedSlot] = useState(null);

  const subClassBonus = subClassData ? 5 : 0;

  const getTotalSP = useCallback(
    (level) => SP_CONFIG.initialSP + SP_CONFIG.spPerLevel * (level - 1) + bonusSP + subClassBonus,
    [bonusSP, subClassBonus]
  );

  const getUsedSP = useCallback(
    (upToLevel) => {
      let used = 0;
      for (let lv = 1; lv <= upToLevel; lv++) {
        const alloc = allocations[lv];
        if (alloc) {
          for (const pts of Object.values(alloc)) used += pts;
        }
      }
      return used;
    },
    [allocations]
  );

  const getSkillLevel = useCallback(
    (skillId, upToLevel) => {
      let total = 0;
      for (let lv = 1; lv <= upToLevel; lv++) {
        const alloc = allocations[lv];
        if (alloc && alloc[skillId]) total += alloc[skillId];
      }
      return total;
    },
    [allocations]
  );

  const getSkillLevelAtLevel = useCallback(
    (skillId, level) => {
      const alloc = allocations[level];
      return (alloc && alloc[skillId]) || 0;
    },
    [allocations]
  );

  const arePrerequisitesMet = useCallback(
    (skill, upToLevel) => {
      for (const prereq of skill.prerequisites) {
        if (getSkillLevel(prereq.skillId, upToLevel) < prereq.level) return false;
      }
      return true;
    },
    [getSkillLevel]
  );

  // メイン＋サブの全スキルから検索するヘルパー
  const findSkill = useCallback(
    (skillId) => {
      const main = classData?.skills.find((s) => s.id === skillId);
      if (main) return main;
      return subClassData?.skills.find((s) => s.id === skillId) || null;
    },
    [classData, subClassData]
  );

  const getPrereqAllocations = useCallback(
    (skill, level) => {
      if (!classData) return {};
      const extra = {};

      function resolve(sk) {
        for (const prereq of sk.prerequisites) {
          const currentLv =
            getSkillLevel(prereq.skillId, level) + (extra[prereq.skillId] || 0);
          if (currentLv < prereq.level) {
            const needed = prereq.level - currentLv;
            extra[prereq.skillId] = (extra[prereq.skillId] || 0) + needed;
            const prereqSkill = findSkill(prereq.skillId);
            if (prereqSkill) resolve(prereqSkill);
          }
        }
      }

      resolve(skill);
      return extra;
    },
    [classData, getSkillLevel, findSkill]
  );

  const getTotalPrereqCost = useCallback(
    (skill, level) => {
      const extra = getPrereqAllocations(skill, level);
      return Object.values(extra).reduce((a, b) => a + b, 0);
    },
    [getPrereqAllocations]
  );

  // 全スキルリストを取得するヘルパー
  const getAllSkills = useCallback(() => {
    const skills = [];
    if (classData?.skills) skills.push(...classData.skills);
    if (subClassData?.skills) skills.push(...subClassData.skills);
    return skills;
  }, [classData, subClassData]);

  // サブクラスのスキルは上限が半分
  const getEffectiveMaxLevel = useCallback(
    (skill) => {
      if (subClassData?.skills.some((s) => s.id === skill.id)) {
        return Math.floor(skill.maxLevel * 0.5);
      }
      return skill.maxLevel;
    },
    [subClassData]
  );

  // 指定レベル以降で上限を超過した割り振りをトリミングする
  const clampOverflow = useCallback(
    (allocs, fromLevel) => {
      const next = { ...allocs };
      const allSkills = getAllSkills();

      for (let lv = fromLevel + 1; lv <= SP_CONFIG.maxLevel; lv++) {
        if (!next[lv]) continue;
        const levelAlloc = { ...next[lv] };
        let modified = false;

        // 上限超過のトリミング
        for (const skill of allSkills) {
          if (!levelAlloc[skill.id]) continue;
          let cumulative = 0;
          for (let l = 1; l <= lv; l++) {
            const a = l === lv ? levelAlloc : next[l];
            if (a && a[skill.id]) cumulative += a[skill.id];
          }
          const maxLv = getEffectiveMaxLevel(skill);
          if (cumulative > maxLv) {
            const excess = cumulative - maxLv;
            const newAlloc = Math.max(0, levelAlloc[skill.id] - excess);
            if (newAlloc <= 0) {
              delete levelAlloc[skill.id];
            } else {
              levelAlloc[skill.id] = newAlloc;
            }
            modified = true;
          }
        }

        // トリミングにより前提が崩れた後続スキルを連鎖リセット
        if (modified) {
          const getCumulativeLevel = (sid) => {
            let total = 0;
            for (let l = 1; l <= lv; l++) {
              const a = l === lv ? levelAlloc : next[l];
              if (a && a[sid]) total += a[sid];
            }
            return total;
          };

          let changed = true;
          while (changed) {
            changed = false;
            for (const sk of allSkills) {
              if (!levelAlloc[sk.id]) continue;
              for (const prereq of sk.prerequisites) {
                if (getCumulativeLevel(prereq.skillId) < prereq.level) {
                  delete levelAlloc[sk.id];
                  changed = true;
                  break;
                }
              }
            }
          }
        }

        if (Object.keys(levelAlloc).length === 0) {
          delete next[lv];
        } else {
          next[lv] = levelAlloc;
        }
      }

      return next;
    },
    [getAllSkills, getEffectiveMaxLevel]
  );

  const addPoint = useCallback(
    (skillId) => {
      if (!classData) return;
      const skill = findSkill(skillId);
      if (!skill) return;

      const prereqAlloc = getPrereqAllocations(skill, currentLevel);

      setAllocations((prev) => {
        const next = { ...prev };
        const levelAlloc = { ...(next[currentLevel] || {}) };

        for (const [pId, pts] of Object.entries(prereqAlloc)) {
          levelAlloc[pId] = (levelAlloc[pId] || 0) + pts;
        }
        levelAlloc[skillId] = (levelAlloc[skillId] || 0) + 1;

        next[currentLevel] = levelAlloc;
        return clampOverflow(next, currentLevel);
      });
    },
    [classData, currentLevel, getPrereqAllocations, findSkill, clampOverflow]
  );

  const setSkillLevel = useCallback(
    (skillId, targetLevel) => {
      if (!classData) return;
      const skill = findSkill(skillId);
      if (!skill) return;

      const currentSkillLv = getSkillLevel(skillId, currentLevel);
      if (targetLevel === currentSkillLv) return;

      if (targetLevel > currentSkillLv) {
        // 増加: 前提スキルも含めてポイントを追加
        const diff = targetLevel - currentSkillLv;
        setAllocations((prev) => {
          const next = { ...prev };
          const levelAlloc = { ...(next[currentLevel] || {}) };

          // 前提スキルを解決
          const prereqAlloc = getPrereqAllocations(skill, currentLevel);
          for (const [pId, pts] of Object.entries(prereqAlloc)) {
            levelAlloc[pId] = (levelAlloc[pId] || 0) + pts;
          }
          levelAlloc[skillId] = (levelAlloc[skillId] || 0) + diff;

          next[currentLevel] = levelAlloc;
          return clampOverflow(next, currentLevel);
        });
      } else {
        // 減少: ポイントを減らし、前提が崩れた後続スキルをリセット
        setAllocations((prev) => {
          const next = { ...prev };
          const levelAlloc = { ...(next[currentLevel] || {}) };

          const currentAllocAtLevel = levelAlloc[skillId] || 0;
          const cumulativeBeforeThisLevel = currentSkillLv - currentAllocAtLevel;
          const newAllocAtLevel = Math.max(0, targetLevel - cumulativeBeforeThisLevel);

          if (newAllocAtLevel <= 0) {
            delete levelAlloc[skillId];
          } else {
            levelAlloc[skillId] = newAllocAtLevel;
          }

          // 累積レベル計算ヘルパー
          const getCumulativeLevel = (sid) => {
            let total = 0;
            for (let lv = 1; lv <= currentLevel; lv++) {
              if (lv === currentLevel) {
                total += levelAlloc[sid] || 0;
              } else {
                const alloc = next[lv];
                if (alloc && alloc[sid]) total += alloc[sid];
              }
            }
            return total;
          };

          // 前提が満たされなくなった後続スキルを連鎖的にリセット
          const allSkills = getAllSkills();
          let changed = true;
          while (changed) {
            changed = false;
            for (const sk of allSkills) {
              if (!levelAlloc[sk.id]) continue;
              for (const prereq of sk.prerequisites) {
                if (getCumulativeLevel(prereq.skillId) < prereq.level) {
                  delete levelAlloc[sk.id];
                  changed = true;
                  break;
                }
              }
            }
          }

          if (Object.keys(levelAlloc).length === 0) {
            delete next[currentLevel];
          } else {
            next[currentLevel] = levelAlloc;
          }
          return next;
        });
      }
    },
    [classData, currentLevel, getSkillLevel, getPrereqAllocations, findSkill, getAllSkills, clampOverflow]
  );

  const removePoint = useCallback(
    (skillId) => {
      setAllocations((prev) => {
        const next = { ...prev };
        const levelAlloc = { ...(next[currentLevel] || {}) };
        if (!levelAlloc[skillId]) return prev;

        levelAlloc[skillId]--;
        if (levelAlloc[skillId] <= 0) delete levelAlloc[skillId];

        // 累積レベルを計算するヘルパー（現在の levelAlloc を反映）
        const getCumulativeLevel = (sid) => {
          let total = 0;
          for (let lv = 1; lv <= currentLevel; lv++) {
            if (lv === currentLevel) {
              total += levelAlloc[sid] || 0;
            } else {
              const alloc = next[lv];
              if (alloc && alloc[sid]) total += alloc[sid];
            }
          }
          return total;
        };

        // 前提が満たされなくなった後続スキルを連鎖的にリセット
        const allSkills = getAllSkills();
        let changed = true;
        while (changed) {
          changed = false;
          for (const skill of allSkills) {
            if (!levelAlloc[skill.id]) continue;
            for (const prereq of skill.prerequisites) {
              if (getCumulativeLevel(prereq.skillId) < prereq.level) {
                delete levelAlloc[skill.id];
                changed = true;
                break;
              }
            }
          }
        }

        if (Object.keys(levelAlloc).length === 0) {
          delete next[currentLevel];
        } else {
          next[currentLevel] = levelAlloc;
        }
        return next;
      });
    },
    [currentLevel, getAllSkills]
  );

  // 指定したスキルIDリストの割り振りを全レベルから削除
  const clearSkillAllocations = useCallback(
    (skillIds) => {
      if (!skillIds || skillIds.length === 0) return;
      const idSet = new Set(skillIds);
      setAllocations((prev) => {
        const next = {};
        for (const [lv, alloc] of Object.entries(prev)) {
          const filtered = {};
          for (const [sid, pts] of Object.entries(alloc)) {
            if (!idSet.has(sid)) filtered[sid] = pts;
          }
          if (Object.keys(filtered).length > 0) next[lv] = filtered;
        }
        return next;
      });
    },
    []
  );

  const resetBuild = useCallback(() => {
    setAllocations({});
    setCurrentLevel(1);
    setLoadedSlot(null);
  }, []);

  // SP情報
  const spInfo = useMemo(() => {
    const total = getTotalSP(currentLevel);
    const used = getUsedSP(currentLevel);
    const usedAtLevel = (() => {
      const alloc = allocations[currentLevel];
      if (!alloc) return 0;
      return Object.values(alloc).reduce((a, b) => a + b, 0);
    })();
    const gained =
      currentLevel === 1 ? SP_CONFIG.initialSP : SP_CONFIG.spPerLevel;

    return { total, used, remain: total - used, gained, usedAtLevel };
  }, [currentLevel, allocations, getTotalSP, getUsedSP]);

  // Save / Load (スロットベース)
  const getSavedBuilds = useCallback(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }, []);

  const saveToSlot = useCallback(
    (slot, classId, subClassId) => {
      const name = characterName || prompt("ビルド名を入力してください:");
      if (!name) return;
      setCharacterName(name);

      const builds = getSavedBuilds();
      // 同じスロットの既存データを除去
      const filtered = builds.filter((b) => b.slot !== slot);
      filtered.push({
        slot,
        name,
        classId,
        subClassId: subClassId || null,
        bonusSP,
        allocations: JSON.parse(JSON.stringify(allocations)),
        savedAt: new Date().toISOString(),
      });

      setLoadedSlot(slot);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    },
    [characterName, bonusSP, allocations, getSavedBuilds]
  );

  const loadFromSlot = useCallback(
    (buildData) => {
      setCharacterName(buildData.name);
      setBonusSP(buildData.bonusSP || 0);
      setAllocations(buildData.allocations || {});
      setLoadedSlot(buildData.slot ?? null);
    },
    []
  );

  const deleteSlot = useCallback(
    (slot) => {
      const builds = getSavedBuilds().filter((b) => b.slot !== slot);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(builds));
      if (loadedSlot === slot) setLoadedSlot(null);
    },
    [getSavedBuilds, loadedSlot]
  );

  const exportBuild = useCallback(
    (classId, subClassId) => {
      const data = { name: characterName, classId, subClassId: subClassId || null, bonusSP, allocations };
      const json = JSON.stringify(data, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${characterName || classId}_build.json`;
      a.click();
      URL.revokeObjectURL(url);
    },
    [characterName, bonusSP, allocations]
  );

  const importBuild = useCallback((onClassChange) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          if (data.classId && onClassChange) onClassChange(data.classId);
          setCharacterName(data.name || "");
          setBonusSP(data.bonusSP || 0);
          setAllocations(data.allocations || {});
        } catch (err) {
          alert("ファイルの読み込みに失敗しました: " + err.message);
        }
      };
      reader.readAsText(file);
    });
    input.click();
  }, []);

  return {
    allocations,
    setAllocations,
    currentLevel,
    setCurrentLevel,
    bonusSP,
    setBonusSP,
    characterName,
    setCharacterName,
    loadedSlot,
    spInfo,
    getSkillLevel,
    getSkillLevelAtLevel,
    arePrerequisitesMet,
    getTotalPrereqCost,
    getTotalSP,
    getUsedSP,
    addPoint,
    removePoint,
    setSkillLevel,
    clearSkillAllocations,
    resetBuild,
    saveToSlot,
    loadFromSlot,
    deleteSlot,
    exportBuild,
    importBuild,
    getSavedBuilds,
  };
}

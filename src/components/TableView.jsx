import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { SP_CONFIG } from "../skillData";

const TIER_LABELS = { novice: "N", veteran: "V", master: "M" };
const TIER_CLASSES = { novice: "tier-n", veteran: "tier-v", master: "tier-m" };

export default function TableView({
  classData,
  subClassData,
  build,
  maxLevelScale,
}) {
  const { currentLevel, allocations } = build;
  const currentRowRef = useRef(null);
  const scrollRef = useRef(null);

  // メイン＋サブのスキルをまとめる
  const sections = useMemo(() => {
    const result = [];
    if (classData && classData.skills.length > 0) {
      result.push({ label: "メイン", skills: classData.skills, scale: 1 });
    }
    if (subClassData && subClassData.skills.length > 0) {
      result.push({ label: "サブ", skills: subClassData.skills, scale: maxLevelScale });
    }
    return result;
  }, [classData, subClassData, maxLevelScale]);

  const allSkills = useMemo(
    () => sections.flatMap((s) => s.skills.map((sk) => ({ ...sk, scale: s.scale, sectionLabel: s.label }))),
    [sections]
  );

  // 1〜maxLevelまでの全レベル
  const allLevels = useMemo(() => {
    const levels = [];
    for (let i = 1; i <= SP_CONFIG.maxLevel; i++) levels.push(i);
    return levels;
  }, []);

  // 初回表示時に現在のレベル行までスクロール
  useEffect(() => {
    if (currentRowRef.current && scrollRef.current) {
      currentRowRef.current.scrollIntoView({ block: "center", behavior: "auto" });
    }
  }, []);

  // メイン＋サブの全スキルからID検索
  const findSkill = useCallback(
    (skillId) => {
      const main = classData?.skills.find((s) => s.id === skillId);
      if (main) return main;
      return subClassData?.skills.find((s) => s.id === skillId) || null;
    },
    [classData, subClassData]
  );

  // 前提スキルの不足分を再帰的に計算
  const resolvePrereqs = useCallback(
    (skill, level, currentAllocations, extra) => {
      for (const prereq of skill.prerequisites) {
        // 該当レベルまでの累積スキルレベルを計算（extra分も加味）
        let cumulative = extra[prereq.skillId] || 0;
        for (let lv = 1; lv <= level; lv++) {
          const alloc = currentAllocations[lv];
          if (alloc && alloc[prereq.skillId]) cumulative += alloc[prereq.skillId];
        }
        if (cumulative < prereq.level) {
          const needed = prereq.level - cumulative;
          extra[prereq.skillId] = (extra[prereq.skillId] || 0) + needed;
          const prereqSkill = findSkill(prereq.skillId);
          if (prereqSkill) resolvePrereqs(prereqSkill, level, currentAllocations, extra);
        }
      }
    },
    [findSkill]
  );

  // 全レベルでの合計割り振りを計算（指定レベルを除外可能）
  const getTotalAllocated = useCallback(
    (skillId, allocs, excludeLevel) => {
      let total = 0;
      for (const lv of Object.keys(allocs)) {
        const lvNum = parseInt(lv);
        if (lvNum === excludeLevel) continue;
        const alloc = allocs[lvNum];
        if (alloc && alloc[skillId]) total += alloc[skillId];
      }
      return total;
    },
    []
  );

  const handleCellChange = useCallback(
    (level, skillId, value) => {
      let num = parseInt(value) || 0;
      const skill = findSkill(skillId);

      build.setAllocations((prev) => {
        const next = { ...prev };
        const levelAlloc = { ...(next[level] || {}) };
        const oldVal = levelAlloc[skillId] || 0;

        // スキルのスケール（サブクラスなら0.5）を取得
        const skillInfo = allSkills.find((s) => s.id === skillId);
        const effectiveMax = skillInfo ? Math.floor(skillInfo.maxLevel * skillInfo.scale) : Infinity;

        // 他レベルでの合計を取得し、残り枠で入力値をキャップ
        const otherTotal = getTotalAllocated(skillId, next, level);
        const maxAllowable = Math.max(0, effectiveMax - otherTotal);
        num = Math.min(num, maxAllowable);

        if (num <= 0) {
          delete levelAlloc[skillId];
        } else {
          levelAlloc[skillId] = num;
        }

        // ポイントが増えた場合のみ前提スキルを自動割り振り
        if (skill && num > oldVal) {
          const tempAllocations = { ...next, [level]: { ...levelAlloc } };
          const extra = {};
          resolvePrereqs(skill, level, tempAllocations, extra);

          // 前提スキルも全レベル合計で最大値を超えないようにキャップ
          for (const [pId, pts] of Object.entries(extra)) {
            const pInfo = allSkills.find((s) => s.id === pId);
            const pMax = pInfo ? Math.floor(pInfo.maxLevel * pInfo.scale) : Infinity;
            const pOtherTotal = getTotalAllocated(pId, next, level) + (levelAlloc[pId] || 0);
            const pAllowable = Math.max(0, pMax - pOtherTotal);
            const capped = Math.min(pts, pAllowable);
            if (capped > 0) {
              levelAlloc[pId] = (levelAlloc[pId] || 0) + capped;
            }
          }
        }

        if (Object.keys(levelAlloc).length === 0) {
          delete next[level];
        } else {
          next[level] = levelAlloc;
        }
        return next;
      });
    },
    [build, findSkill, resolvePrereqs, allSkills, getTotalAllocated]
  );

  if (allSkills.length === 0) return null;

  return (
    <div className="table-view-wrapper">
      <div className="table-scroll" ref={scrollRef}>
        <table className="table-view">
          <thead>
            <tr>
              <th className="th-level">Lv</th>
              <th className="th-sp">SP</th>
              {allSkills.map((skill) => (
                <th key={skill.id} className={`th-skill ${TIER_CLASSES[skill.tier] || ""}`}>
                  <div className="th-skill-name">{skill.name}</div>
                  <div className="th-skill-max">
                    {TIER_LABELS[skill.tier]}{" "}
                    /{Math.floor(skill.maxLevel * skill.scale)}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allLevels.map((lv) => {
              const alloc = allocations[lv] || {};
              const isCurrent = lv === currentLevel;
              const lvUsed = Object.values(alloc).reduce((a, b) => a + b, 0);

              return (
                <tr
                  key={lv}
                  ref={isCurrent ? currentRowRef : undefined}
                  className={isCurrent ? "row-current" : ""}
                  onClick={() => build.setCurrentLevel(lv)}
                >
                  <td className="td-level">{lv}</td>
                  <td className="td-sp">{lvUsed || ""}</td>
                  {allSkills.map((skill) => {
                    const val = alloc[skill.id] || 0;
                    const cumulative = build.getSkillLevel(skill.id, lv);

                    return (
                      <td key={skill.id} className={`td-cell ${val > 0 ? "has-value" : ""}`}>
                        <input
                          type="number"
                          min={0}
                          className="cell-input"
                          value={val || ""}
                          placeholder=""
                          onChange={(e) => handleCellChange(lv, skill.id, e.target.value)}
                          onKeyDown={(e) => {
                            // 半角数字、Backspace、Delete、Tab、矢印キーのみ許可
                            if (
                              !/^[0-9]$/.test(e.key) &&
                              !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)
                            ) {
                              e.preventDefault();
                            }
                          }}
                          onPaste={(e) => {
                            const text = e.clipboardData.getData("text");
                            if (!/^\d+$/.test(text)) e.preventDefault();
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                        {val > 0 && (() => {
                          const effectiveMax = Math.floor(skill.maxLevel * skill.scale);
                          const isOver = cumulative > effectiveMax;
                          return (
                            <span className={`cell-cumulative${isOver ? " over" : ""}`} title="累積/最大">
                              {cumulative}/{effectiveMax}
                            </span>
                          );
                        })()}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

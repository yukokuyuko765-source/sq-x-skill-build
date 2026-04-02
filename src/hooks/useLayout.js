import { useMemo } from "react";
import { LAYOUT_DATA } from "../layoutData";

export function useLayout(classData) {
  return useMemo(() => {
    if (!classData || classData.skills.length === 0) return {};

    const layout = {};
    const tierKeys = ["novice", "veteran", "master"];
    const classLayout = LAYOUT_DATA[classData.id] || {};

    for (const tierKey of tierKeys) {
      const tierSkills = classData.skills.filter((s) => s.tier === tierKey);
      const tierSkillIds = new Set(tierSkills.map((s) => s.id));

      // 依存の深さを自動計算（col のフォールバック用）
      const depthCache = {};
      function getDepth(skill, visited) {
        if (depthCache[skill.id] !== undefined) return depthCache[skill.id];
        if (visited.has(skill.id)) return 0;
        visited.add(skill.id);

        let maxD = -1;
        for (const prereq of skill.prerequisites) {
          if (tierSkillIds.has(prereq.skillId)) {
            const ps = tierSkills.find((s) => s.id === prereq.skillId);
            if (ps) maxD = Math.max(maxD, getDepth(ps, visited));
          }
        }
        depthCache[skill.id] = maxD + 1;
        return maxD + 1;
      }

      for (const skill of tierSkills) {
        getDepth(skill, new Set());
      }

      // col を決定: layoutData の指定 > 自動計算
      const colMap = {};
      for (const skill of tierSkills) {
        const overrides = classLayout[skill.id];
        colMap[skill.id] =
          overrides && overrides.col !== undefined
            ? overrides.col
            : depthCache[skill.id];
      }

      // カラムごとにグループ化
      const columns = {};
      for (const skill of tierSkills) {
        const col = colMap[skill.id];
        if (!columns[col]) columns[col] = [];
        columns[col].push(skill);
      }

      // row を決定: layoutData の指定 > グループ内登場順
      for (const [col, skills] of Object.entries(columns)) {
        // 明示的な row を持つスキルと持たないスキルを分離
        const withRow = [];
        const withoutRow = [];
        for (const skill of skills) {
          const overrides = classLayout[skill.id];
          if (overrides && overrides.row !== undefined) {
            withRow.push({ skill, row: overrides.row });
          } else {
            withoutRow.push(skill);
          }
        }

        // 使用済み row を収集
        const usedRows = new Set(withRow.map((e) => e.row));

        // 明示指定を先に配置
        for (const entry of withRow) {
          layout[entry.skill.id] = {
            tier: tierKey,
            col: parseInt(col),
            row: entry.row,
          };
        }

        // 残りを空いている行に順番に割り当て
        let autoRow = 0;
        for (const skill of withoutRow) {
          while (usedRows.has(autoRow)) autoRow++;
          layout[skill.id] = {
            tier: tierKey,
            col: parseInt(col),
            row: autoRow,
          };
          usedRows.add(autoRow);
          autoRow++;
        }
      }
    }

    return layout;
  }, [classData]);
}

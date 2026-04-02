import React, { useMemo } from "react";
import SkillCard from "./SkillCard";

const TIER_LABELS = {
  novice: "ノービス",
  veteran: "ベテラン",
  master: "マスター",
};

export default function TierSection({
  tierKey,
  skills,
  layout,
  currentLevel,
  build,
  maxLevelScale = 1,
}) {
  if (skills.length === 0) return null;

  const maxCol = Math.max(...skills.map((s) => layout[s.id]?.col ?? 0));
  const maxRow = Math.max(...skills.map((s) => layout[s.id]?.row ?? 0));
  const numCols = maxCol + 1;
  const numRows = maxRow + 1;

  // 各行にスキルが存在するか確認し、空行にスペーサーを生成
  const spacers = useMemo(() => {
    const occupiedRows = new Set();
    for (const skill of skills) {
      const pos = layout[skill.id];
      if (pos) occupiedRows.add(pos.row);
    }
    const result = [];
    for (let r = 0; r < numRows; r++) {
      if (!occupiedRows.has(r)) {
        result.push(r);
      }
    }
    return result;
  }, [skills, layout, numRows]);

  return (
    <div className="tier-section">
      <div className={`tier-header ${tierKey}`}>{TIER_LABELS[tierKey]}</div>
      <div
        className="tier-grid"
        style={{
          gridTemplateColumns: `repeat(${numCols}, minmax(140px, 1fr))`,
          gridTemplateRows: `repeat(${numRows}, auto)`,
        }}
      >
        {/* 空行にスペーサーを配置して行の高さを確保 */}
        {spacers.map((row) => (
          <div
            key={`spacer-${row}`}
            className="skill-cell-spacer"
            style={{ gridColumn: 1, gridRow: row + 1 }}
          />
        ))}
        {skills.map((skill) => {
          const pos = layout[skill.id] || { col: 0, row: 0 };
          const effectiveMaxLevel = Math.floor(skill.maxLevel * maxLevelScale);
          const currentLv = build.getSkillLevel(skill.id, currentLevel);
          const allocAtLevel = build.getSkillLevelAtLevel(
            skill.id,
            currentLevel
          );
          const prereqMet = build.arePrerequisitesMet(skill, currentLevel);
          const locked = !prereqMet;
          const canAdd = currentLv < effectiveMaxLevel;
          const canRemove = allocAtLevel > 0;

          return (
            <div
              key={skill.id}
              className="skill-cell"
              style={{
                gridColumn: pos.col + 1,
                gridRow: pos.row + 1,
              }}
            >
              <SkillCard
                skill={skill}
                effectiveMaxLevel={effectiveMaxLevel}
                currentLv={currentLv}
                allocAtLevel={allocAtLevel}
                locked={locked}
                canAdd={canAdd}
                canRemove={canRemove}
                onAdd={() => build.addPoint(skill.id)}
                onRemove={() => build.removePoint(skill.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

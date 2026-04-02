import React, { useState } from "react";

export default function AllocationLog({ allocations, classData, subClassData, currentLevel, onJumpToLevel }) {
  const [expanded, setExpanded] = useState(true);

  // メイン＋サブの全スキルからID→名前のマップを作る
  const skillNameMap = {};
  if (classData) {
    for (const s of classData.skills) skillNameMap[s.id] = s.name;
  }
  if (subClassData) {
    for (const s of subClassData.skills) {
      if (!skillNameMap[s.id]) skillNameMap[s.id] = s.name + " (サブ)";
    }
  }

  // 割り振りがあるレベルだけ抽出してソート
  const levels = Object.keys(allocations)
    .map(Number)
    .filter((lv) => {
      const alloc = allocations[lv];
      return alloc && Object.keys(alloc).length > 0;
    })
    .sort((a, b) => a - b);

  if (levels.length === 0) return null;

  return (
    <div className="allocation-log">
      <h3 onClick={() => setExpanded((v) => !v)} style={{ cursor: "pointer" }}>
        {expanded ? "▼" : "▶"} 割り振り履歴（{levels.length}レベル分）
      </h3>
      {expanded && (
        <div className="log-entries">
          {levels.map((lv) => {
            const alloc = allocations[lv];
            const entries = Object.entries(alloc).filter(([, pts]) => pts > 0);
            if (entries.length === 0) return null;

            const totalPts = entries.reduce((sum, [, pts]) => sum + pts, 0);
            const isCurrent = lv === currentLevel;

            return (
              <div
                key={lv}
                className={`log-entry ${isCurrent ? "current" : ""}`}
                onClick={() => onJumpToLevel(lv)}
              >
                <span className="log-level">Lv{lv}</span>
                <span className="log-sp">({totalPts}SP)</span>
                <span className="log-skills">
                  {entries.map(([skillId, pts]) => (
                    <span key={skillId} className="log-skill-item">
                      {skillNameMap[skillId] || skillId}
                      <span className="log-pts">+{pts}</span>
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

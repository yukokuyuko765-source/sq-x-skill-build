import React from "react";

export default function SkillCard({
  skill,
  effectiveMaxLevel,
  currentLv,
  allocAtLevel,
  locked,
  canAdd,
  canRemove,
  onAdd,
  onRemove,
}) {
  const maxLv = effectiveMaxLevel ?? skill.maxLevel;

  const cardClass = [
    "skill-card",
    locked ? "locked" : "",
    allocAtLevel > 0 ? "has-allocation" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClass} data-skill-card={skill.id}>
      <div className="card-top">
        <div className="card-info">
          <div className="skill-name">{skill.name}</div>
        </div>
        <div className="card-right">
          <div className="skill-level">
            <span className="current">{currentLv}</span>
            <span className="max">/{maxLv}</span>
            {allocAtLevel > 0 && (
              <span className="alloc-at-level">+{allocAtLevel}</span>
            )}
          </div>
          <div className="skill-controls">
            <button
              className="btn-sm"
              disabled={!canRemove}
              onClick={onRemove}
            >
              -
            </button>
            <button
              className="btn-sm"
              disabled={!canAdd}
              onClick={onAdd}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";

export default function SkillLines({ classData, currentLevel, getSkillLevel, containerRef }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container || !classData) return;

    const draw = () => {
      const containerRect = container.getBoundingClientRect();
      const w = container.scrollWidth;
      const h = container.scrollHeight;
      svg.setAttribute("width", w);
      svg.setAttribute("height", h);
      svg.style.width = w + "px";
      svg.style.height = h + "px";

      let paths = "";

      for (const skill of classData.skills) {
        const targetEl = container.querySelector(
          `[data-skill-card="${skill.id}"]`
        );
        if (!targetEl) continue;

        for (const prereq of skill.prerequisites) {
          const sourceEl = container.querySelector(
            `[data-skill-card="${prereq.skillId}"]`
          );
          if (!sourceEl) continue;

          const sRect = sourceEl.getBoundingClientRect();
          const tRect = targetEl.getBoundingClientRect();

          const x1 = sRect.right - containerRect.left;
          const y1 = sRect.top + sRect.height / 2 - containerRect.top;
          const x2 = tRect.left - containerRect.left;
          const y2 = tRect.top + tRect.height / 2 - containerRect.top;

          const met = getSkillLevel(prereq.skillId, currentLevel) >= prereq.level;
          const color = met
            ? "rgba(63,185,80,0.6)"
            : "rgba(248,81,73,0.35)";

          const dx = Math.abs(x2 - x1);
          const cpOffset = Math.max(dx * 0.4, 20);
          const path = `M ${x1},${y1} C ${x1 + cpOffset},${y1} ${x2 - cpOffset},${y2} ${x2},${y2}`;
          paths += `<path d="${path}" stroke="${color}" stroke-width="2" fill="none" />`;

          const arrowSize = 5;
          const angle = Math.atan2(0, 1);
          const ax1 = x2 - arrowSize * Math.cos(angle - 0.4);
          const ay1 = y2 - arrowSize * Math.sin(angle - 0.4);
          const ax2 = x2 - arrowSize * Math.cos(angle + 0.4);
          const ay2 = y2 - arrowSize * Math.sin(angle + 0.4);
          paths += `<polygon points="${x2},${y2} ${ax1},${ay1} ${ax2},${ay2}" fill="${color}" />`;
        }
      }

      svg.innerHTML = paths;
    };

    requestAnimationFrame(draw);
  });

  return <svg ref={svgRef} className="skill-lines" />;
}

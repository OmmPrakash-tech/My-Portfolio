"use client";

import { useState } from "react";

type Day = {
  date: string;
  contributionCount: number;
};

export const Heatmap = ({ days }: { days: Day[] }) => {
  const [hovered, setHovered] = useState<Day | null>(null);

  // Group into weeks (7 days each)
  const weeks: Day[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="relative">
      {/* Tooltip */}
      {hovered && (
        <div className="absolute -top-10 left-0 bg-black text-white text-xs px-2 py-1 rounded shadow-lg z-10">
          {hovered.contributionCount} contributions on {hovered.date}
        </div>
      )}

      <div className="flex">
        {/* Day Labels */}
        <div className="flex flex-col justify-between text-xs text-gray-500 mr-2">
          <span>Mon</span>
          <span>Wed</span>
          <span>Fri</span>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto">
          <div className="flex gap-[2px]">
            {weeks.map((week, i) => (
              <div key={i} className="flex flex-col gap-[2px]">
                {week.map((day, j) => (
                 <div
  key={j}
  onMouseEnter={() => setHovered(day)}
  onMouseLeave={() => setHovered(null)}
  className={`w-3 h-3 rounded-sm cursor-pointer transition-all duration-200 hover:scale-125 ${getColor(
    day.contributionCount
  )}`}
/>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function getColor(count: number) {
  if (count === 0) return "bg-[#161b22]";
  if (count < 2) return "bg-[#0e4429]";
  if (count < 5) return "bg-[#006d32]";
  if (count < 10) return "bg-[#26a641]";
  return "bg-[#39d353]";
}
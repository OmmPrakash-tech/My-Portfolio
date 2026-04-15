"use client";

import { useEffect, useState } from "react";
import { Heatmap } from "./heatmap";

export const GithubStats = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();

        if (data.error) {
          console.error(data);
          return;
        }

        setStats(data);
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
      }
    };

    fetchStats();
  }, []);

  // ✅ Proper loading check
  if (!stats || !stats.days)
    return (
      <section className="flex justify-center py-20 text-gray-400">
        Loading GitHub stats...
      </section>
    );

  return (
    <section className="flex flex-col items-center py-20 px-4">
      {/* Heading */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        GitHub Stats
      </h1>

      {/* 🔥 STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
        <Card title="Repos" value={stats.repos} />
        <Card title="Followers" value={stats.followers} />
        <Card title="Following" value={stats.following} />
        <Card title="Contributions" value={stats.totalContributions} />
        <Card title="Streak" value={stats.currentStreak} />
      </div>

      {/* 🔥 HEATMAP (MAIN FEATURE) */}
<div className="bg-[#0f172a] p-6 rounded-xl shadow-lg w-full max-w-5xl mt-10">
  
  <h2 className="text-lg text-gray-400 mb-4">
    Contribution Activity
  </h2>

  {/* Month Labels */}
  <div className="flex text-xs text-gray-500 mb-2 ml-10 gap-10">
    <span>Apr</span>
    <span>May</span>
    <span>Jun</span>
    <span>Jul</span>
    <span>Aug</span>
    <span>Sep</span>
    <span>Oct</span>
    <span>Nov</span>
    <span>Dec</span>
    <span>Jan</span>
    <span>Feb</span>
    <span>Mar</span>
  </div>

  <Heatmap days={stats.days} />
</div>

      {/* ❌ OPTIONAL: REMOVE THESE (they show outdated data) */}
      {/*
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=OmmPrakash-tech&theme=radical"
          alt="GitHub Profile Summary"
          width={600}
        />

        <img
          src={`https://streak-stats.demolab.com?user=OmmPrakash-tech&theme=radical`}
          alt="GitHub Streak"
          width={600}
        />
      </div>
      */}
    </section>
  );
};

const Card = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg text-center">
    <h2 className="text-xl text-gray-400">{title}</h2>
    <p className="text-3xl font-bold text-cyan-400">{value}</p>
  </div>
);
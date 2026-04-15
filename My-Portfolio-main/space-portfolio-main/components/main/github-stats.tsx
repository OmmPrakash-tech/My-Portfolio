"use client";

import { useEffect, useState, useMemo } from "react";

export const GithubStats = () => {
  const [stats, setStats] = useState<any>(null);
  const timestamp = useMemo(() => Date.now(), []);

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

  if (!stats)
    return (
      <section className="flex justify-center py-20 text-gray-400">
        Loading GitHub stats...
      </section>
    );

  return (
    <section className="flex flex-col items-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        GitHub Stats
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
        <Card title="Repos" value={stats.repos} />
        <Card title="Followers" value={stats.followers} />
        <Card title="Following" value={stats.following} />
        <Card title="Contributions" value={stats.totalContributions} />
        <Card title="Streak" value={stats.currentStreak} />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=OmmPrakash-tech&theme=radical"
          alt="GitHub Profile Summary"
          width={600}
        />

        <img
          src={`https://streak-stats.demolab.com?user=OmmPrakash-tech&theme=radical&v=${timestamp}`}
          alt="GitHub Streak"
          width={600}
        />
      </div>
    </section>
  );
};

const Card = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-[#0f172a] p-6 rounded-xl shadow-lg text-center">
    <h2 className="text-xl text-gray-400">{title}</h2>
    <p className="text-3xl font-bold text-cyan-400">{value}</p>
  </div>
);
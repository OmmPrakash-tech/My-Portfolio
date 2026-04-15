"use client";

import { useEffect, useState } from "react";

export const GithubStats = () => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("/api/github");
      const data = await res.json();
      setStats(data);
    };

    fetchStats();
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <section className="flex flex-col items-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        GitHub Stats
      </h1>

      {/* 🔥 LIVE STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <Card title="Repos" value={stats.publicRepos} />
        <Card title="Followers" value={stats.followers} />
        <Card title="Following" value={stats.following} />
        <Card title="Activity" value={stats.contributions} />
      </div>

      {/* 🔥 KEEP THESE IMAGES FOR ACCURATE DATA */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=OmmPrakash-tech&theme=radical"
          width={600}
        />

        <img
         src={`https://streak-stats.demolab.com?user=OmmPrakash-tech&theme=radical&v=${Date.now()}`}
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
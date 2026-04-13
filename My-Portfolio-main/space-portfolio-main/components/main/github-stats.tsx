"use client";

import Image from "next/image";

export const GithubStats = () => {
  return (
    <section
      id="github"
      className="flex flex-col items-center justify-center py-20"
    >
      {/* Heading */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        GitHub Stats
      </h1>

      {/* Stats Container */}
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        
        {/* GitHub Stats */}
   <img
    src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=OmmPrakash-tech&theme=radical"
    alt="GitHub Summary"
    width={600}
    className="rounded-lg shadow-lg"
  />

  <img
    src="https://github-readme-streak-stats.herokuapp.com/?user=OmmPrakash-tech&theme=radical"
    alt="GitHub Streak"
    width={600}
    className="rounded-lg shadow-lg"
  />

      </div>
    </section>
  );
};
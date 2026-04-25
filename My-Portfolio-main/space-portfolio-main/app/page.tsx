import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { GithubStats } from "@/components/main/github-stats";
import { Contact } from "@/components/main/contact";
import { Heatmap } from "@/components/main/heatmap";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        
        <Contact />
      </div>
    </main>
  );
}

import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ToolkitSection } from "@/components/sections/ToolkitSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#101416] text-[#e1e3e6] min-h-screen">
      <NavBar />
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ExperienceSection />
      <ToolkitSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}


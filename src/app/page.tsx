import { HeroSection } from '../components/sections/HeroSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-20 md:gap-32">
      <HeroSection />
      
      <SkillsSection />
      
      <ProjectsSection />
      
      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 mt-auto">
        <p>© {new Date().getFullYear()} Chakron Yuraket. All rights reserved.</p>
      </footer>
    </div>
  );
}
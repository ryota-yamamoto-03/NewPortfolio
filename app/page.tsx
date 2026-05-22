import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import TimelineSection from "./components/TimelineSection";
import SkillsSection from "./components/SkillsSection";
import ValuesSection from "./components/ValuesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <TimelineSection />
      <SkillsSection />
      <ValuesSection />
      <ContactSection />
    </main>
  );
}

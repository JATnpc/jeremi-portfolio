import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import TechStackSection from "./TechStackSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";
import AboutMeSection from "./AboutMeSection";
import { FaArrowUp } from "react-icons/fa";

export default function HomePage() {
  const scrollToHero = () => {
    const hero = document.getElementById("hero-section");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center px-2 sm:px-4">
      <HeroSection />
      <div className="w-full max-w-2xl flex flex-col items-center gap-8 md:gap-12">
        <AboutMeSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <Footer />
      </div>
      {/* Minimal Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToHero}
        className="fixed bottom-20 right-8 md:bottom-10 md:right-10 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[#1e293b]/80 backdrop-blur-md border-2 border-white text-white shadow-xl transition-all duration-200 hover:bg-[#334155]/90 hover:scale-105 focus:outline-none"
        aria-label="Scroll to top"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { scrollToHero(); } }}
        style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 2rem)', right: 'calc(env(safe-area-inset-right, 0px) + 2rem)' }}
      >
        <FaArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}

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
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-transparent hover:bg-[#1e293b]/40 border border-gray-700 text-white p-2 md:p-4 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        style={{ bottom: 'env(safe-area-inset-bottom, 1rem)', right: 'env(safe-area-inset-right, 1rem)' }}
        aria-label="Scroll to top"
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { scrollToHero(); } }}
      >
        <FaArrowUp size={16} className="md:size-5" />
      </button>
    </div>
  );
}

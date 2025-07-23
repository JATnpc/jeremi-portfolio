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
        className="fixed bottom-4 right-4 z-50 bg-[#0f172a] hover:bg-[#1e293b] border border-gray-700 text-white p-4 md:p-2 rounded-full transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    </div>
  );
}

import HeroSection from './HeroSection';
import ExperienceSection from './ExperienceSection';
import TechStackSection from './TechStackSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';
import AboutMeSection from './AboutMeSection';
import { FaArrowUp } from 'react-icons/fa';

export default function HomePage() {
  const scrollToHero = () => {
    const hero = document.getElementById('hero-section');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] flex flex-col items-center">
      <HeroSection />
      <div className="w-full max-w-2xl flex flex-col items-center">
        <AboutMeSection />
        <ExperienceSection />
        <TechStackSection />
        <ProjectsSection />
        <Footer />
      </div>
      {/* Minimal Floating Scroll-to-Top Button */}
      <button
        onClick={scrollToHero}
        className="fixed bottom-6 right-6 z-50 bg-black/40 hover:bg-black/60 border border-white/20 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
        style={{ boxShadow: 'none' }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    </div>
  );
} 
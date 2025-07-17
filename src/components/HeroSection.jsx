import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImg from '../assets/profile.jpg';

export default function HeroSection() {
  return (
    <div id="hero-section" className="min-h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#0f172a]">
      {/* Avatar */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-24 h-24 rounded-full border-2 border-white shadow-lg mb-4 object-cover transition-all duration-500 hover:scale-125 hover:rotate-3 hover:shadow-2xl hover:border-white"
      />
      {/* Name */}
      <h1 className="text-white text-xl font-semibold mb-1">Jeremi Tamayo</h1>
      {/* Subtitle */}
      <div className="text-slate-400 text-sm mb-6">Aspiring Software Engineer · Based in Philippines</div>
      {/* Title */}
      <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-widest text-center mb-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">FULLSTACK DEVELOPER</h2>
      {/* Contact Button */}
      <Link
        to="/contact"
        className="flex items-center space-x-2 px-6 py-2 border border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg mb-4"
      >
        <FaPaperPlane />
        <span>Contact me</span>
      </Link>
      {/* Social Icons */}
      <div className="flex space-x-6 mt-2">
        <a href="https://www.linkedin.com/in/jeremi-tamayo-663750199/" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/jatph04/" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center">
          <FaInstagram />
        </a>
        <a href="https://github.com/JATnpc" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center">
          <FaGithub />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jeremitamayo04@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
} 
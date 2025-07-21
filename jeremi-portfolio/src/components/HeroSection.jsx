import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPaperPlane, FaRegFilePdf, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImg from '../assets/profile.jpg';

export default function HeroSection() {
  return (
    <div id="hero-section" className="min-h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#0f172a]">
      {/* Avatar */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-24 h-24 rounded-full border-2 border-white shadow-xl mb-4 object-cover transition-all duration-500 hover:scale-125 hover:rotate-3 hover:shadow-2xl"
      />
      {/* Name */}
      <h1 className="text-white text-xl font-semibold mb-1">Jeremi Tamayo</h1>
      {/* Subtitle */}
      <div className="text-slate-400 text-sm mb-6">Aspiring Software Engineer · Based in Philippines</div>
      {/* Title */}
      <h2 className="text-white text-4xl md:text-6xl font-extrabold tracking-widest text-center mb-4 transition-all duration-300 hover:scale-105 hover:shadow-lg">FULLSTACK DEVELOPER</h2>
      {/* Contact & Resume Buttons Group */}
      <div className="flex flex-row gap-3 mb-4">
        <Link
          to="/contact"
          className="flex items-center space-x-2 px-6 py-3 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-md"
        >
          <FaPaperPlane size={18} />
          <span>Contact me</span>
        </Link>
      </div>
      {/* Social Icons */}
      <div className="flex space-x-6 mt-2">
        {/* LinkedIn */}
        <div className="relative group">
          <a href="https://www.linkedin.com/in/jeremi-tamayo-663750199/" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border-2 border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center shadow-md">
            <FaLinkedin />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 top-14 px-3 py-1 bg-[#1e293b] text-white text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 font-medium tracking-wide">LinkedIn</span>
        </div>
        {/* Instagram */}
        <div className="relative group">
          <a href="https://www.instagram.com/jatph04/" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border-2 border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center shadow-md">
            <FaInstagram />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 top-14 px-3 py-1 bg-[#1e293b] text-white text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 font-medium tracking-wide">Instagram</span>
        </div>
        {/* GitHub */}
        <div className="relative group">
          <a href="https://github.com/JATnpc" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border-2 border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center shadow-md">
            <FaGithub />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 top-14 px-3 py-1 bg-[#1e293b] text-white text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 font-medium tracking-wide">GitHub</span>
        </div>
        {/* Resume */}
        <div className="relative group">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border-2 border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center shadow-md">
            <FaRegFilePdf size={18} />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 top-14 px-3 py-1 bg-[#1e293b] text-white text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 font-medium tracking-wide">Resume</span>
        </div>
        {/* Email */}
        <div className="relative group">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jeremitamayo04@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white text-xl p-3 rounded-full border-2 border-white hover:bg-white hover:text-[#0f172a] transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center shadow-md">
            <FaEnvelope />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 top-14 px-3 py-1 bg-[#1e293b] text-white text-xs rounded-lg border border-gray-700 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-10 font-medium tracking-wide">Email</span>
        </div>
      </div>
    </div>
  );
} 
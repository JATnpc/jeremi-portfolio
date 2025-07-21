import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import jeremiLogo from '../assets/jeremi.svg';

export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col justify-end">
      <hr className="w-full border-t border-gray-300/20 my-4" />
      <div className="w-full flex flex-row justify-between items-center h-12px-8">
        {/* Logo only, no text */}
        <div className="flex items-center">
          <img src={jeremiLogo} alt="jeremi Logo" className="w-[160px] h-[64px] object-contain transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer" />
        </div>
        {/* Social Icons */}
        <div className="flex flex-row items-center justify-between text-white text-[28px] gap-x-4">
          <a href="https://www.linkedin.com/in/jeremi-tamayo-66375199/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaLinkedin /></a>
          <a href="https://www.instagram.com/jatph04/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaInstagram /></a>
          <a href="https://github.com/JATnpc" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg"><FaGithub /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jeremitamayo04@gmail.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg mr-4"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
} 
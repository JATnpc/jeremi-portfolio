import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import jeremiLogo from "../assets/jeremi.svg";
import React, { useState } from "react";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <footer className="w-full py-6 sm:py-8 flex flex-col justify-end px-2 sm:px-4">
      <hr className="w-full border-t border-gray-300/20 my-4" />
      <div className="w-full flex flex-row justify-between items-center h-12px-8 relative flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0">
        {/* Logo only, no text */}
        <div className="flex items-center">
          <img
            src={jeremiLogo}
            alt="jeremi Logo"
            className="w-[120px] h-[48px] md:w-[160px] md:h-[64px] object-contain transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
            loading="lazy"
            onClick={handleLogoClick}
          />
        {/* Popup Message as bubble beside logo */}
        {showPopup && (
          <div className="relative ml-2 md:ml-4">
            <div className="bg-transparent border-2 border-white rounded-xl px-3 py-1 md:px-5 md:py-2 text-white shadow-lg z-50 flex items-center animate-fade-in backdrop-blur-md max-w-[120px] md:max-w-none">
              <p className="text-sm md:text-base font-bold text-white text-center">Hire me please</p>
            </div>
            <div className="absolute left-[-10px] md:left-[-12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-6 border-b-6 border-r-6 md:border-t-8 md:border-b-8 md:border-r-8 border-t-transparent border-b-transparent border-r-white border-l-0"></div>
          </div>
        )}
        </div>
        {/* Social Icons */}
        <div className="flex flex-row items-center justify-between text-white text-[22px] md:text-[28px] gap-x-2 md:gap-x-4">
          <a
            href="https://www.linkedin.com/in/jeremi-tamayo-66375199/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Instagram profile"
            tabIndex={0}
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/JATnpc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="GitHub profile"
            tabIndex={0}
          >
            <FaGithub />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jeremitamayo04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center hover:opacity-70 transition-all duration-300 hover:scale-110 hover:shadow-lg md:mr-4"
            aria-label="Send email"
            tabIndex={0}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

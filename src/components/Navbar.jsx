import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-full shadow-lg px-4 md:px-8 py-2 flex items-center border border-white/20 w-[95vw] max-w-[420px]">
        {/* Hamburger for mobile */}
      <button
        className="md:hidden text-white focus:outline-none mr-2"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen((open) => !open)}
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setMenuOpen(open => !open); } }}
      >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
        {/* Links */}
        <div className={`flex-1 flex flex-col md:flex-row md:items-center md:space-x-8 ${menuOpen ? "flex" : "hidden"} md:flex`} role="navigation" aria-label="Main navigation">
          <a
            href="#home"
            className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition"
            tabIndex={0}
            aria-label="Go to Home section"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition"
            tabIndex={0}
            aria-label="Go to About section"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition"
            tabIndex={0}
            aria-label="Go to Projects section"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white text-base font-medium px-2 py-1 rounded-full hover:bg-white/10 transition"
            tabIndex={0}
            aria-label="Go to Contact section"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
// ...existing code...

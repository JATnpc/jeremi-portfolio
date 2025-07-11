import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 99,
        background: "rgba(28,30,34,0.85)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.3rem 3vw",
        boxShadow: "0 1px 16px 0 rgba(0,0,0,0.08)",
      }}
    >
      {/* Name or logo */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.35rem",
          letterSpacing: "-1px",
          fontFamily: "'Inter', 'SF Pro Display', sans-serif",
          color: "#f3f3ef",
        }}
      >
        Jeremi Tamayo
      </div>

      {/* Navigation links */}
      <div
        style={{
          display: "flex",
          gap: "2.2rem",
        }}
      >
        <a href="#about" style={navStyle}>About</a>
        <a href="#skills" style={navStyle}>Skills</a>
        <a href="#projects" style={navStyle}>Projects</a>
        <a href="#testimonials" style={navStyle}>Testimonials</a>
        <a href="#contact" style={{...navStyle, background: "linear-gradient(90deg, #e6d6b8, #c3b7a6)", color: "#23272F", borderRadius: "999px", padding: "0.5rem 1.2rem", fontWeight: 700}}>
          Inquire
        </a>
      </div>
    </nav>
  );
};

const navStyle = {
  color: "#e1e1e1",
  textDecoration: "none",
  fontWeight: 500,
  fontFamily: "'Inter', 'SF Pro Display', sans-serif",
  fontSize: "1.06rem",
  transition: "color 0.2s",
  position: "relative",
  padding: "0.5rem 0.2rem",
};

export default Navbar;

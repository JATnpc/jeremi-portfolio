import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.42, 0, 0.58, 1] }}
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1c1e22 70%, #23272F 100%)",
        color: "#F3F4F6",
        fontFamily: "'Inter', 'SF Pro Display', sans-serif",
        borderRadius: "32px",
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.20)",
        padding: "3rem",
        position: "relative"
      }}
    >
      {/* Subtle Gear 5-inspired "cloud" accent as SVG */}
      <svg width="240" height="60" viewBox="0 0 240 60" fill="none" style={{position: "absolute", top: 0, right: 20, opacity: 0.12}}>
        <path d="M0,30 Q40,0 80,30 T160,30 T240,30" stroke="#C9C7B6" strokeWidth="12" fill="none"/>
      </svg>

      <h1 style={{ fontSize: "3rem", fontWeight: 700, letterSpacing: "-2px" }}>Jeremi Tamayo</h1>
      <h2 style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: "#B1B5C1",
        fontSize: "1.4rem",
        fontWeight: 400,
        marginTop: "0.7rem"
      }}>
        Aspiring Software Engineer
      </h2>
      <p style={{
        marginTop: "2.2rem",
        maxWidth: 520,
        fontSize: "1.15rem",
        color: "#e1e1e1",
        lineHeight: 1.6,
        textAlign: "center"
      }}>
        I’m not here to blend in. I build things my own way—real, clean, and always with my own style.<br />
        I’m a 4th year Computer Engineering student who doesn’t follow the crowd. If I don’t know something, I’ll figure it out. No shortcuts, no fake vibes—just quality and curiosity, every single time.<br /><br />
        Coder at heart, old money and minimalist by design. Inspired by Gear 5’s energy, but my work always looks and feels pro.<br />
        <span style={{ color: "#C9C7B6", fontWeight: 700 }}>Let’s build something timeless.</span>
      </p>
      <div style={{ display: "flex", gap: "1rem", marginTop: "2.4rem" }}>
        <a
          href="#projects"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #e6d6b8 10%, #c3b7a6 90%)",
            color: "#1c1e22",
            fontWeight: 700,
            borderRadius: "999px",
            padding: "0.8rem 2.1rem",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 2px 8px 0 rgba(220,200,160,0.09)"
          }}
        >
          View Projects
        </a>
        <a
          href="/Jeremi_Tamayo_Resume.pdf"
          download
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #23272F 10%, #e6d6b8 90%)",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "999px",
            padding: "0.8rem 2.1rem",
            textDecoration: "none",
            fontFamily: "'Inter', sans-serif",
            boxShadow: "0 2px 8px 0 rgba(220,200,160,0.09)",
            border: "1.5px solid #e6d6b8"
          }}
        >
          Download Resume
        </a>
      </div>
    </motion.section>
  );
};

export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      style={{
        width: "100%",
        maxWidth: 780,
        margin: "0 auto",
        padding: "4rem 0",
        background: "#23272F",
        borderRadius: "24px",
        marginTop: "3rem",
        marginBottom: "3rem",
        boxShadow: "0 6px 24px 0 rgba(0,0,0,0.16)"
      }}
    >
      <h2 style={{
        fontSize: "2.1rem",
        color: "#e1e1e1",
        marginBottom: "2rem",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center"
      }}>
        About Me
      </h2>
      <p style={{
        color: "#b0b6c6",
        fontSize: "1.14rem",
        lineHeight: 1.7,
        textAlign: "center",
        fontFamily: "'Inter', sans-serif"
      }}>
        I’m Jeremi Tamayo, a 4th year Computer Engineering student and aspiring software engineer based in the Philippines.<br /><br />
        I do things my own way and always keep it real—no fake vibes. My work is clean, modern, and built with care. If I don’t know something, I figure it out. Quality matters more to me than shortcuts.<br /><br />
        Outside of code, you’ll catch me vibing with minimalist designs, inspired by Gear 5’s energy, and always chasing that old money, timeless look. My site isn’t just a portfolio—it’s a snapshot of my style and the kind of work I love.
      </p>
    </motion.section>
  );
};

export default AboutSection;

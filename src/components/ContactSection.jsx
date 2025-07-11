import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
      style={{
        width: "100%",
        maxWidth: 500,
        margin: "0 auto",
        padding: "3rem 0 5rem 0",
        background: "#181A1B",
        borderRadius: "18px",
        marginTop: "3rem",
        marginBottom: "3rem",
        boxShadow: "0 2px 18px 0 rgba(0,0,0,0.11)",
        textAlign: "center"
      }}
    >
      <h2 style={{
        fontSize: "2rem",
        color: "#e1e1e1",
        fontFamily: "'Inter', sans-serif",
        marginBottom: "1.6rem"
      }}>
        Contact
      </h2>
      <p style={{
        color: "#b0b6c6",
        fontSize: "1.13rem",
        lineHeight: 1.7,
        marginBottom: "2.2rem",
        fontFamily: "'Inter', sans-serif"
      }}>
        Want to connect? Shoot me an email, text, or reach out on my socials below. <br />
        I’m always open to talk tech, collaborate, or just say hello.
      </p>
      <div style={{ marginBottom: "1.2rem" }}>
        <div>
          <span style={{ color: "#b0b6c6", fontWeight: 600 }}>Gmail:</span> 
          <a href="mailto:jeremitamayo04@gmail.com" style={{ color: "#e6d6b8", textDecoration: "none", marginLeft: 8 }}>
            jeremi.tamayo@gmail.com
          </a>
        </div>
        <div style={{ marginTop: "0.7rem" }}>
          <span style={{ color: "#b0b6c6", fontWeight: 600 }}>Phone:</span> 
          <a href="tel:+639156243432" style={{ color: "#e6d6b8", textDecoration: "none", marginLeft: 8 }}>
            +63 9XX XXX XXXX
          </a>
        </div>
      </div>
      <div style={{ marginTop: "1.8rem", display: "flex", justifyContent: "center", gap: "1.3rem" }}>
        <a href="https://github.com/JATnpc" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b6c6", fontSize: "1.8rem" }}>
          <span role="img" aria-label="GitHub">🐙</span>
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b6c6", fontSize: "1.8rem" }}>
          <span role="img" aria-label="LinkedIn">💼</span>
        </a>
      </div>
    </motion.section>
  );
};

export default ContactSection;

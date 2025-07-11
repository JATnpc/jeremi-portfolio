import React from "react";

const Footer = () => (
  <footer
    style={{
      color: "#b0b6c6",
      textAlign: "center",
      padding: "2rem 0",
      background: "#181A1B",
      letterSpacing: "0.04em",
      fontFamily: "'Inter', 'SF Pro Display', sans-serif",
      fontSize: "1.02rem",
      borderTop: "1px solid #23272F",
    }}
  >
    <div style={{ marginBottom: "0.7rem" }}>
      <span style={{ fontWeight: 600, color: "#e6d6b8" }}>Jeremi Tamayo</span> &nbsp;|&nbsp;
      <a href="mailto:jeremi.tamayo@gmail.com" style={{ color: "#b0b6c6", textDecoration: "underline", margin: "0 0.6rem" }}>
        Gmail
      </a>
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b6c6", textDecoration: "underline", margin: "0 0.6rem" }}>
        GitHub
      </a>
      <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" style={{ color: "#b0b6c6", textDecoration: "underline", margin: "0 0.6rem" }}>
        LinkedIn
      </a>
    </div>
    <div>
      © {new Date().getFullYear()} Jeremi Tamayo. Built with passion—no shortcuts, no fake vibes.
    </div>
  </footer>
);

export default Footer;

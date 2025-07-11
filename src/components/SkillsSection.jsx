import React from "react";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "PHP", icon: "🐘" },
  { name: "Laravel", icon: "🌶️" },
  { name: "C / C++", icon: "💻" },
  { name: "MySQL", icon: "🐬" },
  { name: "HTML5", icon: "🔶" },
  { name: "CSS3", icon: "🔷" },
  // Add more as you want!
];

const SkillsSection = () => (
  <section
    id="skills"
    style={{
      width: "100%",
      maxWidth: 950,
      margin: "0 auto",
      padding: "4rem 0",
      background: "#23272F",
      borderRadius: "24px",
      marginTop: "3rem",
      marginBottom: "3rem",
      boxShadow: "0 6px 24px 0 rgba(0,0,0,0.13)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2rem",
        color: "#e1e1e1",
        marginBottom: "2.2rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      Languages & Tools
    </h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.7rem",
        justifyContent: "center",
      }}
    >
      {skills.map((skill, i) => (
        <div
          key={i}
          style={{
            background: "#181A1B",
            borderRadius: "12px",
            padding: "1rem 1.7rem",
            boxShadow: "0 2px 8px 0 rgba(30,30,40,0.11)",
            color: "#e6d6b8",
            display: "flex",
            alignItems: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "1.15rem",
            fontWeight: 600,
            gap: "0.8rem",
          }}
        >
          <span style={{ fontSize: "1.4rem" }}>{skill.icon}</span> {skill.name}
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;

import React, { useState } from "react";
import Modal from "react-modal";

// Your projects array (add real info as you go)
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and style.",
    tech: ["React", "Node.js", "Express"],
    link: "#",
    img: "", // Add image link if you have
    details: `This portfolio was built from scratch using React for the frontend, with a minimalist and coder-inspired dark theme. It features custom sections, responsive design, and subtle Gear 5 (One Piece) energy for personality. All code is organized and built to impress at a professional level.`,
  },
  // Add more projects here!
];

const ProjectsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      style={{
        width: "100%",
        padding: "4rem 0",
        background: "#181A1B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{
        fontSize: "2.2rem",
        color: "#e1e1e1",
        marginBottom: "2.2rem",
        fontFamily: "'Inter', sans-serif"
      }}>
        Projects
      </h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "2rem",
        width: "90%",
        maxWidth: "1080px",
      }}>
        {projects.map((project, idx) => (
          <div key={idx} style={{
            background: "#23272F",
            borderRadius: "18px",
            padding: "2rem",
            boxShadow: "0 4px 18px 0 rgba(0,0,0,0.13)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <h3 style={{ color: "#f6e6c2", fontFamily: "'JetBrains Mono', monospace", fontSize: "1.3rem", marginBottom: "0.7rem" }}>
              {project.title}
            </h3>
            <p style={{ color: "#b0b6c6", marginBottom: "1.1rem" }}>{project.description}</p>
            <div style={{ marginBottom: "0.8rem" }}>
              {project.tech.map((tech, i) => (
                <span key={i} style={{
                  background: "#363945",
                  color: "#c3b7a6",
                  fontSize: "0.95rem",
                  borderRadius: "8px",
                  padding: "0.3rem 0.8rem",
                  marginRight: "0.5rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  display: "inline-block"
                }}>
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => openModal(project)}
              style={{
                marginTop: "1.3rem",
                padding: "0.65rem 1.5rem",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #e6d6b8, #c3b7a6)",
                color: "#23272F",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: "rgba(30, 30, 40, 0.76)", zIndex: 1000 },
          content: {
            maxWidth: "480px",
            margin: "auto",
            borderRadius: "22px",
            background: "#23272F",
            color: "#e1e1e1",
            padding: "2.2rem",
            border: "none",
            boxShadow: "0 4px 32px 0 rgba(0,0,0,0.19)"
          }
        }}
      >
        {selectedProject && (
          <>
            <h2 style={{ color: "#f6e6c2", fontFamily: "'JetBrains Mono', monospace" }}>{selectedProject.title}</h2>
            <p style={{ marginTop: "1.3rem" }}>{selectedProject.details}</p>
            {selectedProject.img && (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                style={{ width: "100%", margin: "1.5rem 0", borderRadius: "12px" }}
              />
            )}
            <button
              onClick={closeModal}
              style={{
                marginTop: "2.3rem",
                padding: "0.45rem 1.3rem",
                borderRadius: "999px",
                background: "linear-gradient(90deg, #e6d6b8, #c3b7a6)",
                color: "#23272F",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem"
              }}
            >
              Close
            </button>
          </>
        )}
      </Modal>
    </section>
  );
};

export default ProjectsSection;

import React from "react";

const testimonials = [
  {
    quote: "Jeremi delivers clean code and even cleaner design—always ahead of the curve.",
    author: "A Friend",
    role: "Software Engineer, OLPCC",
  },
  {
    quote: "Never backs down from a challenge. If Jeremi doesn’t know it, he learns it fast.",
    author: "Self",
    role: "",
  },
  // Add more as you get them!
];

const TestimonialsSection = () => (
  <section
    id="testimonials"
    style={{
      width: "100%",
      maxWidth: 720,
      margin: "0 auto",
      padding: "4rem 0",
      background: "#23272F",
      borderRadius: "20px",
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
      Testimonials
    </h2>
    <div style={{ display: "flex", flexDirection: "column", gap: "2.2rem" }}>
      {testimonials.map((t, i) => (
        <div
          key={i}
          style={{
            background: "#181A1B",
            borderRadius: "14px",
            padding: "2rem",
            boxShadow: "0 2px 8px 0 rgba(30,30,40,0.11)",
            color: "#e6d6b8",
            fontStyle: "italic",
          }}
        >
          <div style={{ fontSize: "1.17rem", marginBottom: "1.2rem" }}>
            “{t.quote}”
          </div>
          <div style={{ color: "#b0b6c6", fontWeight: 500 }}>
            — {t.author} {t.role && <span style={{ color: "#888", fontWeight: 400 }}>({t.role})</span>}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;

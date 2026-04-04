import { useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <nav
      style={{
        position: "fixed",
        top: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          gap: "5px",
          padding: "8px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* 🔥 INDICADOR QUE SE MUEVE */}
        <div
          style={{
            position: "absolute",
            top: "5px",
            left: `${activeIndex * 100}px`,
            width: "100px",
            height: "35px",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #06b6d4, #22c55e)",
            opacity: 0.2,
            transition: "all 0.3s ease",
          }}
        />

        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={() => setActiveIndex(i)}
            style={{
              position: "relative",
              width: "100px",
              textAlign: "center",
              padding: "8px 0",
              borderRadius: "12px",
              fontSize: "14px",
              color: activeIndex === i ? "white" : "#9ca3af",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
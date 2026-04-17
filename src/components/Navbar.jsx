import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((link) => {
      const id = link.href.replace("#", "");
      return document.getElementById(id);
    }).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      if (section) observerRef.current.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: isScrolled ? "10px" : "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
        transition: "top 0.3s ease",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          gap: "4px",
          padding: "6px",
          borderRadius: "16px",
          backdropFilter: "blur(12px)",
          background: "rgba(2, 6, 23, 0.9)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
        }}
      >
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            onClick={() => setActiveIndex(i)}
            style={{
              position: "relative",
              width: "auto",
              textAlign: "center",
              padding: "8px 12px",
              borderRadius: "10px",
              fontSize: "13px",
              color: activeIndex === i ? "#22c55e" : "#9ca3af",
              textDecoration: "none",
              transition: "all 0.3s ease",
              fontWeight: activeIndex === i ? "600" : "400",
              background: activeIndex === i ? "rgba(34, 197, 94, 0.1)" : "transparent",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}

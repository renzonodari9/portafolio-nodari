import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const links = [
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Valor", href: "#value" },
    { name: "Contacto", href: "#contact" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
    <>
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
          className="hidden md:flex"
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
          
          {/* Social Icons */}
          <div className="flex items-center gap-1 ml-4 pl-4 border-l border-[#1f2937]">
            <a
              href="https://github.com/renzonodari9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#1f2937] transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/renzonodari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#1f2937] transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:renzonodari9@gmail.com"
              className="p-2 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#1f2937] transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed top-4 right-4 p-2 bg-[#0f172a] border border-[#1f2937] rounded-xl text-white z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#020617] z-[999] pt-20 px-6">
          <div className="flex flex-col gap-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => { setActiveIndex(i); setMobileOpen(false); }}
                className={`text-xl py-3 border-b border-[#1f2937] ${
                  activeIndex === i ? "text-[#22c55e]" : "text-[#9ca3af]"
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/renzonodari9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#0f172a] border border-[#1f2937] rounded-xl text-center text-white flex items-center justify-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/renzonodari"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#0f172a] border border-[#1f2937] rounded-xl text-center text-white flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
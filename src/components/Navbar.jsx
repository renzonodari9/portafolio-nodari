import { useState, useEffect } from "react";
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#020617]/95 backdrop-blur-md border-b border-[#1f2937]" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center text-[#020617] font-bold text-lg">
              RN
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm text-[#9ca3af] hover:text-white hover:bg-[#1f2937] transition-all"
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
              className="md:hidden p-2 text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[#020617] z-[999] pt-20 px-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xl py-3 border-b border-[#1f2937] text-[#9ca3af] hover:text-white"
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
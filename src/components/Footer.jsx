import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-[#020617] border-t border-[#1f2937]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           
          {/* Logo & Copy */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#22c55e] rounded-2xl flex items-center justify-center text-[#020617] font-bold text-xl shadow-lg shadow-[#22c55e]/20">
              RN
            </div>
            <div>
              <p className="text-white font-semibold text-lg">Renzo Nodari</p>
              <p className="text-[#6b7280] text-sm">Full Stack Developer</p>
            </div>
          </div>
           
          {/* Social Links - Larger */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/renzonodari9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0f172a] border border-[#1f2937] rounded-xl text-[#9ca3af] hover:text-white hover:border-[#22c55e]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/renzonodari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0f172a] border border-[#1f2937] rounded-xl text-[#9ca3af] hover:text-white hover:border-[#22c55e]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:renzonodari9@gmail.com"
              className="p-3 bg-[#0f172a] border border-[#1f2937] rounded-xl text-[#9ca3af] hover:text-white hover:border-[#22c55e]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
           
          {/* Copyright */}
          <div className="flex items-center gap-2 text-[#6b7280] text-sm">
            <span>© {currentYear} Renzo Nodari</span>
            <span className="text-[#22c55e]">•</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500 fill-current" /> en Mendoza
            </span>
          </div>
        </div>

        {/* Bottom links */}
        <div className="mt-8 pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-6 text-sm text-[#6b7280]">
            <a href="#about" className="hover:text-[#22c55e] transition-colors">Sobre mí</a>
            <a href="#projects" className="hover:text-[#22c55e] transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-[#22c55e] transition-colors">Contacto</a>
          </div>
          <p className="text-xs text-[#6b7280]">
            Desarrollado con React + Vite + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
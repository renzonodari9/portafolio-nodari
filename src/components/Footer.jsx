import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-[#020617] border-t border-[#1f2937]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Copy */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center text-[#020617] font-bold text-lg">
              RN
            </div>
            <div>
              <p className="text-white font-medium">Renzo Nodari</p>
              <p className="text-[#6b7280] text-sm">Frontend Developer</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/renzonodari9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0f172a] border border-[#1f2937] rounded-lg text-[#9ca3af] hover:text-white hover:border-[#22c55e]/50 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/renzonodari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0f172a] border border-[#1f2937] rounded-lg text-[#9ca3af] hover:text-white hover:border-[#22c55e]/50 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:renzonodari9@gmail.com"
              className="p-2 bg-[#0f172a] border border-[#1f2937] rounded-lg text-[#9ca3af] hover:text-white hover:border-[#22c55e]/50 transition-all"
            >
              <Mail size={18} />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-[#6b7280] text-sm">
            <span>© {currentYear} Renzo Nodari</span>
            <span className="text-[#22c55e]">•</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart size={14} className="text-red-500 fill-current" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 relative z-10 max-w-4xl"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-5 py-2.5 mb-10"
        >
          <span className="w-2.5 h-2.5 bg-[#22c55e] rounded-full animate-pulse" />
          <span className="text-[#22c55e] text-sm font-medium">Disponible para nuevos proyectos</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
        >
          <span className="text-white">Desarrollador</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#06b6d4]">
            Frontend
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-[#9ca3af] mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Transformo diseños en experiencias web que conectan usuarios con productos.
          <span className="text-white font-medium"> 2+ años construyendo interfaces modernas.</span>
        </motion.p>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-[#9ca3af] text-base mb-12"
        >
          <span className="flex items-center gap-2.5">
            <MapPin size={18} className="text-[#22c55e]" />
            Mendoza, Argentina
          </span>
          <span className="flex items-center gap-2.5">
            <Briefcase size={18} className="text-[#22c55e]" />
            Full Stack Developer
          </span>
        </motion.div>

        {/* CTA Buttons - Large & Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-5 mb-14"
        >
          <a
            href="#projects"
            className="group px-10 py-5 bg-[#22c55e] text-[#020617] rounded-2xl font-bold text-lg hover:bg-[#4ade80] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#22c55e]/25 hover:shadow-[#22c55e]/40 hover:-translate-y-1"
          >
            Ver proyectos
            <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-10 py-5 bg-[#0f172a] text-white border-2 border-[#1f2937] rounded-2xl font-semibold text-lg hover:bg-[#1f2937] hover:border-[#22c55e]/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Contactarme
          </a>
        </motion.div>

        {/* Social Links - Larger buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center gap-5"
        >
          <a
            href="https://github.com/renzonodari9"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#0f172a] border-2 border-[#1f2937] rounded-2xl hover:border-[#22c55e]/50 hover:bg-[#1f2937] transition-all duration-300 hover:-translate-y-1"
          >
            <Github size={24} className="text-[#9ca3af] hover:text-white transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/renzonodari"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-[#0f172a] border-2 border-[#1f2937] rounded-2xl hover:border-[#22c55e]/50 hover:bg-[#1f2937] transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin size={24} className="text-[#9ca3af] hover:text-white transition-colors" />
          </a>
          <a
            href="mailto:renzonodari9@gmail.com"
            className="p-4 bg-[#0f172a] border-2 border-[#1f2937] rounded-2xl hover:border-[#22c55e]/50 hover:bg-[#1f2937] transition-all duration-300 hover:-translate-y-1"
          >
            <Mail size={24} className="text-[#9ca3af] hover:text-white transition-colors" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-[#1f2937] rounded-full flex justify-center pt-3">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-4 bg-[#22c55e] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
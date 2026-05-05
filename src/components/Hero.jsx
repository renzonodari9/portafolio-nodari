import { motion } from "framer-motion";
import { ArrowRight, MapPin, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero relative min-h-screen flex items-center bg-[#0f0f0f] overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(34,197,94,0.15)_0%,transparent_70%)] blur-[60px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] blur-[80px]"
        />
      </div>

      <div className="hero-content w-full">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text text-center lg:text-left"
          >
            {/* Badge with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero-badge inline-flex items-center gap-2.5 px-5 py-2.5 bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.3)] rounded-full mb-8 shadow-[0_0_20px_rgba(34,197,94,0.15)]"
            >
              <motion.div 
                className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400 text-sm font-medium tracking-wider">Disponible para proyectos</span>
            </motion.div>

            {/* Heading with centered RN circle */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="mb-5 text-center lg:text-left"
            >
              <h1 className="hero-name text-[clamp(48px,8vw,88px)] font-extrabold text-white mb-5 leading-[1.05] tracking-[-0.03em]">
                Renzo Nodari
              </h1>
              
              <p className="hero-title text-[clamp(20px,3vw,28px)] text-zinc-400 mb-4 font-light tracking-[-0.01em]">
                Desarrollador Web
              </p>
            </motion.div>

            {/* Tech Pills with glassmorphism */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hero-tech-pills flex flex-wrap gap-2.5 mb-10 justify-center lg:justify-start"
            >
              {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="tech-pill px-4.5 py-2 bg-[rgba(39,39,42,0.6)] border border-[rgba(63,63,70,0.8)] rounded-full text-zinc-300 text-sm font-medium backdrop-blur-[12px] cursor-default transition-all duration-300 shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons with premium effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="hero-cta flex flex-col sm:flex-row gap-3 mb-10 items-center sm:items-start justify-center lg:justify-start"
            >
              <div className="flex gap-3 flex-wrap justify-center">
                <a
                  href="#projects"
                  className="btn-primary inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-gradient-to-r from-green-500 to-green-600 text-zinc-950 rounded-2xl font-bold text-base transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_30px_rgba(34,197,94,0.3),0_0_0_0_rgba(34,197,94,0.4)] relative overflow-hidden"
                >
                  <span className="relative z-10">Ver proyectos</span>
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/CV-Renzo-Nodari.pdf"
                  download
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4.5 bg-[rgba(39,39,42,0.5)] text-zinc-300 border border-[rgba(63,63,70,0.6)] rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-[10px]"
                >
                  <Sparkles size={16} />
                  Descargar CV
                </a>
              </div>
              
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center px-9 py-4.5 bg-[rgba(39,39,42,0.5)] text-zinc-300 border border-[rgba(63,63,70,0.6)] rounded-2xl font-semibold text-base transition-all duration-300 backdrop-blur-[10px]"
              >
                Contacto
              </a>
            </motion.div>

            {/* Social & Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="hero-social flex items-center gap-5 justify-center lg:justify-start"
            >
              <div className="social-links flex gap-3">
                {[
                  { Icon: Github, href: "https://github.com/renzonodari9", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/renzonodari", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:renzonodari9@gmail.com", label: "Email" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className="social-link p-2.5 text-zinc-500 rounded-xl transition-all duration-300 flex items-center"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <div className="hero-location flex items-center gap-1.5 text-zinc-500 text-sm">
                <MapPin size={16} />
                <span>Mendoza, Argentina</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image with 2026 design */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-wrapper relative max-w-[320px] mx-auto lg:mx-0 z-10"
          >
            {/* Animated border gradient */}
            <div className="absolute inset-[-3px] bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl opacity-60 blur-[1px] animate-[rotate_3s_linear_infinite]" />
            
            {/* Image container with glassmorphism */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] transform perspective-[1000px] rotate-y-[-5deg] transition-transform duration-600"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotate-y-[0deg] scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'perspective(1000px) rotate-y-[-5deg] scale(1)'}
            >
              <img
                src="/mifoto.png"
                alt="Renzo Nodari"
                className="hero-image w-full block transition-transform duration-500"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
            
            {/* Stats card with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="hero-stats-card absolute -bottom-5 -right-5 bg-[rgba(39,39,42,0.85)] backdrop-blur-[20px] border border-[rgba(63,63,70,0.6)] rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-10"
            >
              <div className="hero-stats-inner flex gap-7">
                {[
                  { value: "4+", label: "Proyectos" },
                  { value: "2+", label: "Años" }
                ].map((stat) => (
                  <div key={stat.label} className="hero-stat text-center">
                    <div className="hero-stat-value text-2xl font-extrabold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent">{stat.value}</div>
                    <div className="hero-stat-label text-[11px] text-zinc-500 mt-1 tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-indicator-box w-7 h-11 border-2 border-[rgba(113,113,122,0.4)] rounded-full flex justify-center bg-[rgba(39,39,42,0.3)] backdrop-blur-[10px]"
        >
          <motion.div
            className="scroll-indicator-dot w-1.5 h-2.5 bg-gradient-to-b from-green-500 to-green-600 rounded-full mt-2 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

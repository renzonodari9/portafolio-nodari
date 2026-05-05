import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proceso", href: "#proceso" },
    { label: "Proyectos", href: "#projects" },
    { label: "Contacto", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[rgba(15,15,15,0.8)] backdrop-blur-[20px] border-b border-[rgba(63,63,70,0.3)] py-4"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo RN */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <span className="text-white font-bold text-base">RN</span>
        </div>

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-400 font-medium hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-zinc-950 rounded-xl font-semibold text-sm hover:from-green-400 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(34,197,94,0.3)]"
        >
          Contacto
        </a>
      </div>
    </motion.nav>
  );
}

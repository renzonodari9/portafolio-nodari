import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-[#020617] to-[#0f172a]">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          Hola, soy <span className="text-cyan-400">Renzo</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Full Stack Developer 🚀
        </p>

        {/* 💼 TEXTO PRO */}
        <p style={{ marginTop: "15px", fontSize: "16px", color: "#9ca3af", maxWidth: "500px", marginInline: "auto" }}>
          Desarrollo aplicaciones web modernas, APIs escalables y soluciones completas
          enfocadas en rendimiento y experiencia de usuario.
        </p>

        {/* 🔥 BOTONES */}
        <div style={{
          marginTop: "25px",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          
          <a href="#projects" className="btn btn-demo">
            🚀 Ver proyectos
          </a>

          <a href="#contact" className="btn btn-github">
            💬 Contactarme
          </a>

        </div>
      </motion.div>

    </section>
  );
}
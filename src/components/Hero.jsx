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

        {/* 🔥 TITULO PRO */}
        <p className="mt-4 text-gray-400 text-lg">
          Desarrollador Full Stack 💻
        </p>

        {/* 💼 TEXTO MEJORADO */}
        <p style={{
          marginTop: "20px",
          fontSize: "16px",
          color: "#9ca3af",
          maxWidth: "550px",
          marginInline: "auto",
          lineHeight: "1.6"
        }}>
          Como desarrollador Full Stack, mi objetivo es construir soluciones digitales completas:
          diseñando interfaces modernas e intuitivas que cautiven al usuario, y desarrollando
          arquitecturas backend robustas y escalables que resuelvan problemas reales.
        </p>

        {/* 🔥 BOTONES */}
        <div style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
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
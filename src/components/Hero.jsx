import { motion } from "framer-motion";

export default function Hero() {
  const tech = ["Node.js", "MongoDB", "REST APIs", "JWT", "SQL"];

  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#0a0a0a",
      color: "#fff",
      padding: "100px 20px",
      boxSizing: "border-box"
    }}>

      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "-150px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        background: "rgba(59, 130, 246, 0.1)",
        filter: "blur(140px)",
        borderRadius: "50%"
      }} />

      {/* Grid effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center"
      }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            padding: "8px 20px",
            borderRadius: "9999px",
            fontSize: "14px",
            color: "#d1d5db",
            marginBottom: "32px"
          }}
        >
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#4ade80"
          }} />
          Disponible para proyectos
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "24px"
          }}
        >
          Renzo <span style={{ color: "#3b82f6" }}>Nodari</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: "clamp(18px, 3vw, 24px)",
            color: "#d1d5db",
            fontWeight: 500,
            marginBottom: "16px"
          }}
        >
          Desarrollador Backend
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#6b7280",
            fontSize: "clamp(14px, 2vw, 18px)",
            lineHeight: 1.6,
            marginBottom: "40px"
          }}
        >
          Especializado en arquitectura de servidores, bases de datos y APIs REST.
          Diseño sistemas escalables, seguros y optimizados que manejan la lógica de negocio
          y datos de aplicaciones modernas usando Node.js, MongoDB y tecnologías backend.
        </motion.p>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px"
          }}
        >
          {tech.map((t) => (
            <div
              key={t}
              style={{
                padding: "8px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.03)",
                fontSize: "14px",
                color: "#d1d5db",
                transition: "all 0.3s ease",
                cursor: "default"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = "1px solid rgba(59, 130, 246, 0.4)";
                e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              }}
            >
              {t}
            </div>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px"
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#3b82f6",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "16px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#2563eb";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#3b82f6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Ver proyectos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#contact"
            style={{
              padding: "14px 28px",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#d1d5db",
              textDecoration: "none",
              fontSize: "15px",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.1)";
            }}
          >
            Contacto
          </a>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "-20px",
            background: "rgba(24, 24, 27, 0.8)",
            border: "1px solid #2a2a2a",
            borderRadius: "16px",
            padding: "20px 24px",
            backdropFilter: "blur(10px)",
            display: "flex",
            gap: "24px"
          }}
        >
          <div>
            <div style={{ color: "#22c55e", fontSize: "24px", fontWeight: 700 }}>4+</div>
            <div style={{ color: "#71717a", fontSize: "12px" }}>Proyectos</div>
          </div>
          <div>
            <div style={{ color: "#22c55e", fontSize: "24px", fontWeight: 700 }}>100%</div>
            <div style={{ color: "#71717a", fontSize: "12px" }}>Compromiso</div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px"
          }}
        >
          <div style={{ color: "#6b7280", fontSize: "12px" }}>Scroll</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{
              width: "24px",
              height: "40px",
              borderRadius: "12px",
              border: "2px solid #374151",
              display: "flex",
              justifyContent: "center",
              paddingTop: "8px"
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{
                width: "4px",
                height: "8px",
                borderRadius: "2px",
                background: "#6b7280"
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

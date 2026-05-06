import { motion } from "framer-motion";

export default function About() {
  const focusItems = [
    "Diseño de APIs escalables y mantenibles",
    "Arquitectura backend moderna",
    "Autenticación segura (JWT / bcrypt)",
    "Optimización de bases de datos",
    "Código limpio y estructurado"
  ];

  return (
    <section style={{
      position: "relative",
      backgroundColor: "#0a0a0a",
      padding: "120px 20px",
      color: "#fff",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>

      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        background: "rgba(34, 197, 94, 0.05)",
        filter: "blur(160px)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />

      {/* Grid effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1100px",
        margin: "0 auto"
      }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "80px"
          }}
        >
          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-block",
              marginBottom: "28px"
            }}
          >
            <img
              src="/mifoto.png"
              alt="Renzo Nodari"
              style={{
                width: "clamp(150px, 40vw, 200px)",
                height: "clamp(150px, 40vw, 200px)",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid rgba(34, 197, 94, 0.4)",
                boxShadow: "0 0 60px rgba(34, 197, 94, 0.2)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 0 80px rgba(34, 197, 94, 0.3)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 0 60px rgba(34, 197, 94, 0.2)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </motion.div>

          {/* TÍTULO */}
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Sobre mí
          </h2>

          <p style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            Desarrollador backend enfocado en construir sistemas escalables, eficientes y listos para producción.
          </p>
        </motion.div>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "50px",
          alignItems: "center"
        }}>

          {/* TEXTO IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontSize: "clamp(15px, 2vw, 17px)",
              lineHeight: 1.8,
              color: "#d1d5db",
              marginBottom: "20px"
            }}>
              Desarrollador backend especializado en la creacion de APIs REST utilizando Node.js y Mongo DB
            </p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(34, 197, 94, 0.3)",
                background: "rgba(34, 197, 94, 0.05)",
                padding: "8px 16px",
                borderRadius: "9999px",
                fontSize: "13px",
                color: "#6ee7b7"
              }}
            >
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#22c55e",
                animation: "pulse 2s infinite"
              }} />
              Disponible para proyectos backend
            </motion.div>
          </motion.div>

          {/* CARD DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            style={{
              background: "rgba(24, 24, 27, 0.9)",
              border: "1px solid #2a2a2a",
              borderRadius: "20px",
              padding: "32px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease"
            }}
          >
            <h3 style={{
              fontSize: "clamp(18px, 3vw, 20px)",
              color: "#fff",
              marginBottom: "24px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <span style={{
                width: "4px",
                height: "20px",
                backgroundColor: "#22c55e",
                borderRadius: "2px"
              }} />
              Enfoque profesional
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {focusItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    marginBottom: "16px",
                    paddingBottom: "16px",
                    borderBottom: index < focusItems.length - 1 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
                    color: "#d1d5db",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    position: "relative",
                    paddingLeft: "24px"
                  }}
                >
                  <span style={{
                    position: "absolute",
                    left: 0,
                    color: "#22c55e",
                    fontSize: "16px",
                    lineHeight: 1
                  }}>›</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

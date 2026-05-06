import { motion } from "framer-motion";

export default function About() {
  return (
    <section style={{
      position: "relative",
      backgroundColor: "#0a0a0a",
      padding: "100px 20px",
      color: "#fff",
      boxSizing: "border-box"
    }}>

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1000px",
        margin: "0 auto",
        textAlign: "center"
      }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginBottom: "60px"
          }}
        >
          {/* FOTO */}
          <img
            src="/mifoto.png"
            alt="Renzo Nodari"
            style={{
              width: "clamp(150px, 40vw, 200px)",
              height: "clamp(150px, 40vw, 200px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(34, 197, 94, 0.4)",
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.15)",
              marginBottom: "24px"
            }}
          />

          {/* TÍTULO */}
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 40px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Sobre mí
          </h2>

          <p style={{
            color: "#d1d5db",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(16px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            Desarrollador backend enfocado en construir sistemas escalables, eficientes y listos para producción.
          </p>
        </motion.div>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "center",
          textAlign: "left"
        }}>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: 1.8,
              color: "#6b7280",
              marginBottom: "18px"
            }}>
              Desarrollador backend especializado en la creacion de APIs REST utilizando Node.js y Mongo DB
            </p>
          </motion.div>

          {/* CARD DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "rgba(24, 24, 27, 0.8)",
              border: "1px solid #2a2a2a",
              borderRadius: "16px",
              padding: "28px",
              backdropFilter: "blur(10px)"
            }}
          >
            <h3 style={{
              fontSize: "clamp(16px, 2.5vw, 18px)",
              color: "#fff",
              marginBottom: "18px",
              fontWeight: 700
            }}>
              Enfoque profesional
            </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Diseño de APIs escalables y mantenibles",
                "Arquitectura backend moderna",
                "Autenticación segura (JWT / bcrypt)",
                "Optimización de bases de datos",
                "Código limpio y estructurado"
              ].map((item) => (
                <li key={item} style={{
                  marginBottom: "12px",
                  color: "#d1d5db",
                  fontSize: "14px",
                  position: "relative",
                  paddingLeft: "18px"
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    color: "#22c55e"
                  }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

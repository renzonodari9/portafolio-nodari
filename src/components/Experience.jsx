import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer",
    company: "Freelance",
    role: "API & System Design",
    description:
      "Diseño y desarrollo de sistemas backend escalables enfocados en rendimiento, seguridad y lógica de negocio real. Construcción de APIs optimizadas y estructuras de datos eficientes.",
    backend: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth", "Data Modeling"],
    frontend: ["React", "API Integration"],
  },
  {
    title: "Full Stack Developer",
    company: "Proyectos Web",
    role: "Application Development",
    description:
      "Desarrollo de aplicaciones web completas con arquitectura limpia, autenticación segura e integración con APIs externas.",
    backend: ["Node.js", "Express", "MongoDB", "Authentication", "CRUD Systems"],
    frontend: ["React", "TypeScript", "State Management"],
  },
  {
    title: "Backend Developer",
    company: "Autodidacta",
    role: "Backend Foundations",
    description:
      "Formación enfocada en creación de APIs, lógica de negocio y buenas prácticas de desarrollo backend.",
    backend: ["Node.js", "Express", "MongoDB", "Middleware"],
    frontend: ["JavaScript", "HTML", "CSS"],
  },
];

export default function Experience() {
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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Experiencia Profesional
          </h2>

          <p style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            Enfoque en backend, escalabilidad y resolución de problemas reales
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "32px"
        }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              style={{
                background: "rgba(24, 24, 27, 0.9)",
                border: "1px solid #2a2a2a",
                borderRadius: "20px",
                padding: "28px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.4)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = "1px solid #2a2a2a";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
              }}
            >
              {/* Company */}
              <span style={{
                fontSize: "12px",
                color: "#6ee7b7",
                fontWeight: 600,
                display: "inline-block",
                marginBottom: "8px",
                padding: "4px 10px",
                background: "rgba(34, 197, 94, 0.1)",
                borderRadius: "6px"
              }}>
                {exp.company}
              </span>

              {/* Title */}
              <h3 style={{
                color: "#fff",
                fontSize: "clamp(16px, 2.5vw, 20px)",
                margin: "8px 0 12px 0",
                fontWeight: 700
              }}>
                {exp.title}
              </h3>

              {/* Role */}
              <span style={{
                color: "#3b82f6",
                fontSize: "13px",
                marginBottom: "16px",
                display: "block"
              }}>
                {exp.role}
              </span>

              {/* Description */}
              <p style={{
                color: "#d1d5db",
                fontSize: "14px",
                lineHeight: 1.6,
                marginBottom: "20px"
              }}>
                {exp.description}
              </p>

              {/* Backend */}
              <div style={{ marginBottom: "16px" }}>
                <span style={{
                  color: "#3b82f6",
                  fontSize: "12px",
                  marginBottom: "8px",
                  display: "block",
                  fontWeight: 600
                }}>
                  Backend
                </span>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}>
                  {exp.backend.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "12px",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        background: "rgba(59, 130, 246, 0.1)",
                        color: "#93c5fd",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <span style={{
                  color: "#22c55e",
                  fontSize: "12px",
                  marginBottom: "8px",
                  display: "block",
                  fontWeight: 600
                }}>
                  Frontend
                </span>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px"
                }}>
                  {exp.frontend.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "12px",
                        padding: "6px 12px",
                        borderRadius: "8px",
                        background: "rgba(34, 197, 94, 0.1)",
                        color: "#6ee7b7",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

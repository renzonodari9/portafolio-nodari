import { motion } from "framer-motion";

const skills = [
  "Node.js",
  "Python",
  "Java",
  "PHP",
  "SQL",
  "NoSQL",
  "MongoDB",
  "REST APIs",
  "JWT Auth",
  "Git",
  "HTML5",
  "CSS3",
  "JavaScript"
];

// Duplicamos las habilidades para crear un bucle infinito fluido
const allSkills = [...skills, ...skills];

export default function Skills() {
  return (
    <section style={{
      position: "relative",
      backgroundColor: "#0a0a0a",
      padding: "120px 0",
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
        margin: "0 auto",
        padding: "0 20px"
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Habilidades Técnicas
          </h2>

          <p style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            Tecnologías que domino y utilizo en producción para desarrollo backend profesional
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div style={{
          overflow: "hidden",
          margin: "0 -20px",
          padding: "20px 0"
        }}>
          <motion.div
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}
            style={{
              display: "flex",
              gap: "16px",
              width: "max-content"
            }}
          >
            {allSkills.map((skill, index) => (
              <motion.span
                key={`${skill}-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                style={{
                  fontSize: "clamp(13px, 2vw, 15px)",
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: "rgba(24, 24, 27, 0.9)",
                  color: "#6ee7b7",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(34, 197, 94, 0.1)";
                  e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.4)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(24, 24, 27, 0.9)";
                  e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

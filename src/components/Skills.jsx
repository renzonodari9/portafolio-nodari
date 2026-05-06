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

export default function Skills() {
  return (
    <section style={{ padding: "100px 20px", background: "#0f0f0f" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", color: "#fff", fontWeight: 800 }}>
            Habilidades
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "10px" }}>
            Tecnologías que domino y utilizo en producción
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center"
          }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{
                fontSize: "13px",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "rgba(34, 197, 94, 0.1)",
                color: "#6ee7b7",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                fontWeight: 500
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

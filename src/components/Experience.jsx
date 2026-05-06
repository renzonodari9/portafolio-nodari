import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer",
    company: "Freelance",
    role: "API & System Design",
    description:
      "Diseño y desarrollo de sistemas backend escalables enfocados en rendimiento, seguridad y lógica de negocio real. Construcción de APIs optimizadas y estructuras de datos eficientes.",
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Data Modeling",
    ],
    frontend: ["React", "API Integration"],
  },
  {
    title: "Full Stack Developer",
    company: "Proyectos Web",
    role: "Application Development",
    description:
      "Desarrollo de aplicaciones web completas con arquitectura limpia, autenticación segura e integración con APIs externas.",
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "Authentication",
      "CRUD Systems",
    ],
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
    <section className="experience-section">

      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <h2>Experiencia Profesional</h2>
          <p>Enfoque en backend, escalabilidad y resolución de problemas reales</p>
        </motion.div>

        {/* Grid */}
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="experience-card"
            >

              {/* Title */}
              <h3>{exp.title}</h3>

              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="dot">•</span>
                <span className="role">{exp.role}</span>
              </div>

              {/* Description */}
              <p className="description">{exp.description}</p>

              {/* Backend */}
              <div className="stack-section">
                <span className="label backend">Backend</span>
                <div className="chips">
                  {exp.backend.map((t) => (
                    <span key={t} className="chip backend-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="stack-section">
                <span className="label frontend">Frontend</span>
                <div className="chips">
                  {exp.frontend.map((t) => (
                    <span key={t} className="chip frontend-chip">
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
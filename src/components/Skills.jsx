import { motion } from "framer-motion";

const skills = [
  { name: 'React', icon: '⚛️', percent: 90 },
  { name: 'Node.js', icon: '🟢', percent: 85 },
  { name: 'Express', icon: '⚡', percent: 82 },
  { name: 'MongoDB', icon: '🍃', percent: 80 },
  { name: 'TypeScript', icon: '📘', percent: 75 },
  { name: 'REST API', icon: '🔌', percent: 88 },
  { name: 'JWT', icon: '🔐', percent: 85 },
  { name: 'Git', icon: '🔧', percent: 85 }
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">
            Tecnologías que domino y utilizo día a día
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="skill-card"
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="skill-percent">{skill.percent}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

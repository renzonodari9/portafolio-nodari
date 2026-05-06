import { motion } from "framer-motion";

const skills = [
  { name: 'React', icon: '⚛️', percent: 90, level: 'Experto' },
  { name: 'Node.js', icon: '🟢', percent: 85, level: 'Avanzado' },
  { name: 'Express', icon: '⚡', percent: 82, level: 'Avanzado' },
  { name: 'MongoDB', icon: '🍃', percent: 80, level: 'Avanzado' },
  { name: 'TypeScript', icon: '📘', percent: 75, level: 'Intermedio' },
  { name: 'REST API', icon: '🔌', percent: 88, level: 'Experto' },
  { name: 'JWT Auth', icon: '🔐', percent: 85, level: 'Avanzado' },
  { name: 'Git', icon: '🔧', percent: 85, level: 'Avanzado' }
];

export default function Skills() {
  return (
    <section id="skills" style={{ backgroundColor: '#0f0f0f', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{textAlign: 'center'}}>Habilidades Técnicas</h2>
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Stack tecnológico para arquitecturas escalables
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
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <span style={{fontSize: '12px', color: '#22c55e', fontWeight: 600}}>{skill.level}</span>
                </div>
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
              <p className="skill-percent">{skill.percent}% profesional</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

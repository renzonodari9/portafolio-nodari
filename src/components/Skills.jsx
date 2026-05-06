import { motion } from "framer-motion";

const backendSkills = [
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '⚡' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'REST API', icon: '🔌' },
  { name: 'JWT Auth', icon: '🔐' },
  { name: 'Redis', icon: '⚡' }
];

const frontendSkills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'HTML5', icon: '📄' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' }
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
            Stack completo para desarrollo web profesional
          </p>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <h3 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: '#22c55e',
            marginBottom: '24px',
            textAlign: 'center'
          }}>Backend</h3>
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="skill-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 style={{
            fontSize: '20px',
            fontWeight: 600,
            color: '#3b82f6',
            marginBottom: '24px',
            textAlign: 'center'
          }}>Frontend</h3>
          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="skill-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px'
                }}
              >
                <span style={{ fontSize: '24px' }}>{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

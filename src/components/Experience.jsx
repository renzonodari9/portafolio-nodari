import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 - Presente",
    title: "Full Stack Developer",
    company: "Freelance",
    description: "Desarrollo de aplicaciones web completas para diversos clientes, utilizando React, Node.js y MongoDB.",
    icon: "🚀"
  },
  {
    date: "2023 - 2024",
    title: "Frontend Developer",
    company: "Proyectos personales",
    description: "Creación de interfaces modernas y responsivas, enfocadas en la experiencia de usuario.",
    icon: "🎨"
  },
  {
    date: "2022 - 2023",
    title: "Learning & Practice",
    company: "Autodidacta",
    description: "Formación intensiva en tecnologías web modernas y mejores prácticas de desarrollo.",
    icon: "📚"
  }
];

export default function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: '#0f0f0f', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Experiencia</h2>
          <p className="section-subtitle">
            Mi trayectoria profesional
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)',
                border: '1px solid #3f3f46',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
              className="experience-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(34, 197, 94, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Gradient orb decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
                filter: 'blur(20px)',
                pointerEvents: 'none'
              }} />

              {/* Icon */}
              <div style={{
                fontSize: '40px',
                marginBottom: '20px'
              }}
              className="experience-icon"
              >
                {exp.icon}
              </div>

              {/* Date badge */}
              <div style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '9999px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '12px',
                  color: '#4ade80',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}>{exp.date}</span>
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '6px'
              }}>
                {exp.title}
              </h3>
              
              <p style={{
                fontSize: '15px',
                color: '#22c55e',
                marginBottom: '16px',
                fontWeight: 600
              }}>
                {exp.company}
              </p>
              
              <p style={{
                fontSize: '14px',
                color: '#a1a1aa',
                lineHeight: 1.7
              }}>
                {exp.description}
              </p>

              {/* Decorative line on hover */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #22c55e 0%, #3b82f6 100%)',
                  transformOrigin: 'left'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 - Presente",
    title: "Full Stack Developer",
    company: "Freelance",
    role: "Backend & Frontend",
    description: "Arquitectura y desarrollo de aplicaciones empresariales. Implementación de microservicios, CI/CD y monitoreo proactivo.",
    logros: ["4+ proyectos entregados", "99.9% uptime", "Tests automatizados", "JWT implementado"],
    backend: ["Node.js", "Express", "MongoDB", "Redis"],
    frontend: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    date: "2023 - 2024",
    title: "Frontend Developer",
    company: "Proyectos personales",
    role: "Frontend Especializado",
    description: "Liderazgo técnico en migraciones complejas de JavaScript a TypeScript. Optimización de Core Web Vitals hasta 95+ puntos.",
    logros: ["95+ PageSpeed", "0 critical bugs", "100% TypeScript", "PWA implementada"],
    frontend: ["React", "TypeScript", "API Integration", "PWA"],
    backend: ["REST API", "Node.js básico"]
  },
  {
    date: "2022 - 2023",
    title: "Junior Full Stack",
    company: "Autodidacta → Senior",
    role: "Backend + Frontend",
    description: "Formación intensiva en arquitectura de software, patrones de diseño y mejores prácticas. De junior a senior en 24 meses.",
    logros: ["2000+ horas", "15+ proyectos", "Senior en 2 años", "Clean Code"],
    backend: ["Node.js", "Express", "MongoDB"],
    frontend: ["React", "JavaScript", "HTML/CSS"]
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
          <h2 className="section-title" style={{textAlign: 'center'}}>Experiencia Profesional</h2>
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Trayectoria acelerada: Junior → Senior en 24 meses
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="experience-card"
              style={{
                background: 'linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)',
                border: '1px solid #3f3f46',
                borderRadius: '20px',
                padding: '32px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease'
              }}
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
              {/* Gradient orb */}
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
              
              <div style={{
                fontSize: '15px',
                color: '#22c55e',
                marginBottom: '12px',
                fontWeight: 600
              }}>
                {exp.company} • <span style={{color: '#60a5fa'}}>{exp.role}</span>
              </div>
              
              <p style={{
                fontSize: '14px',
                color: '#a1a1aa',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {exp.description}
              </p>

              {/* Logros */}
              <div style={{ marginBottom: '20px' }}>
                <p style={{
                  fontSize: '12px',
                  color: '#71717a',
                  marginBottom: '8px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>Logros:</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {exp.logros.map((logro) => (
                    <div key={logro} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      color: '#d4d4d8'
                    }}>
                      <span style={{ color: '#22c55e', fontSize: '14px' }}>✓</span>
                      {logro}
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend & Frontend */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <p style={{
                    fontSize: '11px',
                    color: '#60a5fa',
                    marginBottom: '6px',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>Backend:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {exp.backend.map((t) => (
                      <span key={t} style={{
                        padding: '2px 8px',
                        background: 'rgba(96, 165, 250, 0.1)',
                        color: '#60a5fa',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 600
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{
                    fontSize: '11px',
                    color: '#4ade80',
                    marginBottom: '6px',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>Frontend:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {exp.frontend.map((t) => (
                      <span key={t} style={{
                        padding: '2px 8px',
                        background: 'rgba(74, 222, 128, 0.1)',
                        color: '#4ade80',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 600
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative line */}
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

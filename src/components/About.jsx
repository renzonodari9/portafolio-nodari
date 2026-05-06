import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "4+", label: "Proyectos", desc: "Entregados" },
    { value: "2+", label: "Años", desc: "Exp. profesional" },
    { value: "100%", label: "Compromiso", desc: "Garantizado" }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#1a1a1a', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px'}}>
            Sobre mí
            <span style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)'
            }}>
              <span style={{fontSize: '16px', color: '#ffffff', fontWeight: 800}}>RN</span>
            </span>
          </h2>
          <p className="section-subtitle">
            Arquitecto soluciones digitales que generan valor real
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-text" style={{fontSize: '18px', lineHeight: 1.8, marginBottom: '24px'}}>
              <strong style={{color: '#22c55e'}}>Senior Full Stack Developer</strong> con +2 años transformando requerimientos complejos en productos digitales escalables. Mi enfoque combina código limpio, arquitectura sólida y obsesión por la experiencia del usuario.
            </p>
            <p className="about-text" style={{fontSize: '16px', lineHeight: 1.8}}>
              Especializado en el ecosistema JavaScript/TypeScript, diseño APIs REST eficientes y frontends reactivos que manejan alto tráfico. Cada línea de código está pensada para escalar.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat" style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)',
                  border: '1px solid #3f3f46',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#3f3f46';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <div className="about-stat-value" style={{fontSize: '32px', fontWeight: 800, color: '#22c55e'}}>{stat.value}</div>
                  <div className="about-stat-label" style={{fontSize: '14px', color: '#a1a1aa', marginTop: '4px'}}>{stat.label}</div>
                  <div style={{fontSize: '11px', color: '#71717a', marginTop: '2px'}}>{stat.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: 'linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid #3f3f46'
            }}
          >
            <h3 style={{fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '24px'}}>
              Valor diferencial
            </h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {[
                { icon: '⚡', text: 'Entrega continua con CI/CD y tests automatizados' },
                { icon: '🛡', text: 'Código mantenible y documentado' },
                { icon: '📈', text: 'Optimización de rendimiento (90+ PageSpeed)' },
                { icon: '🎯', text: 'Enfoque en conversión y UX' },
                { icon: '🔄', text: 'Refactorización proactiva' }
              ].map((item) => (
                <li key={item.text} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '12px', 
                  marginBottom: '16px',
                  color: '#a1a1aa',
                  fontSize: '15px',
                  lineHeight: 1.6
                }}>
                  <span style={{ color: '#22c55e', fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

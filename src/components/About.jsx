import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "4+", label: "Proyectos" },
    { value: "2+", label: "Años exp." },
    { value: "100%", label: "Compromiso" }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: '#1a1a1a' }}>
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
            Desarrollador apasionado por crear soluciones innovadoras
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-text">
              Soy un desarrollador Full Stack con más de 2 años de experiencia creando 
              aplicaciones web modernas. Me especializo en React, Node.js y MongoDB, 
              construyendo soluciones que no solo funcionan, sino que escalan.
            </p>
            <p className="about-text">
              Mi enfoque combina código limpio, diseño atractivo y rendimiento óptimo. 
              Cada proyecto es una oportunidad para aprender algo nuevo y superar límites.
            </p>

            <div className="about-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about-stat">
                  <div className="about-stat-value">{stat.value}</div>
                  <div className="about-stat-label">{stat.label}</div>
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
              backgroundColor: '#27272a', 
              padding: '32px', 
              borderRadius: '16px',
              border: '1px solid #3f3f46'
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', marginBottom: '24px' }}>
              Mi enfoque
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Código limpio y mantenible',
                'Diseño centrado en el usuario',
                'Rendimiento y optimización',
                'Aprendizaje continuo'
              ].map((item) => (
                <li key={item} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '16px',
                  color: '#a1a1aa',
                  fontSize: '14px'
                }}>
                  <span style={{ color: '#22c55e', fontSize: '18px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

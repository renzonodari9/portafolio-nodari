import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#1a1a1a', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '12px',
            flexDirection: 'column'
          }}>
            <img 
              src="/mifoto.png" 
              alt="Renzo Nodari" 
              style={{
                width: 'clamp(150px, 40vw, 200px)',
                height: 'clamp(150px, 40vw, 200px)',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid rgba(34, 197, 94, 0.5)',
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
                marginBottom: '20px',
                display: 'block',
                margin: '0 auto 20px'
              }}
            />
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
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Desarrollador backend especializado en soluciones escalables
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
              Soy un <strong style={{color: '#22c55e'}}>desarrollador backend especializado</strong> con +2 años creando 
              arquitecturas de software robustas. Mi enfoque está en el rendimiento, seguridad y escalabilidad del servidor.
            </p>
            <p className="about-text" style={{fontSize: '16px', lineHeight: 1.8}}>
              Trabajo con <strong style={{color: '#22c55e'}}>Node.js, Express, MongoDB</strong> y tecnologías modernas 
              para crear APIs REST eficientes y sistemas que manejan alto tráfico.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-value">4+</div>
                <div className="about-stat-label">Proyectos</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">2+</div>
                <div className="about-stat-label">Años exp.</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">100%</div>
                <div className="about-stat-label">Compromiso</div>
              </div>
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
              borderRadius: '20px',
              border: '1px solid #3f3f46'
            }}
          >
            <h3 style={{fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '24px'}}>
              Mi enfoque como backend
            </h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {[
                { icon: '⚡', text: 'APIs REST optimizadas (<200ms)' },
                { icon: '🛡️', text: 'Código mantenible y escalable' },
                { icon: '📈', text: 'Arquitectura de microservicios' },
                { icon: '🔐', text: 'Autenticación JWT segura' },
                { icon: '🗄️', text: 'Diseño de bases de datos' }
              ].map((item) => (
                <li key={item.text} style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '16px',
                  color: '#a1a1aa',
                  fontSize: '15px'
                }}>
                  <span style={{color: '#22c55e', fontSize: '18px'}}>{item.icon}</span>
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

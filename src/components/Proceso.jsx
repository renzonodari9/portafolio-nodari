import { motion } from "framer-motion";

const proceso = [
  {
    step: "01",
    title: "Descubrimiento",
    description: "Entiendo tus objetivos, público y requerimientos técnicos para planificar la mejor solución."
  },
  {
    step: "02",
    title: "Diseño UX/UI",
    description: "Creo wireframes y prototipos interactivos enfocados en la experiencia del usuario."
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Código limpio siguiendo mejores prácticas, con tests y revisiones continuas."
  },
  {
    step: "04",
    title: "Despliegue",
    description: "Release automatizado con CI/CD, monitoreo y optimización de rendimiento."
  }
];

export default function Proceso() {
  return (
    <section id="proceso" className="section" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Mi Proceso</h2>
          <p className="section-subtitle">
            Metodología profesional para resultados excepcionales
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px'
        }}>
          {proceso.map((item, index) => (
            <motion.div
              key={item.step}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Step number with gradient */}
              <div style={{
                fontSize: '48px',
                fontWeight: 900,
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                marginBottom: '20px',
                fontFamily: 'monospace'
              }}>
                {item.step}
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px'
              }}>
                {item.title}
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#a1a1aa',
                lineHeight: 1.7
              }}>
                {item.description}
              </p>

              {/* Decorative line */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #22c55e 0%, #3b82f6 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '1'}
              onMouseLeave={(e) => e.target.style.opacity = '0'}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

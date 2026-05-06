import { motion } from "framer-motion";

const services = [
  {
    icon: "🚀",
    title: "Arquitectura Full Stack",
    description: "Diseño de sistemas escalables con React, Node.js y MongoDB. Enfoque en rendimiento y mantenibilidad.",
    benefits: ["Microservicios", "REST APIs", "Clean Architecture"]
  },
  {
    icon: "🎨",
    title: "UI/UX Engineering",
    description: "Interfaces que convierten. Mi UX engineering aumenta conversión en 40% promedio.",
    benefits: ["+40% conversión", "95+ PageSpeed", "Mobile First"]
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Optimización agresiva: bundle splitting, lazy loading, caché estratégico. Resultados medibles.",
    benefits: ["<200ms API", "90+ Lighthouse", "Core Web Vitals OK"]
  },
  {
    icon: "🛠️",
    title: "DevOps & Deployment",
    description: "CI/CD con GitHub Actions, monitoreo proactivo y despliegues sin downtime.",
    benefits: ["99.9% uptime", "Zero-downtime", "Auto-scaling"]
  },
  {
    icon: "📱",
    title: "Progressive Web Apps",
    description: "PWAs que se sienten nativas. Offline-first, push notifications y instalables.",
    benefits: ["Offline ready", "Push ready", "Installable"]
  },
  {
    icon: "🔧",
    title: "Consultoría Técnica",
    description: "Code reviews, auditoría de arquitectura y mentoría de equipos de desarrollo.",
    benefits: ["Code review", "Architecture audit", "Team mentoring"]
  }
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#1a1a1a', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{textAlign: 'center'}}>Servicios Senior</h2>
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Soluciones empresariales con mentalidad de escalabilidad
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              {/* Benefits */}
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px'}}>
                {service.benefits.map((b) => (
                  <span key={b} style={{
                    padding: '3px 10px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    color: '#4ade80',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>{b}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

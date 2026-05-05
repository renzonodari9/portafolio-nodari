import { motion } from "framer-motion";

const services = [
  {
    icon: "🚀",
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas, rápidas y escalables con las mejores tecnologías del mercado."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Interfaces atractivas y funcionales que mejoran la experiencia del usuario final."
  },
  {
    icon: "⚡",
    title: "Optimización",
    description: "Mejora del rendimiento y velocidad de carga de aplicaciones existentes."
  },
  {
    icon: "🛠️",
    title: "Consultoría",
    description: "Asesoramiento técnico para tus proyectos de software y arquitectura."
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Diseños que se adaptan perfectamente a cualquier dispositivo y pantalla."
  },
  {
    icon: "🔧",
    title: "Mantenimiento",
    description: "Soporte continuo y actualizaciones para mantener tu aplicación al día."
  }
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Servicios</h2>
          <p className="section-subtitle">
            Lo que puedo hacer por ti
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

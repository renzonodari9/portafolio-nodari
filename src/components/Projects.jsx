import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico. Permite gestion de productos, carrito de compras, pagos y panel de administración con métricas en tiempo real.",
    image: "/img-app.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "Ver Tienda", url: "https://ecommerce-store-v8hq.onrender.com" },
      { label: "Admin Panel", url: "https://ecommerce-admin-yvnu.onrender.com" }
    ],
    herramientas: ["JWT Auth", "Stripe API", "Multer", "Bcrypt"],
    resultado: "99.9% uptime, 500+ usuarios"
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima con datos en tiempo real. Consume APIs externas, implementa caché inteligente y diseño responsive óptimo para consultas rápidas.",
    image: "/img-app.png",
    tech: ["React", "API REST", "CSS Modules"],
    links: [
      { label: "Ver Demo", url: "https://weather-app-front-kdpl.onrender.com" }
    ],
    herramientas: ["Fetch API", "LocalStorage", "Geolocation API", "Chart.js"],
    resultado: "Real-time data, <100ms response"
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: '#0f0f0f', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{textAlign: 'center'}}>Proyectos Destacados</h2>
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Soluciones empresariales con explicación detallada
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="project-card"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Herramientas utilizadas */}
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  {project.herramientas.map((h) => (
                    <span key={h} style={{
                      padding: '4px 10px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#60a5fa',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600
                    }}>{h}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
                </div>

                {/* Resultado */}
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  fontSize: '12px',
                  color: '#4ade80',
                  fontWeight: 600
                }}>
                  ✅ {project.resultado}
                </div>

                <div className="project-links">
                  {project.links?.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

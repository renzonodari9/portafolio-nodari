import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Arquitectura de microservicios con React, Node.js y MongoDB. Panel admin + tienda con 99.9% uptime.",
    image: "/img-app.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "Ver Tienda", url: "https://ecommerce-store-v8hq.onrender.com" },
      { label: "Admin Panel", url: "https://ecommerce-admin-yvnu.onrender.com" }
    ],
    metrics: ["99.9% uptime", "500+ users", "<200ms API"]
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard en tiempo real con APIs externas, caché inteligente y diseño responsive óptimo.",
    image: "/img-app.png",
    tech: ["React", "API", "CSS"],
    links: [
      { label: "Ver Demo", url: "https://weather-app-front-kdpl.onrender.com" }
    ],
    metrics: ["Real-time data", "<100ms response", "PWA ready"]
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
            Soluciones empresariales con métricas reales
          </p>
        </motion.div>

        <div className="projects-grid">
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
                
                {/* Metrics */}
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '16px',
                  flexWrap: 'wrap'
                }}>
                  {project.metrics.map((m) => (
                    <span key={m} style={{
                      padding: '4px 10px',
                      background: 'rgba(34, 197, 94, 0.08)',
                      color: '#4ade80',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600
                    }}>{m}</span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-tag">{t}</span>
                  ))}
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

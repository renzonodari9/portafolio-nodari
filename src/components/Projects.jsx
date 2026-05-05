import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito, pagos y panel de administración.",
    image: "/img-app.png",
    tech: ["React", "Node.js", "MongoDB"],
    links: [
      { label: "Ver Tienda", url: "https://ecommerce-store-v8hq.onrender.com" },
      { label: "Admin Panel", url: "https://ecommerce-admin-yvnu.onrender.com" }
    ]
  },
  {
    title: "Weather Dashboard",
    description: "Dashboard del clima con datos en tiempo real, mapas y pronósticos extendidos.",
    image: "/img-app.png",
    tech: ["React", "API", "CSS"],
    links: [
      { label: "Ver Demo", url: "https://weather-app-front-kdpl.onrender.com" }
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Proyectos</h2>
          <p className="section-subtitle">
            Algunos de mis trabajos más recientes
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
                   )) || (
                     <>
                       <a href={project.live} className="project-link">Demo</a>
                       <a href={project.code} className="project-link">Código</a>
                     </>
                   )}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

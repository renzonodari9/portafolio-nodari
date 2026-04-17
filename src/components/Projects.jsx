import { useState } from "react";
import { ExternalLink, Github, Code2, Play } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "E-commerce Platform",
      desc: "Plataforma de comercio electrónico completa con panel de administración y tienda online. Sistema de gestión de productos, categorías y carrito de compras.",
      tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Vite"],
      github: "https://github.com/renzonodari9/ecommerce-api",
      demo: "https://ecommerce-store-v8hq.onrender.com",
      admin: "https://ecommerce-admin-yvnu.onrender.com",
      img: "/foto.png",
      featured: true
    },
    {
      name: "App del Clima - Mendoza",
      desc: "Aplicación del clima en tiempo real con datos actualizados cada momento. Incluye pronóstico de 5 días, información detallada del viento, humedad y más.",
      tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "OpenWeatherMap"],
      github: "https://github.com/renzonodari9/weather-app.git",
      demo: "https://weather-app-front-kdpl.onrender.com",
      video: "https://youtu.be/xqgzAnreU1I",
      img: "/img-app.png"
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      "React": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "TypeScript": "bg-blue-600/20 text-blue-300 border-blue-600/30",
      "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
      "MongoDB": "bg-green-600/20 text-green-300 border-green-600/30",
      "Express": "bg-gray-500/20 text-gray-300 border-gray-500/30",
      "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Python": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "OpenWeatherMap": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Prisma": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      "PostgreSQL": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Vite": "bg-purple-500/20 text-purple-400 border-purple-500/30"
    };
    return colors[tech] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-badge">
          <Code2 size={16} />
          Portfolio
        </span>
        <h2>Proyectos Destacados</h2>
        <p className="section-desc">
          Cada proyecto representa un desafío único que me permitió crecer como desarrollador Full Stack.
        </p>
      </div>

      {featuredProject && (
        <div className="featured-project">
          <div className="featured-header">
            <h3>E-commerce Platform</h3>
            <span className="featured-badge">Destacado</span>
          </div>
          
          <div className="featured-content">
            <div className="featured-image-wrapper">
              <img src={featuredProject.img} alt={featuredProject.name} className="featured-img" />
            </div>

            <div className="featured-info">
              <p className="featured-desc">{featuredProject.desc}</p>
              
              <div className="tech-badges">
                {featuredProject.tech.map((t, idx) => (
                  <span key={idx} className={`tech-badge ${getTechColor(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="featured-links">
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-github-pro">
                  <Github size={18} />
                  GitHub
                </a>
                <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn-demo-pro">
                  <ExternalLink size={18} />
                  Tienda
                </a>
                <a href={featuredProject.admin} target="_blank" rel="noopener noreferrer" className="btn-demo-pro">
                  <ExternalLink size={18} />
                  Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="projects-grid" style={{ marginTop: "60px" }}>
        {otherProjects.map((p, i) => (
          <div
            key={i}
            className="project-card-pro"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="project-image-container">
              <img src={p.img} alt={p.name} className="project-img" />
              <div className={`project-overlay ${hoveredIndex === i ? "active" : ""}`}>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                  <ExternalLink size={20} />
                  Ver Demo
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{p.name}</h3>
              <p className="project-desc">{p.desc}</p>

              <div className="tech-badges">
                {p.tech.map((t, idx) => (
                  <span key={idx} className={`tech-badge ${getTechColor(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-github-pro">
                  <Github size={18} />
                  Código
                </a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-demo-pro">
                  <ExternalLink size={18} />
                  Demo
                </a>
                {p.video && (
                  <a href={p.video} target="_blank" rel="noopener noreferrer" className="btn-video-pro">
                    <Play size={18} />
                    Ver Video
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

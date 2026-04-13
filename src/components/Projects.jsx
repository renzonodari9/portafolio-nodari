import { useState } from "react";
import { ExternalLink, Github, Code2, Play } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  const projects = [
    {
      name: "App del Clima - Mendoza",
      desc: "Aplicación del clima en tiempo real con datos actualizados cada momento. Incluye pronóstico de 5 días, información detallada del viento, humedad y más.",
      tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "OpenWeatherMap"],
      github: "https://github.com/renzonodari9/weather-app.git",
      demo: "https://weather-mdz.netlify.app",
      img: "portafolio-nodari/public/Clima Mendoza - App del Clima y 2 páginas más - Personal_ Microsoft​ Edge 13_4_2026 11_39_03.png",
      featured: true,
      videoId: "xqgzAnreU1I"
    },
    {
      name: "Notes App Full Stack",
      desc: "Aplicación completa de notas con sistema CRUD completo. Gestión de usuarios, autenticación y base de datos en la nube.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/renzonodari9/notas-backend.git",
      demo: "https://frontend-et8n.onrender.com",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
    },
    {
      name: "Text Analyzer API",
      desc: "API REST en Python para análisis de texto. Procesa y extrae métricas como sentiment analysis y word count.",
      tech: ["Python", "FastAPI", "Render", "Pandas"],
      github: "https://github.com/renzonodari9/text-analyzer-api.git",
      demo: "https://text-analyzer-api-hquf.onrender.com/app",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200"
    }
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
      "FastAPI": "bg-green-500/20 text-green-400 border-green-500/30",
      "Render": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Pandas": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "OpenWeatherMap": "bg-orange-500/20 text-orange-400 border-orange-500/30"
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
            <h3>🚀 Proyecto Principal</h3>
          </div>
          
          <div className="featured-content">
            <div className="featured-video-container">
              <img src={featuredProject.img} alt={featuredProject.name} className="featured-img" />
              <div className="video-overlay" onClick={() => setShowVideo(true)}>
                <div className="play-button">
                  <Play size={32} fill="white" />
                </div>
                <span>Ver Video Explicativo</span>
              </div>
              {featuredProject.featured && <span className="featured-badge">Destacado</span>}
            </div>

            <div className="featured-info">
              <h3>{featuredProject.name}</h3>
              <p className="featured-desc">{featuredProject.desc}</p>
              
              <div className="tech-badges">
                {featuredProject.tech.map((t, idx) => (
                  <span key={idx} className={`tech-badge ${getTechColor(t)}`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="featured-footer">
                <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-github-pro">
                  <Github size={18} />
                  Ver Código
                </a>
                <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn-demo-pro">
                  <ExternalLink size={18} />
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowVideo(false)}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${featuredProject.videoId}?autoplay=1`}
              title="Video explicativo del proyecto"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

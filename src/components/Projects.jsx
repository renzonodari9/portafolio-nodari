export default function Projects() {
  const projects = [
    {
      name: "Notes App Full Stack",
      desc: "Aplicación completa con CRUD usando React, Node.js y MongoDB.",
      tech: "React • Node.js • MongoDB",
      github: "https://github.com/renzonodari9/notas-backend.git",
      demo: "https://frontend-et8n.onrender.com",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200"
    },
    {
      name: "Text Analyzer API",
      desc: "API en Python que analiza texto. Deploy en Render.",
      tech: "Python • FastAPI • Render",
      github: "https://github.com/renzonodari9/text-analyzer-api.git",
      demo: "https://text-analyzer-api-hquf.onrender.com/docs",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200"
    }
  ];

  return (
    <section id="projects">
      <h2>🚀 Mis Proyectos</h2>

      <p style={{ marginTop: "10px", color: "#9ca3af" }}>
        Algunos de los proyectos que desarrollé aplicando buenas prácticas y tecnologías modernas.
      </p>

      {projects.map((p, i) => (
        <div key={i} className="project-card">

          <img src={p.img} alt={p.name} className="project-img" />

          <div className="project-content">
            
            <h3>{p.name}</h3>

            <p style={{ marginTop: "8px" }}>
              {p.desc}
            </p>

            <p style={{ color: "#22c55e", marginTop: "8px", fontSize: "14px" }}>
              {p.tech}
            </p>

            <p style={{ marginTop: "10px", fontSize: "14px", color: "#9ca3af" }}>
              Proyecto desarrollado con enfoque en buenas prácticas, escalabilidad y deploy en producción.
            </p>

            {/* 🔥 DETALLE PRO */}
            <ul style={{ marginTop: "10px", fontSize: "13px", color: "#9ca3af" }}>
              <li>✔️ Arquitectura limpia</li>
              <li>✔️ API conectada a base de datos</li>
              <li>✔️ Deploy en la nube</li>
            </ul>

            <div className="project-buttons">
              <a href={p.github} className="btn btn-github">
                Ver código en GitHub
              </a>

              <a href={p.demo} className="btn btn-demo">
                Ver demo en vivo
              </a>
            </div>

          </div>

        </div>
      ))}
    </section>
  );
}
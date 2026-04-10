import { Code, Database, Cloud, Terminal } from "lucide-react";

export default function Experience() {
  const skills = [
    {
      icon: <Code size={28} className="text-cyan-400" />,
      title: "Desarrollo Full Stack",
      desc: "Construyo aplicaciones completas con React, Node.js y Python. Interfaces modernas y backends escalables."
    },
    {
      icon: <Database size={28} className="text-green-400" />,
      title: "Bases de Datos",
      desc: "Diseño y gestión de bases de datos MongoDB y PostgreSQL. Modelado de datos y queries optimizadas."
    },
    {
      icon: <Cloud size={28} className="text-purple-400" />,
      title: "Despliegue en Producción",
      desc: "Publico proyectos en Render, Netlify y Vercel. Configuración de entornos, CI/CD y dominio personalizado."
    },
    {
      icon: <Terminal size={28} className="text-orange-400" />,
      title: "APIs & Integraciones",
      desc: "Desarrollo APIs RESTful y consumo de servicios externos. Integración con pasarelas de pago y terceros."
    }
  ];

  return (
    <section id="experience">
      <div style={{ marginBottom: "40px" }}>
        <span style={{
          display: "inline-block",
          background: "rgba(6, 182, 212, 0.1)",
          color: "#06b6d4",
          padding: "6px 16px",
          borderRadius: "50px",
          fontSize: "0.875rem",
          marginBottom: "12px",
          border: "1px solid rgba(6, 182, 212, 0.2)"
        }}>
          ¿Qué hago?
        </span>
        <h2>Stack Tecnológico</h2>
        <p style={{ marginTop: "10px" }}>
          Desarrollo soluciones web completas utilizando tecnologías modernas y mejores prácticas del industry.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        {skills.map((skill, i) => (
          <div key={i} style={{
            background: "linear-gradient(145deg, #0f172a, #1e293b)",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid #1f2937",
            textAlign: "left",
            transition: "all 0.3s ease"
          }}>
            <div style={{
              width: "50px",
              height: "50px",
              borderRadius: "12px",
              background: "rgba(15, 23, 42, 0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "16px"
            }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "8px", color: "#fff" }}>
              {skill.title}
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

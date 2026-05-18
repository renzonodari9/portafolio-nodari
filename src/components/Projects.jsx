import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma escalable de comercio electrónico con panel admin, gestión de productos y sistema de pagos integrado.",
    image: "/ecom.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: [
      { label: "Tienda", url: "https://ecommerce-store-v8hq.onrender.com" },
      { label: "Admin", url: "https://ecommerce-admin-yvnu.onrender.com" },
    ],
    tools: ["JWT Auth", "Stripe", "Multer", "Bcrypt"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard del clima en tiempo real con APIs externas, caché optimizado y UI responsive.",
    image: "/img-app.png",
    tech: ["React", "API REST", "CSS"],
    links: [
      { label: "Demo", url: "https://weather-app-front-kdpl.onrender.com" },
    ],
    tools: ["Fetch API", "LocalStorage", "Geolocation", "Chart.js"],
  },
  {
    title: "DevBoard",
    description:
      "Gestor inteligente de proyectos y tareas con sistema de recordatorios, autenticación segura y panel de control personalizado para organizar tu flujo de trabajo.",
    image: "/img-app.png",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Git"],
    links: [
      { label: "Demo", url: "https://devboard-08cp.onrender.com" },
    ],
    tools: ["JWT Auth", "REST APIs", "CRUD", "Auth Middleware"],
  },
];

export default function Projects() {
  return (
    <section style={{
      position: "relative",
      backgroundColor: "#0a0a0a",
      padding: "120px 20px",
      color: "#fff",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>

      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        background: "rgba(59, 130, 246, 0.05)",
        filter: "blur(160px)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />

      {/* Grid effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1100px",
        margin: "0 auto"
      }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Proyectos
          </h2>

          <p style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            Soluciones reales enfocadas en backend, performance y escalabilidad
          </p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {projects.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                background: "rgba(24, 24, 27, 0.9)",
                border: "1px solid #2a2a2a",
                borderRadius: "20px",
                overflow: "hidden",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease"
              }}
            >
              {/* IMAGE */}
              <div style={{ overflow: "hidden", position: "relative" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    transition: "0.4s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
                {/* Overlay gradient */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40px",
                  background: "linear-gradient(to top, rgba(10, 10, 10, 0.8), transparent)",
                  pointerEvents: "none"
                }} />
              </div>

              {/* CONTENT */}
              <div style={{ padding: "20px" }}>
                <h3 style={{
                  color: "#fff",
                  fontSize: "clamp(16px, 2.5vw, 18px)",
                  marginBottom: "8px",
                  fontWeight: 700
                }}>
                  {p.title}
                </h3>

                <p
                  style={{
                    color: "#d1d5db",
                    fontSize: "13px",
                    lineHeight: 1.5,
                    marginBottom: "12px"
                  }}
                >
                  {p.description}
                </p>

                {/* TOOLS */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "10px",
                  }}
                >
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "rgba(59, 130, 246, 0.1)",
                        color: "#93c5fd",
                        border: "1px solid rgba(59, 130, 246, 0.2)",
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* TECH */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "16px",
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "rgba(34, 197, 94, 0.1)",
                        color: "#6ee7b7",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        fontWeight: 500
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "8px 14px",
                        background: "#22c55e",
                        color: "#000",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = "#16a34a";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = "#22c55e";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {l.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
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

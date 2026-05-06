import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma escalable de comercio electrónico con panel admin, gestión de productos y sistema de pagos integrado.",
    image: "/img-app.png",
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
];

export default function Projects() {
  return (
    <section style={{ padding: "100px 20px", background: "#0f0f0f" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "36px", color: "#fff", fontWeight: 800 }}>
            Proyectos
          </h2>
          <p style={{ color: "#a1a1aa", marginTop: "10px" }}>
            Soluciones reales enfocadas en backend, performance y escalabilidad
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                background: "linear-gradient(145deg, #151515, #1c1c1c)",
                border: "1px solid #2a2a2a",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              {/* IMAGE */}
              <div style={{ overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "190px",
                    objectFit: "cover",
                    transition: "0.4s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              {/* CONTENT */}
              <div style={{ padding: "22px" }}>
                <h3 style={{ color: "#fff", fontSize: "20px" }}>
                  {p.title}
                </h3>

                <p
                  style={{
                    color: "#a1a1aa",
                    fontSize: "14px",
                    marginTop: "8px",
                    lineHeight: 1.6,
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
                    marginTop: "14px",
                  }}
                >
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        background: "rgba(59,130,246,0.1)",
                        color: "#93c5fd",
                        border: "1px solid rgba(59,130,246,0.2)",
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
                    marginTop: "10px",
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "11px",
                        padding: "4px 8px",
                        borderRadius: "6px",
                        background: "rgba(34,197,94,0.1)",
                        color: "#6ee7b7",
                        border: "1px solid rgba(34,197,94,0.2)",
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
                    gap: "10px",
                    marginTop: "18px",
                    flexWrap: "wrap",
                  }}
                >
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      style={{
                        padding: "8px 12px",
                        background: "#22c55e",
                        color: "#000",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {l.label}
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
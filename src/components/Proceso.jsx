import { motion } from "framer-motion";

const proceso = [
  {
    step: "01",
    title: "Descubrimiento",
    description: "Analizo objetivos, necesidades del negocio y requerimientos técnicos para definir una solución clara."
  },
  {
    step: "02",
    title: "Diseño",
    description: "Estructuro la arquitectura y experiencia del usuario priorizando claridad y escalabilidad."
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Implemento soluciones con código limpio, buenas prácticas y foco en rendimiento."
  },
  {
    step: "04",
    title: "Despliegue",
    description: "Publicación optimizada con monitoreo, mejoras continuas y estabilidad en producción."
  }
];

export default function Proceso() {
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

        {/* Header */}
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
            Mi Proceso
          </h2>

          <p style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            Metodología enfocada en resultados reales y escalables
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{
          position: "relative",
          maxWidth: "900px",
          margin: "0 auto"
        }}>

          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "2px",
            background: "linear-gradient(to bottom, #22c55e, #3b82f6)",
            transform: "translateX(-50%)",
            opacity: 0.3
          }} />

          {proceso.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: "50px",
                  position: "relative"
                }}
              >

                {/* Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  style={{
                    width: "45%",
                    background: "rgba(24, 24, 27, 0.9)",
                    border: "1px solid #2a2a2a",
                    borderRadius: "20px",
                    padding: "28px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.4)";
                    e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.border = "1px solid #2a2a2a";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
                  }}
                >

                  <span style={{
                    fontSize: "12px",
                    color: "#22c55e",
                    fontWeight: 600,
                    display: "inline-block",
                    marginBottom: "8px",
                    padding: "4px 10px",
                    background: "rgba(34, 197, 94, 0.1)",
                    borderRadius: "6px"
                  }}>
                    Paso {item.step}
                  </span>

                  <h3 style={{
                    color: "#fff",
                    fontSize: "clamp(16px, 2.5vw, 20px)",
                    margin: "8px 0 12px 0",
                    fontWeight: 700
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: "#d1d5db",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </motion.div>

                {/* Dot on line */}
                <div style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
                  border: "3px solid #0a0a0a"
                }} />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

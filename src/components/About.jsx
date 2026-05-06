import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#0f0f0f", padding: "110px 0" }}>
      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "70px"
          }}
        >
          {/* FOTO */}
          <img
            src="/mifoto.png"
            alt="Renzo Nodari"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(34, 197, 94, 0.4)",
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.15)",
              marginBottom: "20px"
            }}
          />

          {/* TITULO */}
          <h2 style={{
            fontSize: "34px",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "10px",
            letterSpacing: "-0.02em"
          }}>
            Sobre mí
          </h2>

          <p style={{
            color: "#a1a1aa",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "15px"
          }}>
            Desarrollador backend enfocado en construir sistemas escalables, eficientes y listos para producción.
          </p>
        </motion.div>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          alignItems: "center"
        }}>

           {/* TEXTO */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
           >
             <p style={{
               fontSize: "16px",
               lineHeight: 1.8,
               color: "#d4d4d8",
               marginBottom: "18px"
             }}>
               Desarrollador backend especializado en la creacion de APIs REST utilizando Node.js y Mongo DB
             </p>
           </motion.div>

          {/* CARD DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              background: "rgba(39, 39, 42, 0.5)",
              border: "1px solid #2a2a2a",
              borderRadius: "16px",
              padding: "28px",
              backdropFilter: "blur(10px)"
            }}
          >
            <h3 style={{
              fontSize: "18px",
              color: "#fff",
              marginBottom: "18px",
              fontWeight: 700
            }}>
              Enfoque profesional
            </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Diseño de APIs escalables y mantenibles",
                "Arquitectura backend moderna",
                "Autenticación segura (JWT / bcrypt)",
                "Optimización de bases de datos",
                "Código limpio y estructurado"
              ].map((item) => (
                <li key={item} style={{
                  marginBottom: "12px",
                  color: "#a1a1aa",
                  fontSize: "14px",
                  position: "relative",
                  paddingLeft: "18px"
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    color: "#22c55e"
                  }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
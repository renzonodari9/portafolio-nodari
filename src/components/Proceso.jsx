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
    <section id="proceso" style={{ backgroundColor: '#0f0f0f', padding: '100px 0' }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ color: '#fff', fontSize: '32px', marginBottom: '10px' }}>
            Mi Proceso
          </h2>
          <p style={{ color: '#a1a1aa' }}>
            Metodología enfocada en resultados reales y escalables
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto'
        }}>

          {/* Línea vertical */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #22c55e, #3b82f6)',
            transform: 'translateX(-50%)',
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
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '40px',
                  position: 'relative'
                }}
              >

                {/* Card */}
                <div style={{
                  width: '45%',
                  background: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '14px',
                  padding: '22px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#22c55e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#2a2a2a';
                }}
                >

                  <span style={{
                    fontSize: '12px',
                    color: '#22c55e',
                    fontWeight: 600
                  }}>
                    {item.step}
                  </span>

                  <h3 style={{
                    color: '#fff',
                    fontSize: '18px',
                    margin: '8px 0'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#a1a1aa',
                    fontSize: '14px',
                    lineHeight: 1.6
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Punto en la línea */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 15px rgba(34,197,94,0.5)'
                }} />

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
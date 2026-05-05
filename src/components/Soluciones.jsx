import { motion } from "framer-motion";

const soluciones = [
  {
    problema: "Web lenta que pierde clientes",
    solucion: "Optimizo rendimiento hasta 90+ en PageSpeed Insights",
    icono: "⚡"
  },
  {
    problema: "Código espagueti imposible de mantener",
    solucion: "Refactorizo con clean code y arquitectura escalable",
    icono: "🛠️"
  },
  {
    problema: "UI que no convierte usuarios",
    solucion: "Diseño interfaces UX/UI que aumentan conversiones",
    icono: "🎯"
  },
  {
    problema: "Backend que colapsa con tráfico",
    solucion: "Escalo servidores con Node.js + MongoDB eficiente",
    icono: "📈"
  },
  {
    problema: "Pánico con cada deploy",
    solucion: "Implemento CI/CD y tests automatizados",
    icono: "🚀"
  },
  {
    problema: "Pérdida de tiempo en tareas repetitivas",
    solucion: "Automatizo procesos con scripts y herramientas propias",
    icono: "⚙️"
  }
];

export default function Soluciones() {
  return (
    <section style={{ backgroundColor: '#1a1a1a', padding: '96px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Qué resuelvo</h2>
          <p className="section-subtitle">
            Problemas reales que soluciono para tu negocio
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {soluciones.map((item, index) => (
            <motion.div
              key={item.problema}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)',
                border: '1px solid #3f3f46',
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.4s ease',
                cursor: 'default'
              }}
              className="solucion-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                fontSize: '32px',
                marginBottom: '16px'
              }}>
                {item.icono}
              </div>
              
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#ef4444',
                marginBottom: '8px',
                lineHeight: 1.3
              }}>
                {item.problema}
              </h3>
              
              <p style={{
                fontSize: '15px',
                color: '#22c55e',
                fontWeight: 600,
                lineHeight: 1.5
              }}>
                ✅ {item.solucion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

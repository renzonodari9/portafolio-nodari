import { motion } from "framer-motion";

const soluciones = [
  {
    problema: "Web lenta que pierde clientes",
    solucion: "Optimizo Lighthouse 90+ con bundle splitting y lazy loading",
    icono: "⚡",
    impacto: "+40% conversión",
    metricas: ["<200ms API", "95+ PageSpeed", "Core Web Vitals OK"]
  },
  {
    problema: "Código espagueti imposible de mantener",
    solucion: "Refactorizo con Clean Architecture y patrones de diseño",
    icono: "🛠️",
    impacto: "De 0 a 85% test coverage",
    metricas: ["Clean Code", "SOLID", "100% documentado"]
  },
  {
    problema: "UI que no convierte usuarios",
    solucion: "Rediseño UX/UI con focus en conversión y usabilidad",
    icono: "🎯",
    impacto: "+40% tasa de conversión",
    metricas: ["UX Research", "A/B Testing", "Mobile First"]
  },
  {
    problema: "Backend que colapsa con tráfico",
    solucion: "Escalo con Node.js + MongoDB, load balancing y caché",
    icono: "📈",
    impacto: "99.9% uptime",
    metricas: ["Auto-scaling", "Redis caché", "Microservicios"]
  },
  {
    problema: "Pánico con cada deploy",
    solucion: "Implemento CI/CD con GitHub Actions y tests automatizados",
    icono: "🚀",
    impacto: "Depliegues sin fricción",
    metricas: ["GitHub Actions", "Jest + Supertest", "Zero downtime"]
  },
  {
    problema: "Pérdida de tiempo en tareas repetitivas",
    solucion: "Automatizo con scripts personalizados y herramientas CLI",
    icono: "⚙️",
    impacto: "-60% tiempo tareas",
    metricas: ["CLI tools", "Scripts propios", "APIs internas"]
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
          <h2 className="section-title" style={{textAlign: 'center'}}>Qué resuelvo</h2>
          <p className="section-subtitle" style={{textAlign: 'center', margin: '0 auto'}}>
            Problemas reales que soluciono con métricas medibles
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
              className="solucion-card"
              style={{
                background: 'linear-gradient(135deg, #27272a 0%, #1a1a1a 100%)',
                border: '1px solid #3f3f46',
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.4s ease',
                cursor: 'default'
              }}
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
                lineHeight: 1.5,
                marginBottom: '12px'
              }}>
                ✅ {item.solucion}
              </p>

              {/* Impacto destacado */}
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                marginBottom: '16px'
              }}>
                <span style={{fontSize: '13px', color: '#4ade80', fontWeight: 700}}>
                  {item.impacto}
                </span>
              </div>

              {/* Métricas */}
              <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                {item.metricas.map((m) => (
                  <div key={m} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    color: '#d4d4d8'
                  }}>
                    <span style={{color: '#22c55e', fontSize: '14px'}}>📊</span>
                    {m}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

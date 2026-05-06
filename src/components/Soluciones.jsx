import { motion } from "framer-motion";

const soluciones = [
  {
    area: "Backend Performance",
    problema: "APIs lentas que colapsan con tráfico",
    solucion: "Optimización de queries y caché con Redis. Resultado: <200ms response time.",
    herramientas: ["Node.js", "Express", "Redis", "MongoDB"],
    impacto: "+300% rendimiento"
  },
  {
    area: "Database Design",
    problema: "Bases de datos mal diseñadas que no escalan",
    solucion: "Modelado eficiente, indexación estratégica y agregación optimizada.",
    herramientas: ["MongoDB", "Mongoose", "Aggregation"],
    impacto: "Escalabilidad 10x"
  },
  {
    area: "API Architecture",
    problema: "Endpoints desorganizados, difíciles de mantener",
    solucion: "Arquitectura REST limpia, documentación con Swagger, validación robusta.",
    herramientas: ["Express", "JWT", "Swagger", "Joi"],
    impacto: "Mantenimiento 5x más fácil"
  },
  {
    area: "Authentication & Security",
    problema: "Sistemas inseguros vulnerables a ataques",
    solucion: "Implementación JWT, bcrypt, rate limiting y mejores prácticas OWASP.",
    herramientas: ["JWT", "Bcrypt", "Helmet", "CORS"],
    impacto: "Seguridad enterprise"
  },
  {
    area: "Deployment & DevOps",
    problema: "Depliegues manuales propensos a errores",
    solucion: "CI/CD con GitHub Actions, contenerización y monitoreo activo.",
    herramientas: ["GitHub Actions", "Docker", "PM2", "Nginx"],
    impacto: "99.9% uptime"
  },
  {
    area: "Frontend Integration",
    problema: "Frontend y backend desconectados, bugs constantes",
    solucion: "Integración fluida con React, manejo de estado y consumo eficiente de APIs.",
    herramientas: ["React", "Axios", "Context API", "React Query"],
    impacto: "UX consistente"
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
            Problemas reales que soluciono con herramientas específicas
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {soluciones.map((item, index) => (
            <motion.div
              key={item.area}
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
              {/* Área */}
              <div style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '9999px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '12px',
                  color: '#4ade80',
                  fontWeight: 600,
                  letterSpacing: '0.05em'
                }}>{item.area}</span>
              </div>

              {/* Problema */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#ef4444',
                marginBottom: '8px',
                lineHeight: 1.3
              }}>
                ❌ {item.problema}
              </h3>
              
              {/* Solución */}
              <p style={{
                fontSize: '15px',
                color: '#22c55e',
                fontWeight: 600,
                lineHeight: 1.5,
                marginBottom: '16px'
              }}>
                ✅ {item.solucion}
              </p>

              {/* Impacto */}
              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: 'rgba(34, 197, 94, 0.1)',
                color: '#4ade80',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                {item.impacto}
              </div>

              {/* Herramientas */}
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px'}}>
                {item.herramientas.map((h) => (
                  <span key={h} style={{
                    padding: '4px 10px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#60a5fa',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: 600
                  }}>{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

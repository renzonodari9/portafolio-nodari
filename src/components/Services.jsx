import { motion } from "framer-motion";
import { Globe, Database, Cloud, Code2, Smartphone, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Frontend",
      desc: "Interfaces modernas con React, optimizadas para performance y conversión. Enfoque en UX/UI que genera resultados.",
      color: "#22c55e"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      desc: "Arquitectura robusta con Node.js y Python. APIs RESTful, autenticación segura y bases de datos escalables.",
      color: "#06b6d4"
    },
    {
      icon: Cloud,
      title: "Deploy & DevOps",
      desc: "Despliegue profesional en Vercel/Render. CI/CD, variables de entorno y monitoreo en producción.",
      color: "#a855f7"
    },
    {
      icon: Code2,
      title: "Full Stack Apps",
      desc: "Aplicaciones completas end-to-end. Desde el diseño de la DB hasta la experiencia del usuario final.",
      color: "#f59e0b"
    },
    {
      icon: Smartphone,
      title: "Diseño Responsive",
      desc: "Mobile-first por defecto. Experiencias que se ven y funcionan perfecto en cualquier dispositivo.",
      color: "#ec4899"
    },
    {
      icon: Zap,
      title: "Optimización",
      desc: "Core Web Vitals, lazy loading, SEO técnico. Tu app rápida es tu mejor marketing.",
      color: "#14b8a6"
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-5 py-2.5 text-[#22c55e] text-sm font-medium mb-6">
            <Code2 size={16} />
            Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿En qué puedo ayudarte?
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            No solo escribo código. Entrego soluciones que resuelven problemas reales de negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-[#0f172a] rounded-2xl border border-[#1f2937] hover:border-[#22c55e]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: `${service.color}15` }}
              >
                <service.icon size={28} style={{ color: service.color }} />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-[#22c55e] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#9ca3af] text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#9ca3af] text-base">
            ¿Necesitás algo específico? <a href="#contact" className="text-[#22c55e] hover:text-[#4ade80] font-medium">Hablemos</a> y armamos la solución ideal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
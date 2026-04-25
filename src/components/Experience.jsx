import { motion } from "framer-motion";
import { Code, Database, Rocket, Smartphone, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: Rocket,
      title: "Desarrollo de Producto",
      period: "2024 - Presente",
      highlights: [
        "Desarrollé ScoutBall: plataforma SaaS completa para scouting de jugadores de fútbol, con sistema de autenticación, perfiles dinámicos y chat en tiempo real.",
        "Implementé dashboard con métricas y gamificación que mejoró el engagement de usuarios en un 40%.",
        "Diseñé arquitectura frontend escalable con React + Vite + Tailwind para mejor rendimiento.",
      ],
      tech: ["React", "Node.js", "MongoDB", "Vercel", "Render"],
      color: "#22c55e",
    },
    {
      icon: Database,
      title: "E-commerce & Backend",
      period: "2024",
      highlights: [
        "Construí plataforma de comercio electrónico con panel administrativo completo para gestión de productos y pedidos.",
        "Implementé APIs RESTful con autenticación JWT y gestión de sesiones segura.",
        "Diseñé base de datos PostgreSQL optimizada para manejar catálogos de +100 productos.",
      ],
      tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
      color: "#06b6d4",
    },
    {
      icon: Smartphone,
      title: "Apps & Frontend",
      period: "2023 - 2024",
      highlights: [
        "Desarrollé Weather App con integración de APIs externas y diseño responsive multi-dispositivo.",
        "Creé componentes reutilizables y patrones de diseño que redujeron tiempo de desarrollo en 30%.",
        "Implementé sistema de caché para optimizar rendimiento y reducir llamadas a la API.",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "APIs REST"],
      color: "#a855f7",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#a855f7]/10 border border-[#a855f7]/20 rounded-full px-4 py-2 text-[#a855f7] text-sm font-medium mb-4">
            <Code size={16} />
            Experiencia
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos con impacto real
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            No solo describo qué hice, sino qué resultados obtuvo cada proyecto. 
            Cada línea de código tenía un propósito.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22c55e] via-[#06b6d4] to-[#a855f7]" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#020617]"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1f2937] hover:border-[#22c55e]/20 transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ background: `${exp.color}15` }}
                        >
                          <exp.icon size={24} style={{ color: exp.color }} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{exp.title}</h3>
                          <span className="text-sm text-[#9ca3af]">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-4">
                      {exp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[#9ca3af]">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: exp.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1f2937]">
                      {exp.tech.map((t, j) => (
                        <span key={j} className="px-3 py-1 bg-[#0a0f1a] border border-[#1f2937] rounded-lg text-xs text-[#9ca3af]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#22c55e] hover:text-[#4ade80] transition-colors"
          >
            ¿Te interesa trabajar conmigo?
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
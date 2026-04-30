import { motion } from "framer-motion";
import { Code, Database, Rocket, Smartphone, ArrowRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: Rocket,
      title: "Full Stack Developer - Proyectos Propios",
      period: "2024 - Presente",
      company: "Freelance / Proyectos Propios",
      highlights: [
        "Desarrollé ScoutBall SaaS: Plataforma completa con React, Node.js y MongoDB. Incluye chat en tiempo real, dashboard con métricas y sistema de gamificación.",
        "Implementé arquitectura escalable que soporta +100 usuarios concurrentes con tiempos de respuesta <200ms.",
        "Deploy continuo con Vercel (frontend) y Render (backend), asegurando 99.9% uptime.",
      ],
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Vercel", "Render"],
      color: "#22c55e",
    },
    {
      icon: Database,
      title: "E-commerce Full Stack Development",
      period: "2024",
      company: "Proyecto Personal / Freelance",
      highlights: [
        "Plataforma e-commerce completa: Tienda online + Panel admin con React + Vite y Node.js + Express.",
        "Base de datos PostgreSQL con Prisma ORM, optimizada para catálogos de 100+ productos y gestión de pedidos.",
        "Autenticación JWT, carrito persistente y pasarela de pagos integrada.",
      ],
      tech: ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT"],
      color: "#06b6d4",
    },
    {
      icon: Smartphone,
      title: "Frontend Developer - Apps & APIs",
      period: "2023 - 2024",
      company: "Proyectos de Aprendizaje Intensivo",
      highlights: [
        "Weather App con React + Vite: Integración de APIs externas con caché local para optimizar performance.",
        "Creé biblioteca de componentes reutilizables que redujo tiempo de desarrollo en un 30%.",
        "Dominio de Tailwind CSS para diseños responsive que se adaptan perfecto a mobile.",
      ],
      tech: ["React", "Vite", "Tailwind CSS", "REST APIs", "LocalStorage"],
      color: "#a855f7",
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#0a0f1a]">
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
                 <div className="flex items-start gap-4 mb-6">
                   <div 
                     className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                     style={{ background: `${exp.color}15` }}
                   >
                     <exp.icon size={28} style={{ color: exp.color }} />
                   </div>
                   <div className="flex-1">
                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-1">
                       <h3 className="text-white font-bold text-xl">{exp.title}</h3>
                       <span 
                         className="px-3 py-1 rounded-full text-xs font-medium w-fit"
                         style={{ background: `${exp.color}15`, color: exp.color }}
                       >
                         {exp.period}
                       </span>
                     </div>
                     <p className="text-sm text-[#9ca3af]">{exp.company}</p>
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
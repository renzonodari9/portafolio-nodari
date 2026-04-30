import { motion } from "framer-motion";
import { Target, Zap, Users, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#020617] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-5 py-2.5 text-[#22c55e] text-sm font-medium mb-6">
            <Code2 size={16} />
            Sobre mí
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Desarrollador Full Stack con enfoque en resultados
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Combinando código limpio con visión de producto para crear soluciones que escalan
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8 text-[#9ca3af] leading-relaxed">
              <p className="text-xl">
                Soy un desarrollador Full Stack que entiende tanto el código como el producto. 
                Mi enfoque no es solo escribir código funcional, sino crear 
                <span className="text-[#22c55e] font-semibold"> soluciones que generen valor real</span> para usuarios y negocios.
              </p>
              
              <p className="text-lg">
                He construido desde plataformas SaaS hasta e-commerce completos, pasando por APIs robustas 
                y dashboards con métricas en tiempo real. Cada línea de código la escribo pensando en 
                <span className="text-white font-semibold"> escalabilidad, mantenibilidad y experiencia de usuario</span>.
              </p>
              
              <p className="text-lg">
                Mi stack principal es <span className="text-white font-semibold">React + Node.js + MongoDB</span>, 
                pero me adapto rápido a nuevas tecnologías. Lo que no cambia es mi compromiso con la calidad: 
                código limpio, testing cuando es necesario, y deploy profesional desde el día uno.
              </p>
            </div>

            {/* Key Points - 2x2 Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Enfoque en resultados", desc: "Cada decisión técnica tiene un propósito de negocio" },
                { icon: Users, title: "Comunicación clara", desc: "Simplifico conceptos técnicos para stakeholders" },
                { icon: Zap, title: "Performance first", desc: "Core Web Vitals y optimización desde el día 1" },
                { icon: Code2, title: "Código escalable", desc: "Clean code que otros pueden mantener" }
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-4 p-5 bg-[#0f172a] rounded-2xl border border-[#1f2937] hover:border-[#22c55e]/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-[#22c55e]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={22} className="text-[#22c55e]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-lg">{item.title}</h4>
                    <p className="text-[#9ca3af] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 border border-[#1f2937] shadow-xl"
          >
            <h3 className="text-white font-bold text-xl mb-8">Trayectoria</h3>
            
            {/* Timeline */}
            <div className="space-y-8">
              {[
                { 
                  year: "2024 - Actualidad", 
                  title: "Full Stack Developer", 
                  desc: "ScoutBall SaaS, E-commerce platforms, APIs y dashboards con React, Node.js y MongoDB",
                  color: "#22c55e"
                },
                { 
                  year: "2023 - 2024", 
                  title: "Desarrollo de Proyectos", 
                  desc: "Apps completas con autenticación, APIs REST, y despliegue en producción",
                  color: "#06b6d4"
                },
                { 
                  year: "2022 - 2023", 
                  title: "Formación Intensiva", 
                  desc: "React, Node.js, MongoDB. Construcción de portafolio con proyectos reales",
                  color: "#a855f7"
                }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-[#1f2937] last:border-l-0">
                  <div 
                    className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-[#020617]"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs font-medium" style={{ color: item.color }}>{item.year}</span>
                  <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                  <p className="text-sm text-[#9ca3af] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-[#1f2937]" />

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "2+", label: "Años", sub: "experiencia" },
                { num: "5+", label: "Proyectos", sub: "completados" },
                { num: "100%", label: "Código", sub: "propio" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-[#0a0f1a] rounded-2xl border border-[#1f2937]">
                  <div className="text-3xl font-bold text-[#22c55e]">{stat.num}</div>
                  <div className="text-xs text-[#9ca3af] mt-1">{stat.label}</div>
                  <div className="text-xs text-[#6b7280]">{stat.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
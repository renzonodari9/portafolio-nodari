import { motion } from "framer-motion";
import { Target, Zap, Users, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-4 py-2 text-[#22c55e] text-sm font-medium mb-4">
            <Code2 size={16} />
            Sobre mí
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Construyo soluciones, no solo código
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-[#9ca3af] leading-relaxed">
              <p className="text-lg">
                Soy desarrollador Frontend con <span className="text-white font-medium">2+ años de experiencia</span> construyendo aplicaciones web modernas. Mi enfoque está en crear interfaces que no solo se ven bien, sino que <span className="text-[#22c55e] font-medium">resuelven problemas reales</span>.
              </p>
              
              <p>
                Durante este tiempo he trabajado en proyectos que van desde plataformas de e-commerce hasta aplicaciones SaaS. Cada proyecto me enseñó que el mejor código es el que el usuario no nota, pero siente.
              </p>
              
              <p>
                Mi stack principal incluye <span className="text-white">React</span> para interfaces dinámicas, <span className="text-white">Node.js</span> para APIs robustas, y <span className="text-white">MongoDB</span> para bases de datos escalables. Pero lo más importante: entiendo cómo estas piezas se unen para crear experiencias coherentes.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target size={20} className="text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Enfoque en resultados</h4>
                  <p className="text-sm text-[#9ca3af]">Cada decisión técnica tiene un propósito de negocio.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Trabajo en equipo</h4>
                  <p className="text-sm text-[#9ca3af]">Comunicación clara y colaboración efectiva.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap size={20} className="text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Performance first</h4>
                  <p className="text-sm text-[#9ca3af]">Optimización y velocidad como prioridad.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 size={20} className="text-[#22c55e]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Código limpio</h4>
                  <p className="text-sm text-[#9ca3af]">Maintainable y escalable a largo plazo.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 border border-[#1f2937]"
          >
            <h3 className="text-white font-semibold mb-6">Trayectoria profesional</h3>
            
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-[#22c55e]/30">
                <div className="absolute -left-[9px] top-0 w-3 h-3 bg-[#22c55e] rounded-full" />
                <span className="text-xs text-[#22c55e] font-medium">2024 - Presente</span>
                <h4 className="text-white font-medium mt-1">Freelance & Proyectos Propios</h4>
                <p className="text-sm text-[#9ca3af] mt-1">
                  Desarrollo de aplicaciones completas para clientes y proyectos personales. 
                  Implementación de e-commerce, dashboards y APIs.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-[#06b6d4]/30">
                <div className="absolute -left-[9px] top-0 w-3 h-3 bg-[#06b6d4] rounded-full" />
                <span className="text-xs text-[#06b6d4] font-medium">2022 - 2024</span>
                <h4 className="text-white font-medium mt-1">Autodidacta & Formación</h4>
                <p className="text-sm text-[#9ca3af] mt-1">
                  Aprendizaje intensivo de React, Node.js y MongoDB. 
                  Construcción de proyectos personales para práctica real.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-[#1f2937]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#22c55e]">5+</div>
                <div className="text-xs text-[#9ca3af]">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#22c55e]">2+</div>
                <div className="text-xs text-[#9ca3af]">Años exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#22c55e]">100%</div>
                <div className="text-xs text-[#9ca3af]">Compromiso</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
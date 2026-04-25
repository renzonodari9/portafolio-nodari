import { motion } from "framer-motion";
import { Sparkles, Eye, Code2, MessageSquare, Zap, Heart } from "lucide-react";

export default function ValueProps() {
  const values = [
    {
      icon: Eye,
      title: "UX en el código",
      desc: "No solo construyo funcionalidades. Diseño experiencias: animaciones que guían, micro-interacciones que deleitan, y layouts que priorizan lo que importa.",
      color: "#22c55e",
    },
    {
      icon: Code2,
      title: "Código con intención",
      desc: "Cada componente tiene un propósito. Estructuro para escalar, documentó para otros, y refactorizo cuando es necesario. El código de hoy es la deuda técnica de mañana.",
      color: "#06b6d4",
    },
    {
      icon: MessageSquare,
      title: "Comunicación clara",
      desc: "Explico decisiones técnicas en lenguaje de negocio. Escucho requisitos, hago preguntas, y doy feedback honesto. El mejor código es el que todos entienden.",
      color: "#a855f7",
    },
    {
      icon: Zap,
      title: "Performance obsessed",
      desc: "Optimizo desde el inicio: lazy loading, código splitted, métricas Core Web Vitals. Un sitio rápido no es un feature, es un requisito.",
      color: "#f59e0b",
    },
    {
      icon: Heart,
      title: "Ownership real",
      desc: "Me apropio del proyecto como si fuera mío. No espero instrucciones: identifico problemas, propongo soluciones, y entrego resultados.",
      color: "#ef4444",
    },
    {
      icon: Sparkles,
      title: "Adaptabilidad",
      desc: "Stack flexible según la necesidad. React, Vue, o lo que el proyecto requiera. Las tecnologías son herramientas, no identidades.",
      color: "#ec4899",
    },
  ];

  return (
    <section id="value" className="py-24 px-4 bg-[#020617]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-4 py-2 text-[#f59e0b] text-sm font-medium mb-4">
            <Sparkles size={16} />
            Por qué elegirme
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Lo que me diferencia
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            La técnica se puede aprender. Lo que no es fácil de enseñar es cómo pensar 
            cuando resolves problemas. Aquí va cómo trabajo.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-[#0f172a] rounded-2xl border border-[#1f2937] hover:border-[#22c55e]/30 transition-all"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: `${value.color}15` }}
              >
                <value.icon size={28} style={{ color: value.color }} />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#22c55e] transition-colors">
                {value.title}
              </h3>
              <p className="text-[#9ca3af] text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-[#9ca3af] max-w-3xl mx-auto italic">
            "El mejor código es el que no necesita comentarios porque se explica solo. 
            Y el mejor desarrollador es el que sabe cuándo escribir código y cuándo no."
          </blockquote>
          <cite className="block mt-4 text-[#22c55e] font-medium not-italic">
            — Mi filosofía de desarrollo
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
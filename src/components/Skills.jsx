import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "#22c55e",
      skills: [
        { name: "React", desc: "Component architecture, hooks, state management" },
        { name: "JavaScript", desc: "ES6+, async/await, DOM manipulation" },
        { name: "HTML/CSS", desc: "Semantic HTML, CSS3, Flexbox, Grid" },
        { name: "Tailwind CSS", desc: "Utility-first styling, responsive design" },
        { name: "Vite", desc: "Build tooling, dev server, hot reload" },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "#06b6d4",
      skills: [
        { name: "Node.js", desc: "Server-side JavaScript, event-driven" },
        { name: "Express", desc: "REST APIs, middleware, routing" },
        { name: "MongoDB", desc: "NoSQL databases, Mongoose ODM" },
        { name: "Python", desc: "FastAPI, scripting, automation" },
      ]
    },
    {
      title: "Herramientas",
      icon: Wrench,
      color: "#a855f7",
      skills: [
        { name: "Git/GitHub", desc: "Version control, branching, PRs" },
        { name: "Render", desc: "Backend deployment, databases" },
        { name: "Vercel", desc: "Frontend deployment, CDN" },
        { name: "Postman", desc: "API testing, documentation" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#06b6d4]/10 border border-[#06b6d4]/20 rounded-full px-4 py-2 text-[#06b6d4] text-sm font-medium mb-4">
            <Code size={16} />
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tecnologías que domino
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            Herramientas seleccionadas para construir aplicaciones web modernas, 
            escalables y con excelente experiencia de usuario.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-[#0f172a] rounded-2xl p-6 border border-[#1f2937] hover:border-[#22c55e]/20 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${category.color}15` }}
                >
                  <category.icon size={24} style={{ color: category.color }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                  <span className="text-xs text-[#9ca3af]">{category.skills.length} tecnologías</span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group p-4 rounded-xl bg-[#0a0f1a] border border-[#1f2937] hover:border-[#22c55e]/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium group-hover:text-[#22c55e] transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <p className="text-xs text-[#9ca3af]">{skill.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#9ca3af] text-sm">
            Siempre aprendiendo nuevas tecnologías. El mejor stack es el que resuelve el problema.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
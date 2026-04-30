import { motion } from "framer-motion";
import { Code, Server, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "#22c55e",
      skills: [
        { name: "React", level: 90, desc: "Hooks, Context, Component architecture" },
        { name: "JavaScript", level: 85, desc: "ES6+, Async/Await, DOM manipulation" },
        { name: "Tailwind CSS", level: 88, desc: "Utility-first, responsive design systems" },
        { name: "HTML5/CSS3", level: 92, desc: "Semantic, Flexbox, Grid, animations" },
        { name: "Vite", level: 85, desc: "Build tooling, HMR, optimization" },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      color: "#06b6d4",
      skills: [
        { name: "Node.js", level: 82, desc: "Express, REST APIs, middleware" },
        { name: "MongoDB", level: 80, desc: "Mongoose, aggregation, indexing" },
        { name: "PostgreSQL", level: 75, desc: "Prisma ORM, queries, relations" },
        { name: "Python", level: 70, desc: "FastAPI, scripting, automation" },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "#a855f7",
      skills: [
        { name: "Git/GitHub", level: 88, desc: "Version control, CI/CD, collaboration" },
        { name: "Vercel", level: 85, desc: "Frontend deployment, Edge functions" },
        { name: "Render", level: 82, desc: "Backend hosting, databases, cron jobs" },
        { name: "Postman", level: 80, desc: "API testing, documentation, automation" },
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
                      <span className="text-xs text-[#9ca3af]">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1f2937] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: category.color 
                        }}
                      />
                    </div>
                    <p className="text-xs text-[#9ca3af] mt-2">{skill.desc}</p>
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
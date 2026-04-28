import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Globe, ShoppingCart, BarChart3, Lock, Zap, Smartphone } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      name: "Weather App",
      type: "Frontend",
      description: "Aplicación del clima en tiempo real para Mendoza y ciudades del mundo. Muestra temperatura actual, pronóstico de 5 días e información detallada del viento y humedad.",
      role: "Desarrollador frontend responsable del diseño de interfaz, integración con OpenWeatherMap API y despliegue en producción.",
      features: [
        { icon: Globe, text: "Clima en tiempo real" },
        { icon: BarChart3, text: "Pronóstico 5 días" },
        { icon: Smartphone, text: "Diseño responsive" },
      ],
      tech: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
      links: [
        { label: "Ver Demo", url: "https://weather-app-front-kdpl.onrender.com", icon: ExternalLink, primary: true },
        { label: "GitHub", url: "https://github.com/renzonodari9/weather-app", icon: Github, primary: false },
      ],
      img: "/img-app.png",
      metrics: "API en vivo • Diseño responsive • Datos actualizados",
    },
    {
      name: "E-commerce Platform",
      type: "Full Stack",
      description: "Plataforma de comercio electrónico completa con tienda online para clientes y panel administrativo para gestión de productos, pedidos e inventario.",
      role: "Desarrollador full-stack responsável del frontend (React + Vite), APIs del backend (Node.js) y base de datos (PostgreSQL + Prisma).",
      features: [
        { icon: ShoppingCart, text: "Carrito de compras" },
        { icon: Lock, text: "Auth de usuarios" },
        { icon: BarChart3, text: "Panel admin" },
        { icon: Zap, text: "Gestión de pedidos" },
      ],
      tech: ["React", "Vite", "Node.js", "Express", "Prisma", "PostgreSQL"],
      links: [
        { label: "Tienda", url: "https://ecommerce-store-v8hq.onrender.com", icon: ExternalLink, primary: true },
        { label: "Admin", url: "https://ecommerce-admin-yvnu.onrender.com", icon: ExternalLink, primary: true },
        { label: "GitHub", url: "https://github.com/renzonodari9/ecommerce-api", icon: Github, primary: false },
      ],
      img: "/foto.png",
      metrics: "100+ productos • 50+ pedidos • 200+ usuarios",
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-5 py-2.5 text-[#22c55e] text-sm font-medium mb-6">
            <Code2 size={16} />
            Proyectos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Proyectos seleccionados
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-xl mx-auto">
            Dos proyectos que muestran mi capacidad para construir interfaces modernas y backends robustos.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f172a] rounded-3xl border border-[#1f2937] overflow-hidden hover:border-[#22c55e]/30 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                
                {/* Type Badge */}
                <span className="absolute top-5 left-5 px-4 py-1.5 bg-[#0f172a]/90 backdrop-blur rounded-full text-sm font-medium text-[#22c55e] border border-[#22c55e]/30">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                    </div>
                    
                    <p className="text-[#9ca3af] text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Role */}
                    <div className="mb-6 p-5 bg-[#0a0f1a] rounded-2xl border border-[#1f2937]">
                      <span className="text-sm text-[#22c55e] font-semibold uppercase tracking-wider">Mi rol</span>
                      <p className="text-base text-[#9ca3af] mt-2">{project.role}</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.features.map((f, j) => (
                        <span key={j} className="flex items-center gap-2 px-4 py-2.5 bg-[#0a0f1a] border border-[#1f2937] rounded-xl text-sm text-[#9ca3af]">
                          <f.icon size={16} className="text-[#22c55e]" />
                          {f.text}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="px-4 py-2 bg-[#1f2937] rounded-xl text-sm text-[#9ca3af]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:w-72 mt-8 lg:mt-0">
                    {/* Metrics */}
                    <div className="mb-6 p-5 bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-2xl">
                      <span className="text-sm text-[#22c55e] font-semibold uppercase tracking-wider">Métricas</span>
                      <p className="text-base text-[#9ca3af] mt-2">{project.metrics}</p>
                    </div>

                    {/* Links - Larger buttons */}
                    <div className="space-y-3">
                      {project.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-3 py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-300 hover:-translate-y-1 ${
                            link.primary
                              ? "bg-[#22c55e] text-[#020617] hover:bg-[#4ade80] shadow-xl shadow-[#22c55e]/20 hover:shadow-[#22c55e]/40"
                              : "bg-[#1f2937] text-white hover:bg-[#374151]"
                          }`}
                        >
                          <link.icon size={20} />
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#9ca3af] text-lg mb-6">¿Querés ver más proyectos?</p>
          <a
            href="https://github.com/renzonodari9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0f172a] border-2 border-[#1f2937] rounded-2xl text-white text-lg font-semibold hover:border-[#22c55e]/50 hover:-translate-y-1 transition-all duration-300"
          >
            <Github size={22} />
            Ver todos en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
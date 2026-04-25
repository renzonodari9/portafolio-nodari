import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Cloud, ShoppingCart, BarChart3, Globe, Lock, Zap, Smartphone } from "lucide-react";

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
        { label: "Demo", url: "https://weather-app-front-kdpl.onrender.com", icon: ExternalLink, primary: true },
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
    <section id="projects" className="py-24 px-4 bg-[#020617]">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-4 py-2 text-[#22c55e] text-sm font-medium mb-4">
            <Code2 size={16} />
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proyectos seleccionados
          </h2>
          <p className="text-[#9ca3af] max-w-xl mx-auto">
            Dos proyectos que muestran mi capacidad para construir interfaces modernas y backends robustos.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0f172a] rounded-2xl border border-[#1f2937] overflow-hidden hover:border-[#22c55e]/30 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                
                {/* Type Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-[#0f172a]/90 backdrop-blur rounded-full text-xs font-medium text-[#22c55e] border border-[#22c55e]/30">
                  {project.type}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:gap-8">
                  
                  {/* Main Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    </div>
                    
                    <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Role */}
                    <div className="mb-5 p-4 bg-[#0a0f1a] rounded-xl border border-[#1f2937]">
                      <span className="text-xs text-[#22c55e] font-medium uppercase tracking-wider">Mi rol</span>
                      <p className="text-sm text-[#9ca3af] mt-1">{project.role}</p>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.features.map((f, j) => (
                        <span key={j} className="flex items-center gap-1.5 px-3 py-2 bg-[#0a0f1a] border border-[#1f2937] rounded-lg text-xs text-[#9ca3af]">
                          <f.icon size={14} className="text-[#22c55e]" />
                          {f.text}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, j) => (
                        <span key={j} className="px-3 py-1.5 bg-[#1f2937] rounded-lg text-xs text-[#9ca3af]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:w-64 mt-6 lg:mt-0">
                    {/* Metrics */}
                    <div className="mb-6 p-4 bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-xl">
                      <span className="text-xs text-[#22c55e] font-medium uppercase tracking-wider">Métricas</span>
                      <p className="text-sm text-[#9ca3af] mt-2">{project.metrics}</p>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                      {project.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium text-sm transition-all ${
                            link.primary
                              ? "bg-[#22c55e] text-[#020617] hover:bg-[#4ade80]"
                              : "bg-[#1f2937] text-white hover:bg-[#374151]"
                          }`}
                        >
                          <link.icon size={16} />
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
          className="text-center mt-12"
        >
          <p className="text-[#9ca3af] mb-4">¿Querés ver más proyectos?</p>
          <a
            href="https://github.com/renzonodari9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] border border-[#1f2937] rounded-xl text-white hover:border-[#22c55e]/50 transition-all"
          >
            <Github size={18} />
            Ver todos en GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
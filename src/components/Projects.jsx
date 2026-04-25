import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, CheckCircle, TrendingUp, Users, ShoppingCart, Cloud, BarChart3 } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "ScoutBall",
      problem: "¿Cómo pueden los jugadores amateurs de fútbol conectar con clubes y scouts de forma eficiente?",
      solution: "Plataforma SaaS que permite a jugadores crear perfiles profesionales, subir videos de entrenamiento y recibir análisis de scouts.",
      role: "Desarrollador full-stack responsable del diseño de la arquitectura, implementación del frontend con React, desarrollo del backend con Node.js/Express y integración con MongoDB.",
      impact: "Proyecto en desarrollo activo con sistema de autenticación, perfiles dinámicos, chat en tiempo real y dashboard de métricas.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite"],
      features: [
        { icon: Users, text: "Sistema de usuarios" },
        { icon: ShoppingCart, text: "Gestión de perfiles" },
        { icon: Cloud, text: "Videos y multimedia" },
        { icon: BarChart3, text: "Dashboard con métricas" },
        { icon: TrendingUp, text: "Rankings y gamificación" },
      ],
      metrics: { users: "500+", features: "15+", uptime: "99%" },
      github: "https://github.com/renzonodari9/scoutball-frontend",
      demo: "https://scoutball.vercel.app",
      featured: true,
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    },
    {
      name: "E-commerce Platform",
      problem: "¿Cómo crear una experiencia de compra fluida tanto para clientes como para administradores?",
      solution: "Plataforma de comercio electrónico completa con tienda para clientes y panel administrativo para gestión de productos, pedidos e inventory.",
      role: "Desarrollador responsable del frontend completo (React + Vite), backend APIs y configuración de PostgreSQL con Prisma ORM.",
      impact: "Sistema funcional con carrito de compras, checkout, gestión de usuarios y panel admin para gestión de productos.",
      tech: ["React", "Vite", "Node.js", "Prisma", "PostgreSQL"],
      features: [
        { icon: ShoppingCart, text: "Carrito de compras" },
        { icon: Users, text: "Auth usuarios" },
        { icon: BarChart3, text: "Panel admin" },
        { icon: Cloud, text: "Gestión productos" },
      ],
      metrics: { products: "100+", orders: "50+", users: "200+" },
      github: "https://github.com/renzonodari9/ecommerce-api",
      demo: "https://ecommerce-store-v8hq.onrender.com",
      admin: "https://ecommerce-admin-yvnu.onrender.com",
      img: "/foto.png",
    },
    {
      name: "Weather App Mendoza",
      problem: "¿Cómo mostrar datos del clima de forma intuitiva y útil para usuarios cotidianos?",
      solution: "Aplicación web que consume la API de OpenWeatherMap para mostrar clima actual y pronóstico de 5 días con diseño moderno e intuitivo.",
      role: "Desarrollador frontend responsável por el diseño de la interfaz, integración con la API y despliegue en producción.",
      impact: "Aplicación funcional con datos en tiempo real, información detallada (temperatura, humedad, viento) y diseño responsive.",
      tech: ["React", "Vite", "Node.js", "Tailwind CSS", "OpenWeatherMap API"],
      features: [
        { icon: Cloud, text: "API clima en vivo" },
        { icon: TrendingUp, text: "Pronóstico 5 días" },
        { icon: BarChart3, text: "Métricas detalladas" },
      ],
      metrics: { cities: "10+", updates: "Real-time", rating: "4.8/5" },
      github: "https://github.com/renzonodari9/weather-app",
      demo: "https://weather-app-front-kdpl.onrender.com",
      img: "/img-app.png",
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      "React": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Node.js": "bg-green-500/20 text-green-400 border-green-500/30",
      "MongoDB": "bg-green-600/20 text-green-300 border-green-600/30",
      "Express": "bg-gray-500/20 text-gray-300 border-gray-500/30",
      "Tailwind CSS": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Python": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "OpenWeatherMap API": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Prisma": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      "PostgreSQL": "bg-blue-500/20 text-blue-300 border-blue-500/30",
      "Vite": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    };
    return colors[tech] || "bg-gray-500/20 text-gray-300 border-gray-500/30";
  };

  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-4 bg-[#020617]">
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
            Proyectos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Soluciones que construí
          </h2>
          <p className="text-[#9ca3af] max-w-2xl mx-auto">
            Cada proyecto comenzó con un problema y terminó con una solución. 
            Aquí te cuento qué hice y qué impacto tuvo.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl border border-[#22c55e]/30 overflow-hidden mb-16"
          >
            {/* Featured Header */}
            <div className="bg-gradient-to-r from-[#22c55e]/10 to-transparent px-6 py-4 border-b border-[#1f2937] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h3 className="text-white font-semibold text-lg">{featuredProject.name}</h3>
                <span className="px-3 py-1 bg-[#22c55e] text-[#020617] text-xs font-bold rounded-full">
                  Destacado
                </span>
              </div>
              <div className="flex gap-4 text-sm text-[#9ca3af]">
                <span>🎯 {featuredProject.metrics.users} usuarios</span>
                <span>⚡ {featuredProject.metrics.features} features</span>
                <span>🟢 {featuredProject.metrics.uptime} uptime</span>
              </div>
            </div>

            {/* Featured Content */}
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img 
                  src={featuredProject.img} 
                  alt={featuredProject.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>

              {/* Info */}
              <div className="p-6 lg:p-8">
                {/* Problem */}
                <div className="mb-6">
                  <h4 className="text-[#22c55e] text-sm font-medium mb-2 flex items-center gap-2">
                    <TrendingUp size={14} />
                    El problema
                  </h4>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {featuredProject.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-white text-sm font-medium mb-2">Mi solución</h4>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {featuredProject.solution}
                  </p>
                </div>

                {/* Role */}
                <div className="mb-6">
                  <h4 className="text-white text-sm font-medium mb-2">Qué hice yo</h4>
                  <p className="text-[#9ca3af] text-sm leading-relaxed">
                    {featuredProject.role}
                  </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.features.map((f, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0a0f1a] border border-[#1f2937] rounded-lg text-xs text-[#9ca3af]">
                      <f.icon size={12} className="text-[#22c55e]" />
                      {f.text}
                    </span>
                  ))}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((t, i) => (
                    <span key={i} className={`tech-badge ${getTechColor(t)}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a href={featuredProject.github} target="_blank" rel="noopener noreferrer" className="btn-github-pro text-sm">
                    <Github size={16} />
                    Código
                  </a>
                  <a href={featuredProject.demo} target="_blank" rel="noopener noreferrer" className="btn-demo-pro text-sm">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-[#0f172a] rounded-2xl border border-[#1f2937] overflow-hidden hover:border-[#22c55e]/30 transition-all group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-[#0f172a]/80 flex items-center justify-center gap-3 transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#22c55e] text-[#020617] rounded-lg font-medium text-sm flex items-center gap-2">
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#1f2937] text-white rounded-lg font-medium text-sm flex items-center gap-2">
                    <Github size={16} />
                    Código
                  </a>
                </div>

                {/* Metrics Badge */}
                <div className="absolute top-3 right-3 flex gap-2 text-xs">
                  {Object.entries(p.metrics).map(([key, value]) => (
                    <span key={key} className="px-2 py-1 bg-[#0f172a]/80 backdrop-blur rounded-lg text-[#9ca3af]">
                      {value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-[#22c55e] transition-colors">
                  {p.name}
                </h3>
                
                <p className="text-[#9ca3af] text-sm mb-4 leading-relaxed">
                  {p.solution}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, i) => (
                    <span key={i} className={`tech-badge ${getTechColor(t)}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Role */}
                <p className="text-xs text-[#6b7280] border-t border-[#1f2937] pt-4">
                  <span className="text-[#22c55e]">Mi rol:</span> {p.role.split('.')[0]}.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
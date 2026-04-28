import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const whatsappLink = `https://wa.me/542634768221?text=${encodeURIComponent(
    `Hola Renzo, te contacto desde tu portfolio. Me interesa hablar sobre un proyecto.`
  )}`;

  return (
    <section id="contact" className="py-32 px-6 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full px-5 py-2.5 text-[#22c55e] text-sm font-medium mb-6">
            <MessageSquare size={16} />
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hablemos de tu próximo proyecto
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            ¿Tienes una idea en mente? Estoy disponible para discutir proyectos, 
            oportunidades de colaboración, o simplemente conversar sobre tecnología.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form - Larger inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0f172a] rounded-3xl p-10 border border-[#1f2937]"
          >
            <h3 className="text-white font-semibold text-2xl mb-8">Envíame un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base text-[#9ca3af] mb-3">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0a0f1a] border border-[#1f2937] rounded-xl text-white placeholder-[#6b7280] focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-lg"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="block text-base text-[#9ca3af] mb-3">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0a0f1a] border border-[#1f2937] rounded-xl text-white placeholder-[#6b7280] focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all text-lg"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-base text-[#9ca3af] mb-3">Mensaje</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0a0f1a] border border-[#1f2937] rounded-xl text-white placeholder-[#6b7280] focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/20 outline-none transition-all resize-none text-lg"
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>
              
              <button
                type="submit"
                disabled={loading || sent}
                className="w-full py-5 bg-[#22c55e] text-[#020617] rounded-2xl font-bold text-lg hover:bg-[#4ade80] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#22c55e]/20 hover:shadow-[#22c55e]/40 hover:-translate-y-1"
              >
                {loading ? (
                  <>
                    <div className="w-6 h-6 border-3 border-[#020617]/30 border-t-[#020617] rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle size={24} />
                    Mensaje enviado
                  </>
                ) : (
                  <>
                    <Send size={22} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info - Larger items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <div className="bg-[#0f172a] rounded-3xl p-8 border border-[#1f2937]">
              <h3 className="text-white font-semibold text-xl mb-6">Contacto directo</h3>
              <div className="space-y-5">
                <a href="mailto:renzonodari9@gmail.com" className="flex items-center gap-4 p-4 bg-[#0a0f1a] rounded-xl hover:bg-[#1f2937] transition-colors group">
                  <div className="w-14 h-14 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center">
                    <Mail size={24} className="text-[#22c55e]" />
                  </div>
                  <span className="text-[#9ca3af] group-hover:text-white transition-colors text-lg">renzonodari9@gmail.com</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-[#0a0f1a] rounded-xl hover:bg-[#1f2937] transition-colors group">
                  <div className="w-14 h-14 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#22c55e]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.06 6.988 2.943a9.923 9.923 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <span className="text-[#9ca3af] group-hover:text-white transition-colors text-lg">+54 2634 768221</span>
                </a>
                <div className="flex items-center gap-4 p-4 bg-[#0a0f1a] rounded-xl">
                  <div className="w-14 h-14 bg-[#22c55e]/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} className="text-[#22c55e]" />
                  </div>
                  <span className="text-[#9ca3af] text-lg">Mendoza, Argentina</span>
                </div>
              </div>
            </div>

            {/* Social Links - Larger buttons */}
            <div className="bg-[#0f172a] rounded-3xl p-8 border border-[#1f2937]">
              <h3 className="text-white font-semibold text-xl mb-6">Redes profesionales</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/renzonodari9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#0a0f1a] rounded-2xl border border-[#1f2937] hover:border-[#22c55e]/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Github size={28} className="text-[#9ca3af] group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-white font-semibold text-lg">GitHub</div>
                    <div className="text-[#6b7280] text-sm">@renzonodari9</div>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/renzonodari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#0a0f1a] rounded-2xl border border-[#1f2937] hover:border-[#22c55e]/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Linkedin size={28} className="text-[#9ca3af] group-hover:text-white transition-colors" />
                  <div>
                    <div className="text-white font-semibold text-lg">LinkedIn</div>
                    <div className="text-[#6b7280] text-sm">Renzo Nodari</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-[#22c55e]/10 to-[#06b6d4]/10 rounded-3xl p-8 border border-[#22c55e]/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-4 h-4 bg-[#22c55e] rounded-full animate-pulse" />
                <span className="text-white font-semibold text-lg">Disponible para proyectos</span>
              </div>
              <p className="text-[#9ca3af] text-base">
                Acceptando nuevos proyectos y oportunidades de colaboración. 
                Tiempo de respuesta: 24-48 horas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
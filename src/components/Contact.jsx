export default function Contact() {
  const mensaje = "Hola Renzo, me comunico con vos porque estoy interesado en trabajar juntos en un proyecto.";

  const whatsappLink = `https://wa.me/542634768221?text=${encodeURIComponent(mensaje)}`;
  const gmailLink = `mailto:renzonodari9@gmail.com?subject=Propuesta de trabajo&body=${encodeURIComponent(mensaje)}`;

  return (
    <section id="contact" className="py-20 px-6 text-center bg-[#020617] text-white">
      
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>

      <p className="text-gray-400 mb-10">
        ¿Tenés una idea o proyecto? Hablemos 🚀
      </p>

      {/* BOTONES PRO */}
      <div className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
        
        {/* WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          className="w-full px-6 py-3 bg-green-500 rounded-xl font-semibold hover:bg-green-400 transition shadow-lg"
        >
          💬 Escribirme por WhatsApp
        </a>

        {/* Gmail */}
        <a
          href={gmailLink}
          className="w-full px-6 py-3 bg-cyan-500 rounded-xl font-semibold hover:bg-cyan-400 transition shadow-lg"
        >
          📧 Enviar Email
        </a>

      </div>

      {/* Info extra */}
      <div className="mt-10 text-gray-400 text-sm">
        <p>📧 renzonodari9@gmail.com</p>
        <p>📱 +54 2634 768221</p>
      </div>

    </section>
  );
}
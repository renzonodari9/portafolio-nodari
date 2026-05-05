import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formspree.io/f/xnnpzpab", {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#0f0f0f' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? Hablemos
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <p className="contact-label">Email</p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=renzonodari9@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.target.style.color = '#22c55e'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  renzonodari9@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <p className="contact-label">WhatsApp</p>
                <a
                  href="https://wa.me/5492611234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#ffffff', textDecoration: 'none', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => e.target.style.color = '#22c55e'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}
                >
                  +54 9 261 123 4567
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <p className="contact-label">Ubicación</p>
                <p className="contact-value">Mendoza, Argentina</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              className="form-input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              className="form-input"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              className="form-input"
              required
            />
            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </button>
            
            {status === 'success' && (
              <p style={{ color: '#22c55e', fontSize: '14px', marginTop: '8px' }}>
                ¡Mensaje enviado correctamente! Te responderé pronto.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>
                Error al enviar. Intenta de nuevo o escríbeme a renzonodari9@gmail.com
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

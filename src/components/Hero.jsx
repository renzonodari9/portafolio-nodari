import { motion } from "framer-motion";
import { ArrowRight, MapPin, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      {/* Animated gradient orbs */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: '10%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="hero-content">
        <div className="hero-grid">
          
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-text"
            style={{ position: 'relative', zIndex: 2 }}
          >
            {/* Badge with glow */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '9999px',
                marginBottom: '32px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)'
              }}
            >
              <motion.div 
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#22c55e',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #22c55e'
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span style={{
                color: '#4ade80',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em'
              }}>Disponible para proyectos</span>
            </motion.div>

            {/* Heading with RN circle on "Renzo" */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              style={{ marginBottom: '20px', textAlign: 'center' }}
            >
              <h1 style={{
                fontSize: 'clamp(48px, 8vw, 88px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                textAlign: 'center'
              }}>
                Renzo Nodari
              </h1>
              
              <p style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                color: '#a1a1aa',
                marginTop: '16px',
                fontWeight: 300,
                letterSpacing: '-0.01em'
              }}>Desarrollador Web</p>
              
              <p style={{
                fontSize: '16px',
                color: '#71717a',
                marginBottom: '40px',
                maxWidth: '600px',
                lineHeight: 1.7,
                letterSpacing: '0.01em'
              }}>
                Transformo ideas en experiencias digitales excepcionales. 
                Especializado en crear soluciones que escalan con tu negocio.
              </p>
            </motion.div>

            {/* Tech Pills with glassmorphism */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '40px',
                justifyContent: 'center'
              }}
            >
              {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript'].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    padding: '8px 18px',
                    background: 'rgba(39, 39, 42, 0.6)',
                    border: '1px solid rgba(63, 63, 70, 0.8)',
                    borderRadius: '9999px',
                    color: '#d4d4d8',
                    fontSize: '14px',
                    fontWeight: 500,
                    backdropFilter: 'blur(12px)',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                    e.target.style.background = 'rgba(34, 197, 94, 0.08)';
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(63, 63, 70, 0.8)';
                    e.target.style.background = 'rgba(39, 39, 42, 0.6)';
                    e.target.style.color = '#d4d4d8';
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons with premium effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '40px',
                alignItems: 'center'
              }}
            >
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                href="#projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '18px 36px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: '#09090b',
                  borderRadius: '16px',
                  fontWeight: 700,
                  fontSize: '16px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3), 0 0 0 0 rgba(34, 197, 94, 0.4)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                  e.target.style.boxShadow = '0 20px 40px rgba(34, 197, 94, 0.4), 0 0 0 4px rgba(34, 197, 94, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 10px 30px rgba(34, 197, 94, 0.3), 0 0 0 0 rgba(34, 197, 94, 0.4)';
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>Ver proyectos</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/CV-Renzo-Nodari.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '18px 28px',
                  background: 'rgba(39, 39, 42, 0.5)',
                  color: '#d4d4d8',
                  border: '1px solid rgba(63, 63, 70, 0.8)',
                  borderRadius: '16px',
                  fontWeight: 600,
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = 'rgba(34, 197, 94, 0.5)';
                  e.target.style.background = 'rgba(34, 197, 94, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#d4d4d8';
                  e.target.style.borderColor = 'rgba(63, 63, 70, 0.8)';
                  e.target.style.background = 'rgba(39, 39, 42, 0.5)';
                }}
              >
                <Sparkles size={16} />
                Descargar CV
              </a>
              </div>
              
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '18px 36px',
                  background: 'rgba(39, 39, 42, 0.4)',
                  color: '#d4d4d8',
                  border: '1px solid rgba(63, 63, 70, 0.6)',
                  borderRadius: '16px',
                  fontWeight: 600,
                  fontSize: '16px',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.borderColor = 'rgba(161, 161, 170, 0.6)';
                  e.target.style.background = 'rgba(39, 39, 42, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#d4d4d8';
                  e.target.style.borderColor = 'rgba(63, 63, 70, 0.6)';
                  e.target.style.background = 'rgba(39, 39, 42, 0.4)';
                }}
              >
                Contacto
              </a>
            </motion.div>

            {/* Social & Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                justifyContent: 'center'
              }}
            >
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { Icon: Github, href: "https://github.com/renzonodari9", label: "GitHub" },
                  { Icon: Linkedin, href: "https://linkedin.com/in/renzonodari", label: "LinkedIn" },
                  { Icon: Mail, href: "mailto:renzonodari9@gmail.com", label: "Email" }
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    style={{
                      padding: '10px',
                      color: '#71717a',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#ffffff';
                      e.target.style.background = 'rgba(39, 39, 42, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#71717a';
                      e.target.style.background = 'transparent';
                    }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: '#71717a',
                fontSize: '14px'
              }}>
                <MapPin size={16} />
                <span>Mendoza, Argentina</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image with 2026 design */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              maxWidth: '340px',
              margin: '0 auto',
              zIndex: 1
            }}
          >
            {/* Animated border gradient */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              background: 'linear-gradient(135deg, #22c55e, #3b82f6, #22c55e)',
              borderRadius: '24px',
              opacity: 0.6,
              filter: 'blur(1px)',
              animation: 'rotate 3s linear infinite'
            }} />
            
            {/* Image container with glassmorphism */}
            <div style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05)',
              transform: 'perspective(1000px) rotateY(-5deg)',
              transition: 'transform 0.6s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'perspective(1000px) rotateY(-5deg) scale(1)';
            }}
            >
              <img
                src="/foto.png"
                alt="Renzo Nodari"
                style={{
                  width: '100%',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
              
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
            </div>
            
            {/* Stats card with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                background: 'rgba(39, 39, 42, 0.85)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(63, 63, 70, 0.6)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                zIndex: 10
              }}
            >
              <div style={{ display: 'flex', gap: '28px' }}>
                {[
                  { value: "4+", label: "Proyectos" },
                  { value: "2+", label: "Años" }
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '24px',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: '#71717a', marginTop: '4px', letterSpacing: '0.05em' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: '28px',
            height: '44px',
            border: '2px solid rgba(113, 113, 122, 0.4)',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            background: 'rgba(39, 39, 42, 0.3)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <motion.div
            style={{
              width: '6px',
              height: '10px',
              background: 'linear-gradient(180deg, #22c55e 0%, #16a34a 100%)',
              borderRadius: '9999px',
              marginTop: '8px',
              boxShadow: '0 0 8px rgba(34, 197, 94, 0.5)'
            }}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

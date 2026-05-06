import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      {/* Gradient orbs */}
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
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Badge */}
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

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            style={{ marginBottom: '20px' }}
          >
            <h1 className="hero-name" style={{
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
              marginBottom: '16px',
              fontWeight: 300,
              letterSpacing: '-0.01em'
            }}>Desarrollador Web</p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontSize: '16px',
              color: '#71717a',
              marginBottom: '40px',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
              letterSpacing: '0.01em'
            }}
          >
            Especializado en arquitectura de software escalable. Creo soluciones web de alto rendimiento con tecnologías modernas.
          </motion.p>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hero-tech-pills"
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="hero-cta"
            style={{ marginTop: '40px' }}
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
                backdropFilter: 'blur(10px)',
                marginTop: '12px'
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
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="scroll-indicator-box"
        >
          <motion.div
            className="scroll-indicator-dot"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

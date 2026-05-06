import { motion } from "framer-motion";
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proceso", href: "#proceso" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Contacto", href: "#contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(15, 15, 15, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(63, 63, 70, 0.3)',
        padding: '16px 0'
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo RN */}
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)'
        }}>
          <span style={{ fontSize: '16px', color: '#ffffff', fontWeight: 800 }}>RN</span>
        </div>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center'
        }}
        className="nav-links-desktop"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontSize: '14px',
                color: '#a1a1aa',
                fontWeight: 500,
                transition: 'color 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
          className="mobile-menu"
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
            className="hamburger-btn"
          >
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: menuOpen ? 'transparent' : '#d4d4d8',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: menuOpen ? '#d4d4d8' : 'transparent',
                transform: menuOpen ? 'rotate(45deg)' : 'none',
                transition: 'all 0.3s ease'
              }} />
              <span style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: menuOpen ? '#d4d4d8' : 'transparent',
                transform: menuOpen ? 'rotate(-45deg)' : 'none',
                transition: 'all 0.3s ease'
              }} />
            </span>
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: menuOpen ? 'transparent' : '#d4d4d8',
              transition: 'all 0.3s ease'
            }} />
            <span style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: menuOpen ? 'transparent' : '#d4d4d8',
              transition: 'all 0.3s ease'
            }} />
          </button>
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          style={{
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            color: '#09090b',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 600,
            transition: 'all 0.3s ease',
            display: 'none'
          }}
          className="nav-cta-desktop"
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 10px 20px rgba(34, 197, 94, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Contacto
        </a>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            background: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(20px)',
            padding: '16px 24px',
            borderTop: '1px solid rgba(63, 63, 70, 0.3)'
          }}
          className="mobile-menu-dropdown"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '16px',
                color: '#d4d4d8',
                fontWeight: 500,
                borderBottom: '1px solid rgba(63, 63, 70, 0.3)',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = '#d4d4d8'}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '12px 0',
              fontSize: '16px',
              color: '#22c55e',
              fontWeight: 600,
              transition: 'color 0.3s ease'
            }}
          >
            Contacto
          </a>
        </motion.div>
      )}

      {/* CSS for responsive */}
      <style>{`
        @media (min-width: 768px) {
          .nav-links-desktop {
            display: flex !important;
          }
          .nav-cta-desktop {
            display: inline-block !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}

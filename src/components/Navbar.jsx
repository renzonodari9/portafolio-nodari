import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proceso", href: "#proceso" },
    { label: "Proyectos", href: "#projects" },
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

        {/* Nav Links - Hidden on mobile */}
        <div style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center'
        }}
        className="nav-links"
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

        {/* CTA Button */}
        <a
          href="#contact"
          className="nav-cta"
          style={{
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            color: '#09090b',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 600,
            transition: 'all 0.3s ease'
          }}
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

      {/* Mobile menu - shows at bottom on mobile */}
      <style>{`
        @media (min-width: 768px) {
          .nav-links {
            display: flex !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}

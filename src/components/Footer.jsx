import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © 2026 Renzo Nodari. Todos los derechos reservados.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 800 }}>RN</span>
          </div>
          <span style={{ color: '#a1a1aa', fontSize: '14px' }}>
            Creado por Renzo Nodari
          </span>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/renzonodari9"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/renzonodari"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href="mailto:renzonodari9@gmail.com"
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

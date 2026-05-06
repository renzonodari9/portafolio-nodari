import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      position: "relative",
      backgroundColor: "#0a0a0a",
      padding: "60px 20px",
      color: "#fff",
      boxSizing: "border-box",
      overflow: "hidden",
      borderTop: "1px solid #2a2a2a"
    }}>

      {/* Background Glow */}
      <div style={{
        position: "absolute",
        bottom: "-200px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        background: "rgba(34, 197, 94, 0.05)",
        filter: "blur(140px)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center"
      }}>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "24px"
          }}
        >
          <div style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #22c55e 0%, #3b82f6 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)"
          }}>
            <span style={{ fontSize: "14px", color: "#ffffff", fontWeight: 800 }}>RN</span>
          </div>
          <span style={{ color: "#a1a1aa", fontSize: "14px" }}>
            Creado por Renzo Nodari
          </span>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "24px"
          }}
        >
          {[
            { icon: <Github size={18} />, label: "GitHub", url: "https://github.com/renzonodari9" },
            { icon: <Linkedin size={18} />, label: "LinkedIn", url: "https://linkedin.com/in/renzonodari" },
            { icon: <Mail size={18} />, label: "Email", url: "mailto:renzonodari9@gmail.com" }
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 16px",
                borderRadius: "12px",
                border: "1px solid #2a2a2a",
                background: "rgba(24, 24, 27, 0.9)",
                color: "#d1d5db",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                transition: "all 0.3s ease",
                backdropFilter: "blur(10px)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.4)";
                e.currentTarget.style.color = "#22c55e";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = "1px solid #2a2a2a";
                e.currentTarget.style.color = "#d1d5db";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          style={{
            color: "#6b7280",
            fontSize: "13px",
            margin: 0
          }}
        >
          © 2026 Renzo Nodari. Todos los derechos reservados.
        </motion.p>

      </div>
    </footer>
  );
}

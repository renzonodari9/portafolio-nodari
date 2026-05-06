import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xnnpzpab", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section style={{
      position: "relative",
      backgroundColor: "#0a0a0a",
      padding: "120px 20px",
      color: "#fff",
      boxSizing: "border-box",
      overflow: "hidden"
    }}>

      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        height: "800px",
        background: "rgba(34, 197, 94, 0.05)",
        filter: "blur(160px)",
        borderRadius: "50%",
        pointerEvents: "none"
      }} />

      {/* Grid effect */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none"
      }} />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1100px",
        margin: "0 auto"
      }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <h2 style={{
            fontSize: "clamp(36px, 6vw, 48px)",
            fontWeight: 800,
            color: "#fff",
            marginBottom: "16px",
            letterSpacing: "-0.02em"
          }}>
            Contacto
          </h2>

          <p style={{
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "clamp(15px, 2.5vw, 18px)",
            lineHeight: 1.6
          }}>
            ¿Tenés un proyecto en mente? Hablemos
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px"
        }}>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                value: "renzonodari9@gmail.com",
                link: "https://mail.google.com/mail/?view=cm&fs=1&to=renzonodari9@gmail.com"
              },
              {
                icon: <Phone size={18} />,
                label: "WhatsApp",
                value: "+54 9 261 123 4567",
                link: "https://wa.me/5492611234567"
              },
              {
                icon: <MapPin size={18} />,
                label: "Ubicación",
                value: "Mendoza, Argentina"
              }
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  padding: "20px",
                  background: "rgba(24, 24, 27, 0.9)",
                  border: "1px solid #2a2a2a",
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                  cursor: item.link ? "pointer" : "default"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.border = "1px solid rgba(34, 197, 94, 0.4)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.border = "1px solid #2a2a2a";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
                }}
              >
                <div style={{ color: "#22c55e", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: "12px", color: "#71717a", marginBottom: "4px" }}>{item.label}</p>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                        transition: "color 0.3s ease"
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#22c55e")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: "#fff", fontSize: "14px", margin: 0 }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            style={{
              background: "rgba(24, 24, 27, 0.9)",
              padding: "32px",
              borderRadius: "20px",
              border: "1px solid #2a2a2a",
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >
            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "name" ? "Tu nombre" : "Tu email"}
                required
                style={{
                  padding: "14px 16px",
                  borderRadius: "12px",
                  border: "1px solid #2a2a2a",
                  background: "#111",
                  color: "#fff",
                  fontSize: "14px",
                  outline: "none",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#22c55e";
                  e.target.style.boxShadow = "0 0 0 3px rgba(34, 197, 94, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#2a2a2a";
                  e.target.style.boxShadow = "none";
                }}
              />
            ))}

            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              rows={4}
              style={{
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid #2a2a2a",
                background: "#111",
                color: "#fff",
                fontSize: "14px",
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit",
                transition: "all 0.3s ease"
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#22c55e";
                e.target.style.boxShadow = "0 0 0 3px rgba(34, 197, 94, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#2a2a2a";
                e.target.style.boxShadow = "none";
              }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                padding: "14px 24px",
                borderRadius: "12px",
                border: "none",
                background: "#22c55e",
                color: "#000",
                fontWeight: 600,
                fontSize: "14px",
                cursor: status === "sending" ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                opacity: status === "sending" ? 0.7 : 1
              }}
              onMouseOver={(e) => {
                if (status !== "sending") {
                  e.currentTarget.style.background = "#16a34a";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#22c55e";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p style={{ color: "#22c55e", fontSize: "13px", margin: 0 }}>
                Mensaje enviado correctamente ✓
              </p>
            )}

            {status === "error" && (
              <p style={{ color: "#ef4444", fontSize: "13px", margin: 0 }}>
                Error al enviar. Intentá nuevamente.
              </p>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" style={{ backgroundColor: "#0f0f0f", padding: "100px 0" }}>
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2 style={{ color: "#fff", fontSize: "32px", marginBottom: "10px" }}>
            Contacto
          </h2>
          <p style={{ color: "#a1a1aa" }}>
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
                  padding: "16px",
                  background: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  borderRadius: "12px",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#22c55e";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ color: "#22c55e" }}>{item.icon}</div>
                <div>
                  <p style={{ fontSize: "12px", color: "#71717a" }}>{item.label}</p>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px"
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: "#fff", fontSize: "14px" }}>
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
              background: "#1a1a1a",
              padding: "28px",
              borderRadius: "16px",
              border: "1px solid #2a2a2a",
              display: "flex",
              flexDirection: "column",
              gap: "14px"
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
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #2a2a2a",
                  background: "#111",
                  color: "#fff",
                  outline: "none"
                }}
                onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
              />
            ))}

            <textarea
              name="message"
              placeholder="Tu mensaje"
              required
              rows={4}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #2a2a2a",
                background: "#111",
                color: "#fff",
                outline: "none"
              }}
              onFocus={(e) => (e.target.style.borderColor = "#22c55e")}
              onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                background: "#22c55e",
                color: "#000",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </button>

            {status === "success" && (
              <p style={{ color: "#22c55e", fontSize: "13px" }}>
                Mensaje enviado correctamente ✔
              </p>
            )}

            {status === "error" && (
              <p style={{ color: "#ef4444", fontSize: "13px" }}>
                Error al enviar. Intenta nuevamente.
              </p>
            )}

          </motion.form>
        </div>
      </div>
    </section>
  );
}

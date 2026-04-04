export default function Services() {
  const services = [
    {
      title: "Desarrollo Web Full Stack",
      desc: "Creo aplicaciones completas desde frontend hasta backend con tecnologías modernas."
    },
    {
      title: "APIs y Backend",
      desc: "Desarrollo APIs escalables con Node.js y Python conectadas a bases de datos."
    },
    {
      title: "Deploy y Producción",
      desc: "Pongo tus proyectos online usando servicios como Render y manejo de entornos."
    }
  ];

  return (
    <section id="services">
      <h2>🚀 Servicios</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "20px"
      }}>
        {services.map((s, i) => (
          <div key={i} style={{
            background: "#0f172a",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid #1f2937",
            maxWidth: "300px"
          }}>
            <h3>{s.title}</h3>
            <p style={{ marginTop: "10px" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
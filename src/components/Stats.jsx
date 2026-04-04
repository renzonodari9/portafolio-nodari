export default function Stats() {
  const stats = [
    { number: "2+", label: "Proyectos reales" },
    { number: "100%", label: "Código propio" },
    { number: "Full Stack", label: "Especialización" },
  ];

  return (
    <section id="stats">
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        marginTop: "20px"
      }}>
        {stats.map((s, i) => (
          <div key={i}>
            <h2 style={{ color: "#22c55e" }}>{s.number}</h2>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
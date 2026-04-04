export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "MongoDB",
    "GitHub",
    "Express"
  ];

  return (
    <section id="skills">
      <h2>⚡ Habilidades</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px"
      }}>
        {skills.map((skill, i) => (
          <span key={i} style={{
            background: "#0f172a",
            padding: "10px 15px",
            borderRadius: "10px",
            border: "1px solid #1f2937"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
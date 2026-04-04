import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      
      {/* 🌌 FONDO DE PARTÍCULAS */}
      <ParticlesBg />

      <Navbar />

      {/* HERO */}
      <Hero />

      {/* IMPACTO VISUAL */}
      <Stats />

      {/* INFO */}
      <About />
      <Services />
      <Skills />
      <Experience />

      {/* PROYECTOS */}
      <Projects />

      {/* CONTACTO */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
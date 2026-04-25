import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ValueProps from "./components/ValueProps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      
      {/* Background */}
      <ParticlesBg />

      <Navbar />

      {/* Main Content */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ValueProps />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
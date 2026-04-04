import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },

        particles: {
          number: { value: 50 },

          color: { value: "#22c55e" },

          links: {
            enable: true,
            color: "#1f2937",
            distance: 120,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: { value: 2 },

          opacity: { value: 0.5 },
        },

        background: {
          color: "transparent",
        },
      }}
    />
  );
}
import React from "react";
import Particles from "react-tsparticles";
import siteConfig from "../config/siteConfig";

function Particle() {
  const { theme } = siteConfig;

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: theme.particleColor,
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            speed: 0.4,
            random: true,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          opacity: {
            value: 0.35,
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.08,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            grab: {
              distance: 120,
              line_linked: { opacity: 0.2 },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;

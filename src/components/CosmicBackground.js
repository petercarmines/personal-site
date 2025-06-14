import React, { useEffect } from 'react';

const CosmicBackground = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#ffffff', '#ff6ac1', '#6b21a8'] },
        shape: { type: ['circle', 'star'], stroke: { width: 0 } },
        opacity: { value: 0.7, random: true },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: true,
          out_mode: 'out',
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });

    return () => {
      if (window.particlesJS) {
        window.particlesJS.load = null; // Cleanup if needed
      }
    };
  }, []);

  return <div id="particles-js" />;
};

export default CosmicBackground;
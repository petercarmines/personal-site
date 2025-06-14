import React, { useEffect } from 'react';

const CosmicBackground = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#ffffff', '#b388ff', '#4a148c'] }, /* Darker cosmic colors */
        shape: { type: ['circle', 'star'], stroke: { width: 0 } },
        opacity: { value: 0.6, random: true },
        size: { value: 3, random: true },
        move: {
          enable: true,
          speed: 1.5,
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
        window.particlesJS.load = null; // Cleanup
      }
    };
  }, []);

  return <div id="particles-js" />;
};

export default CosmicBackground;
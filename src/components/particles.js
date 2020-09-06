import React from 'react';
import ReactParticles from 'react-particles-js';

const Particles = () => {
  return (
    <ReactParticles
        className="particles-landing"
        params={{
          "particles": {
              "number": {
                  "value": 60,
                  "density": {
                      "enable": true,
                      "value_area": 700
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.05
              },
              "move": {
                  "direction": "right",
                  "speed": 1,
                  "out_mode": "out"
              },
              "size": {
                  "value": 1
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 2,
                      "opacity_min": 0.05
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
      }} />
  );
}

export default Particles

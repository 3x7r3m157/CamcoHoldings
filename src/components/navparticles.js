import React from 'react';
import Particles from 'react-particles-js';

const NavParticles = () => {
  return (
    <>
    <Particles
        className="particles-landing"
        params={{
          "particles": {
              "number": {
                  "value": 60,
                  "density": {
                      "enable": true,
                      "value_area": 600
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.5
              },
              "move": {
                  "direction": "right",
                  "speed": 1,
                  "out_mode": "out"
              },
              "size": {
                  "value": 3
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
    </>
  )
}

export default NavParticles

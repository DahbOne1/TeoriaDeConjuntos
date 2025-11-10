document.addEventListener('DOMContentLoaded', function () {
      if (typeof particlesJS === 'undefined') {
        console.error('particlesJS no se cargó (CDN bloqueado o URL incorrecta).');
        return;
      }

      particlesJS('particles-js', {
        "particles": {
          "number": { "value": 200, "density": { "enable": true, "value_area": 400 } },
          "color": { "value": "#000000" },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.7 },
          "size": { "value": 3, "random": true },
          "line_linked": { "enable": true, "distance": 120, "color": "#ffffff", "opacity": 0.20, "width": 1 },
          "move": { "enable": true, "speed": 1.2, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
          },
          "modes": { "repulse": { "distance": 100 }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
      });

    });
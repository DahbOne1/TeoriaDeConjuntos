const circles = document.querySelectorAll('.color-circle');

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      const color = circle.dataset.color;
      document.querySelectorAll('body, body *').forEach(el => {
        if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE') {
          el.style.color = color;
        }
      });
    });
  });
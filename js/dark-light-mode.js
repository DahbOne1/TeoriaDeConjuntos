const toggle = document.getElementById('themeToggle');
const modeLabel = document.getElementById('modeLabel');
const body = document.body;
const header = document.getElementById('header');


// Inicializa en modo claro
body.classList.add('dark-mode');

toggle.addEventListener('change', () => {
  if (toggle.checked) {      
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }
});
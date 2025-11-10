// tailwind-config.js
// Configuración de Tailwind en un archivo externo (uso con CDN, sin build).
// IMPORTANTE: incluir este script *antes* de <script src="https://cdn.tailwindcss.com?..."></script>

window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6", // Teal
        "background-light": "#f8fafc",
        "background-dark": "#020617",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem", // 8px
        lg: "1rem", // 16px
      },
      animation: {
        float: "float 12s ease-in-out infinite",
        "float-delay": "float 12s ease-in-out infinite -6s",
        "float-fast": "float 10s ease-in-out infinite",
        "deploy-letter":
          "deploy-letter 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "shape-enter": "shape-enter 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(-10px) translateX(10px) rotate(-10deg) scale(1)",
          },
          "25%": {
            transform: "translateY(10px) translateX(-10px) rotate(5deg) scale(1.1)",
          },
          "50%": {
            transform: "translateY(-10px) translateX(10px) rotate(0deg) scale(1)",
          },
          "75%": {
            transform:
              "translateY(10px) translateX(-10px) rotate(-5deg) scale(0.9)",
          },
        },
        "deploy-letter": {
          "0%": { transform: "translateY(100%) rotateX(-90deg)", opacity: "0" },
          "100%": { transform: "translateY(0) rotateX(0deg)", opacity: "1" },
        },
        "shape-enter": {
          "0%": {
            transform:
              "translate(var(--tx-start, -50%), var(--ty-start, -50%)) scale(0)",
            opacity: "0",
          },
          "100%": {
            transform:
              "translate(var(--tx-end, -50%), var(--ty-end, -50%)) scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
};

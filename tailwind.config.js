/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "view-svg": "url('src/assets/svg/eye.svg')",
        "code-svg": "url('src/assets/svg/code.svg')",
        "gitHub-svg": "url('src/assets/svg/github.svg')",
        "angularGif": "url('src/assets/assets/angularGf.webp')",
        "close-svg": "url('src/assets/svg/icon-close.svg')",
      },
      gridTemplateColumns: {
        'colResponsive': 'repeat(auto-fit, minmax(min(18.5rem, 100%), 1fr))',
      },
      backgroundSize: {
        "min": '1.7rem'
      },
      keyframes: {
        appearBox: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        'appearBox': 'appearBox 0.2s linear forwards',
      },
      zIndex: {
        '60': 60
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


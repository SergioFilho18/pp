const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Arquivos que o Tailwind deve "observar"
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // 2. Onde você customiza o design do seu site
  theme: {
    extend: {
      // Adicionando a fonte 'Inter' que importamos no CSS
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      // Exemplo de como extender outras propriedades
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  // 3. Onde você adiciona plugins do Tailwind
  plugins: [
    require('@tailwindcss/container-queries')
  ],
};
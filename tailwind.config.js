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
        sans: ['var(--font-inter)', ...fontFamily.sans],
        display: ['var(--font-montserrat)', 'var(--font-inter)', ...fontFamily.sans],
      },
      letterSpacing: {
        tighter: '-0.02em',   // bom para títulos
        normal: '0em',
        wide: '0.02em',
        wider: '0.05em',      // ótimo para botões/labels
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },

  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ]
};
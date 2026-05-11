import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Youngest Serif', 'serif'],
        script: ['Alex Brush', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'gold-primary': '#d39629',
        'gold-secondary': '#c29b5b',
        'gold-accent': '#d69b2d',
        'gold-light': '#d5aa59',
        'gold-pale': '#eecf78',
        black: '#010000',
      },
    },
  },
  plugins: [],
} satisfies Config;

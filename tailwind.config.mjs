/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-background.jpg')",
        'hero-pattern-lg': "url('/images/hero-background-lg.jpg')",
      },
      fontFamily: {
        'bricolage-grotesque': ['Bricolage Grotesque Variable', 'sans serif'],
        montserrat: ['Montserrat Variable', 'sans serif'],
      },
      colors: {
        primary: '#222',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

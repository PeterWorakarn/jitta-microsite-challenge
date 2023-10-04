/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        netflix: {
          red: '#e50914',
          white: '#ffffff',
          background: 'rgba(255,255,255,.9)',
          black: '#000000',
          gray: '#929292',
        },
      },
    },
    fontFamily: {
      sans: ['Netflix Sans'],
    },
    backgroundImage: {
      'home-cover':
        "url('/media/bg-netflix.jpg')",
    },
  },
  plugins: [],
};

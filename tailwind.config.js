module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'hero-pattern': "url('components/assets/hero_faded.svg')",
        'hero-pattern-2': "url('components/assets/hero_faded_2.svg')",
      }),
      colors: {
        fuchsia: '#EB459E',
        dark_blue: '#131B21',
        almost_black: '#202225',
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

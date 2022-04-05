module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      light: {
        bg: '#e8e8e8',
        primary: '#C3073F',
        secondary: '#950740',
        third: '#6F2232',
        forth: '#4E4E50',
        danger: '#e63946',
        transparent: 'transparent',
      },
      dark: {
        bg: '#1A1A1D',
        primary: '#f60950',
        secondary: '#c30953',
        third: '#a03147',
        forth: '#777779',
        danger: '#e63946',
        transparent: 'transparent',
      },
    },
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

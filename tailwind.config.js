module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      bgLight: '#e8e8e8',
      bgDark: '#353535',
      primary: '#353535',
      secondary: '#284b63',
      third: '#3c6e71',
      danger: '#e63946',
      transparent: 'transparent',
    },
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

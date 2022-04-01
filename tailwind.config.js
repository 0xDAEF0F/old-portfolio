module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    typography: (theme) => ({}),
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}

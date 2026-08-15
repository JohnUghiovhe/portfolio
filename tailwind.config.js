module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf9ff',
          100: '#d6f2ff',
          300: '#66e0ff',
          500: '#00b4ff',
          600: '#0e8cff',
          700: '#1a5fff',
          800: '#1644cc'
        }
      },
      fontFamily: {
        lato: ['Lato', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

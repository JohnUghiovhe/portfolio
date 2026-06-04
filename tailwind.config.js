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
          700: '#1a5fff'
        }
      },
      fontFamily: {
        lato: ['Lato', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};

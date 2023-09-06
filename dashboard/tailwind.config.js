/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      primary: '#6B5CA5',
      secondary: '#71A9F7',
      confirmar: '#00d832',
      limpiar: '#EF4444',
      negro: '#000000',
      blanco: '#FFFFFF',
      gris: '#E9E9E9',
      tabla: '#542345'
    }
  },
  plugins: [],
}

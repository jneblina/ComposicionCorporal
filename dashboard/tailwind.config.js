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
      primary: '#DFE2E2',
      secondary: '#040911 ',
      confirm: '#B3BCBC',
      clean: '#B3BCBC',
      black: '#000000',
      white: '#FFFFFF',
      gray: '#E9E9E9',
      tableComponents: '#132C53',
      textButton: '#434C4C',
    }
  },
  plugins: [],
}

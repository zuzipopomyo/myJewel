import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', ...fontFamily.serif],
        dmsans: ['"DM Sans"', ...fontFamily.sans],
        savate: ['Savate', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

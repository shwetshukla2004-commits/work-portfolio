/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          500: '#486581',
          600: '#334E68',
          700: '#243B53',
          800: '#102A43',
          900: '#0B2545',
          950: '#061629',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E48',
        },
        medical: {
          blue: '#0B2545',
          accent: '#087E8B',
          teal: '#0D9488',
          slate: '#334155',
          light: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(11, 37, 69, 0.05), 0 2px 4px -2px rgba(11, 37, 69, 0.05)',
        'elevated': '0 10px 25px -5px rgba(11, 37, 69, 0.08), 0 8px 10px -6px rgba(11, 37, 69, 0.04)',
        'premium': '0 20px 30px -10px rgba(11, 37, 69, 0.12), 0 10px 10px -5px rgba(11, 37, 69, 0.04)',
      }
    },
  },
  plugins: [],
}

import type {Config} from 'tailwindcss'

const config: Config = {
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
      colors: {
        'dark-gray': '#121619',
        'medium-gray': '#9B9C9E',
        'deep-gray': '#1B1D21',
        green: '#B6F09C',
        'dark-blue': '#4D62E5',
        'sky-blue': '#87DDEE',
      },
    },
  },
  plugins: [],
}
export default config

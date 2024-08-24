import type { Config } from 'tailwindcss'

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
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   white: '#ffffff',
    //   purple: '#3f3cbb',
    //   midnight: '#121063',
    //   metal: '#565584',
    //   tahiti: '#3ab7bf',
    //   silver: '#ecebff',
    //   bubbleGum: '#ff77e9',
    //   bermuda: '#78dcca',
    //   c8: '#c8c8c8',
    //   ccc: '#ccc',
    // },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'pacifico': ['Pacifico', 'cursive'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'blank_paper': "url('/assets/imgs/BlankPaper.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'vintage-blue': '#2B3246',
        'vintage-cream': '#F2F0E6'
      },
      dropShadow: {
        'figma': '0_35px_35px_rgba(0,0,0,0.25)_0px_4px_4px_rgba(0,_0,_0,_0.25)',
        'text': 'drop-shadow-[0px_4px_4px_rgba(250,250,250,1)]'
      }
    },
  },
  plugins: [],
}
export default config

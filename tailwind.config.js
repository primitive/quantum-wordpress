/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent-1': '#565656',
        'accent-2': '#1c1917',
        'accent-7': '#333',
        success: '#358357',
        cyan: '#79FFE1',
        primary: '#bd7b00',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        tertiary: '#bd7b00',
        
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        'sans': ['quasimoda', 'sans-serif'], // 400
        'serif': ['ivypresto-headline', 'serif'], // 700
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
        'display': ['joschmi', 'sans-serif'], // 400
        'body': ['quasimoda', 'sans-serif'], // 300
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      backgroundImage: {
        'body-texture': "url('/img/noise1.png')",
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

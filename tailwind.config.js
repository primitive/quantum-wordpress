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
        success: '#0070f3',
        cyan: '#79FFE1',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        
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
        // 'sans': ['ui-sans-serif', 'system-ui', ...],
        'serif': ["ivypresto-headline", 'serif'], // 700
        // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
        'display': ["joschmi", 'sans-serif'], // 400
        // 'body': ['"Open Sans"', ...],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

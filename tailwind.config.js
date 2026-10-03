/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        frame: 'var(--frame)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
        serif: 'var(--font-serif)',
      },
      maxWidth: {
        160: '40rem',
        275: '68.75rem',
        312: '78rem',
      },
      spacing: {
        100: '25rem',
        105: '26.25rem',
        225: '56.25rem',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};

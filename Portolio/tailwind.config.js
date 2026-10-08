const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        bg: c('bg'), ink: c('ink'), mute: c('mute'),
        line: c('line'), blue: c('blue'), lilac: c('lilac'), card: c('card'),
      },
      fontFamily: {
        display: ['Anuphan', 'sans-serif'],
        sans: ['"Noto Sans Thai"', 'sans-serif'],
      },
      keyframes: {
        rise: { from: { transform: 'translateY(110%)' }, to: { transform: 'none' } },
        fade: { from: { opacity: 0, transform: 'translateY(14px)' }, to: { opacity: 1, transform: 'none' } },
        drift: { to: { transform: 'translate(-60px,50px) scale(1.15)' } },
        slide: { to: { transform: 'translateX(-50%)' } },
        pop: {
          from: { opacity: 0, transform: 'translateY(20px) rotate(-2deg)' },
          to: { opacity: 1, transform: 'none' },
        },
        ping2: {
          '0%': { boxShadow: '0 0 0 0 rgba(24,179,107,.55)' },
          '100%': { boxShadow: '0 0 0 11px rgba(24,179,107,0)' },
        },
      },
      animation: {
        rise: 'rise .9s cubic-bezier(.2,.8,.2,1) both',
        fade: 'fade .8s both',
        drift: 'drift 16s ease-in-out infinite alternate',
        slide: 'slide 28s linear infinite',
        pop: 'pop .6s .1s both cubic-bezier(.2,.8,.2,1)',
        ping2: 'ping2 1.8s infinite',
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorLight: '#F4F2EC',
        colorDark: '#0d0d0d',
        discord: '#5965F2',
        gold: '#fbbf24',
        silver: '#94a3b8',
        bronze: '#b45309',
        buttonGo: '#60a5fa',
        danger: '#f87171',
        success: '#22c55e',
      },
      boxShadow: {
        basic: '2px 2px 6px rgba(0, 0, 0, 0.35), 3px 3px 6px rgba(0, 0, 0, 0.25)',
        basicLg: '6px 6px 10px rgba(0, 0, 0, 0.35), 8px 8px 10px rgba(0, 0, 0, 0.25)',
        shDiscord: 'inset 6px 6px 6px #2d3697, inset -6px -6px 6px #6574ef',
        shDiscordRev:
          'inset 6px 6px 6px #6574ef, inset -6px -6px 6px #2d3697, 2px 2px 6px rgba(0, 0, 0, 0.35), 3px 3px 6px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-4turn)' },
        },
        revspin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(4turn)' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wofSpin: {
          '0%': { transform: 'rotate(0turn)' },
          '100%': { transform: 'rotate(1turn)' },
        },
      },
      animation: {
        loadspin: 'spin 5s linear infinite',
        revspin: 'revspin 5s linear infinite',
        fadein: 'fadein 500ms ease-out forwards',
        forbidden: 'fadein 2000ms ease-in 1500ms forwards',
        wofSpin: 'wofSpin 4000ms linear infinite',
      },
    },
  },
  plugins: [],
}

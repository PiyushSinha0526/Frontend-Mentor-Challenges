/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-Light-slate-blue": "var(--bg-Light-slate-blue)",
        "bg-Light-royal-blue": "var(--bg-Light-royal-blue)",
        "circle-Violet-blue": "var(--circle-Violet-blue)",
        "circle-Persian-blue": "var(--circle-Persian-blue)",
        "neutral-White": "var(--neutral-White)",
        "neutral-Pale-blue": "var(--neutral-Pale-blue)",
        "neutral-Light-lavender": "var(--neutral-Light-lavender)",
        "neutral-Dark-gray-blue": "var(--neutral-Dark-gray-blue)",
      },
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        Hanken: ["Hanken Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

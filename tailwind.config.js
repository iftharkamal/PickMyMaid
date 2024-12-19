/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'custom-orange': 'rgba(255, 90, 30, 0.01) 0px 0.64px 1.4px 0px, rgba(255, 90, 30, 0.035) 0px 1.93px 4.25px 0px, rgba(255, 90, 30, 0.094) 0px 5.11px 11.23px 0px, rgba(255, 90, 30, 0.3) 0px 16px 35.2px 0px',
      },

    },
  },
  plugins: [],
};

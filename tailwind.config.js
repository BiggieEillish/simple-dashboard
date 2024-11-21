/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fade-in-0': 'fadeIn 0.5s ease-in-out',
        'fade-out-0': 'fadeOut 0.5s ease-in-out',
        'slide-in-from-left': 'slideInLeft 0.3s ease-in-out',
        'slide-out-to-left': 'slideOutLeft 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

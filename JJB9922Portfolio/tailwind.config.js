/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'spin-med': 'spin 8s linear infinite',
        'pulse-slow': 'ping 6s cubic-bezier(0, 0, 5, 0.1) infinite',
      }
    }
  }
}


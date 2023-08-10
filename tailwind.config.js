/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        light: "#f5f5f5",
        dark: "#1b1b1b",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, 5px, #f5f5f5 5px, #f5f5f5 100px)",
        circularDark:"repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)"
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },
    },
    plugins: [],
  }
}
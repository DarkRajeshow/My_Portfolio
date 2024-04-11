/** @type {import('tailwindcss').Config} */

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


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
        circularDark: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)",
        circularDarkLg: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)",
        circularDarkMd: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)",
        circularDarkSm: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)",
        circularDarkXs: "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 30px)",
        circularLg: "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, 5px, #f5f5f5 5px, #f5f5f5 80px)",
        circularMd: "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, 5px, #f5f5f5 5px, #f5f5f5 60px)",
        circularSm: "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, 5px, #f5f5f5 5px, #f5f5f5 40px)",
        circularXs: "repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, 5px, #f5f5f5 5px, #f5f5f5 30px)",
        texturedBg: "linear-gradient(to right, rgba(245, 245, 245, .8), rgb(255 221 214 / 80%)), url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg);",
        texturedBgDark: "linear-gradient(to right, #1b1b1b, rgb(0, 0, 0, 0.75)), url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg);",
        gradientBg: "background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);"
      },
      boxShadow: {
        "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
      },

    },
    plugins: [addVariablesForColors],
  }
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
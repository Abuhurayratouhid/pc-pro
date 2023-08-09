/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14d919",
        // primary_text: "#f5e6d9",
        secondary: "#18191b",
        // sec_secondary: "#646464",
        accent: "#797778",
        // sec_accent: "#c19789",
        // gray: "#EEEEEE",
        // sec_gray: "#DBDFEA",
      },
    },
  },
  plugins: [],
};

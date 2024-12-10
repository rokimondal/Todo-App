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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "rgba(255, 188, 3, 1)", // Yellow for heading
        highlight: "rgba(255, 215, 57, 1)", // Yellow for button
        greyText: "rgba(124, 124, 124, 1)", // Grey for smaller text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Abhaya Libre", "serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
};

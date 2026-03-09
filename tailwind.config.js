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
        primary: {
          400: "#298848",
          500: "#16a34a",
          600: "#15803d",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#1a1a1a",
          100: "#2a2a2a",
          200: "#3a3a3a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-solar": "linear-gradient(135deg, #298848 0%, #16a34a 100%)",
      },
      boxShadow: {
        solar: "0 4px 30px rgba(250, 204, 21, 0.2)",
      },
    },
  },
  plugins: [],
};

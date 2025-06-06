/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode support
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      // ✅ Custom colors
      colors: {
        primary: "#032541", // custom blue
        secondary: "#F59E0B", // amber
        accent: "#10B981", // emerald
        dark: "#111827", // gray-900
        light: "#F3F4F6", // gray-100
        danger: "#EF4444", // red
        success: "#22C55E", // green
        warning: "#FBBF24", // yellow
      },
    },
  },
  plugins: [],
};

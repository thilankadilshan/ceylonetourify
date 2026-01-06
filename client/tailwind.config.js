/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Classic Sri Lankan Palette
        primary: "#2D5A27", // Tea Plantation Green
        secondary: "#D4AF37", // Heritage Gold
        accent: "#8B4513", // Wood/Earth Brown
        background: "#FAFAFA", // Clean Off-white
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"], // For Headings
        sans: ["Inter", "sans-serif"], // For Body text
      },
    },
  },
  plugins: [],
};

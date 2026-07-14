/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1B2B",       // deep navy — trust, institutional
        stone: "#F5F2EC",     // warm paper background
        brass: "#B08D57",     // muted brass — premium, real-estate signage feel
        pine: "#1F3A2E",      // deep green accent — land, permanence
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

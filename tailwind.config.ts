import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "diablo-red": "#d12132",
        "diablo-gold": "#fcb423",
        "diablo-dark": "#1a1a1a",
        "diablo-maroon": "#8B0000",
      },
      fontFamily: {
        sans: ['"Open Sans"', "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

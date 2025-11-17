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
        brand: {
          orange: '#FF6B35',
          black: '#000000',
          white: '#FFFFFF',
        },
        forest: {
          dark: '#2D5016',
          green: '#7CB342',
          brown: '#8D6E63',
          sky: '#4FC3F7',
        },
      },
    },
  },
  plugins: [],
};

export default config;

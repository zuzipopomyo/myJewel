import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add other paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
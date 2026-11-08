// tailwind.config.ts
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom colors matching image_1.png
        shaGreen: '#134e4a', // Dark Teal/Green (bg-teal-950/900)
        shaGold: '#eab308',  // Yellow/Gold (text-yellow-600/500)
        shaGoldBorder: '#ca8a04', // Border Gold
      },
    },
  },
  plugins: [],
};
export default config;
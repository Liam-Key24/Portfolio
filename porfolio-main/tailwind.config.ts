import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        Ogg: ["Ogg", "sans-serif"],
      },  
      fontSize: {
        's': '0.8rem',
        'm': '1rem',
        'l': '1.2rem', 
        'xl': '1.5rem',
        '2xl': '2rem',
      },
      lineHeight: {
        's': '1.2rem',
        'm': '1.5rem',
        'l': '1.8rem',
        'xl': '2.1rem',
        '2xl': '2.4rem',
      }, 
      letterSpacing: {
        's': '0.01em',
        'm': '0.02em',
        'l': '0.03em',
        'xl': '0.04em',
        '2xl': '0.05em',
      },
    },
  },
  plugins: [],
} satisfies Config;

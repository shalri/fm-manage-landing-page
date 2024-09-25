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
        "ml-bright-red": "var(--bright-red)",
        "ml-dark-blue": "var(--dark-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "very-dark-blue": "var(--very-dark-blue)",
        "very-pale-red": "var(--very-pale-red)",
        "very-light-gray": "var(--very-light-gray)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        bevietnam: ["Be Vietnam Pro", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        semibold: "500",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto", "system-ui"],
      serif: ["Lora", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Roboto"],
      body: ['"Roboto"'],
      nunito: ["Nunito Sans", "sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1400px",
        "2xl": "1880px",
      },
    },
    extend: {
      colors: {
        yellow: "#ECB407",
        primary: "#FFEACF",
        cream: "rgb(255 241 228)",
        black: "#141414",
        "primary-hover": "#fff5e7",
        secondary: "#5BD0F1",
        teriary: "#EDB507",
        gray: "#F7F7F7",
        "gray-darker": "#F2F2F2",
        "gray-text": "#B6B6B6",
        peach: "rgb(250, 244, 242)",
        darkPeach: "#ffe6d4",
        "custom-red": "#ed6435",
      },
      backgroundImage: {},
      boxShadow: {
        custom: 'rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em',
      },
    },
  },
  plugins: [],
};
export default config;

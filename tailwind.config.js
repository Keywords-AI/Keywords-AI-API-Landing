/** @type {import('tailwindcss').Config} */
const { join } = require("path");

export default {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,html}"
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        'fira-code': ['Fira Code'],
      },
      spacing: {
        xxxs: "4px",
        xxs: "8px",
        xs: "12px",
        sm: "16px",
        md: "20px",
        lg: "32px",
        xl: "60px",
        xxl: "80px",
        xxxl: "120px",
      },
      padding: {
        xxxs: "4px",
        xxs: "8px",
        xs: "12px",
        sm: "16px",
        md: "20px",
        lg: "32px",
        xl: "60px",
        xxl: "80px",
        xxxl: "120px",
      },
      borderRadius: {
        xs: "0px",
        sm: "4px",
        md: "8px",
        lg: "18px",
        xl: "24px",
      },

      colors: {
        primary: "#A8CBFF ",
        complementary: "#123456",
        success: "#73CB98",
        error: "#D43A28",
        gray: {
          white: "#F9FAFC",
          black: "#000000",
          2: "#181820",
          3: "#3E424A",
          4: "#B1B3BC",
        },
        box: "#1D1D1D",
        resend: {
          64: "rgba(239, 245, 255, 0.69)",
        },
      },
      boxShadow: {
        pricing: "2px 2px 10px 2px rgba(24, 24, 32, 0.40)",
        purple: "0 0 40px rgba(143, 0, 210, 0.25)",
        window: " 0px 0px 10px 10px rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        'highlight': 'linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.20) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0.04) 100%)',
        
        
      },
      screens: {
        'sm': { 'max': '680px'},
      },
    },
  },
  plugins: [require("./flexPlugin.js"),],
};

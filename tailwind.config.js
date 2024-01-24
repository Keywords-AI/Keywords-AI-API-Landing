/** @type {import('tailwindcss').Config} */
const { join } = require("path");
const theme = require("./src/components/styles/theme.js");
export default {
  content: [
    join(
      __dirname,
      "{src,pages,components,app}/**/*!(*.stories|*.spec).{js,jsx,html}"
    ),
  ],
  theme: theme,
  plugins: [require("./flexPlugin.js")],
};

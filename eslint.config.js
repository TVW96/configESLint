import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import semistandard from "eslint-config-semistandard"; // Import the shareable config


export default [
  // use recommended configurations
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  semistandard, // add the shareable

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser
    },
  },

  {
    rules: {
      "semi": [2, "always"],  // Enforce semicolons
      "quotes": [2, "single"], // Enforce single quotes
    },
  },
];
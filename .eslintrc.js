import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "./eslint.config";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname
});

export default [

    // mimic ESLintRC-style extends
    ...compat.extends("eslint-config-my-config"),
];
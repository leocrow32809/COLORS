import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node // This fixes the 'module' is not defined error
            },
            ecmaVersion: "latest",
            sourceType: "module"
        }
    },
    pluginJs.configs.recommended,
    {
        rules: {
            "no-unused-vars": "off",    // This ignores those "never used" warnings
            "no-undef": "warn",         // Turns undefined errors into warnings
            "no-dupe-keys": "error"     // Keeps the important duplicate key check
        }
    }
];
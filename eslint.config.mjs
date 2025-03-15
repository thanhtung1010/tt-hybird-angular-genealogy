import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores([
        "projects/**/*",
        ".vscode/*",
        ".angular/*",
    ]),
    {
        files: ["**/*.ts"],

        extends: compat.extends(
            "plugin:@angular-eslint/recommended",
            "plugin:@angular-eslint/template/process-inline-templates",
        ),

        languageOptions: {
            ecmaVersion: 5,
            sourceType: "script",

            parserOptions: {
                project: ["tsconfig.json"],
                createDefaultProgram: true,
            },
        },

        rules: {
            "@angular-eslint/directive-selector": ["error", {
                type: "attribute",
                prefix: "tt",
                style: "kebab-case",
            }],

            "@angular-eslint/component-selector": ["error", {
                type: "element",
                prefix: "tt",
                style: "kebab-case",
            }],

            "@angular-eslint/pipe-prefix": ["error", {
                prefixes: ["TT"],
            }],

            "@angular-eslint/no-empty-lifecycle-method": "off",

            "max-len": ["error", {
                code: 160,
                tabWidth: 2,
            }],
        },
    }, {
        files: ["**/*.html"],
        extends: compat.extends("plugin:@angular-eslint/template/recommended"),
        rules: {},
    }, {
        files: ["**/*.js"],

        languageOptions: {
            globals: {},
            ecmaVersion: "latest",
            sourceType: "script",
        },

        rules: {
            "max-len": ["error", {
                code: 160,
                tabWidth: 2,
            }],
        },
    }
]);

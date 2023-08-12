module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:wc/recommended",
        "plugin:lit/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "extends": [
                "plugin:@typescript-eslint/disable-type-checked"
            ],
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json", "./tsconfig.node.json", "./jsconfig.json"]
    },
    "plugins": [
        "@typescript-eslint",
        "storybook",
        "wc",
        "lit"
    ],
    "rules": {
    }
}

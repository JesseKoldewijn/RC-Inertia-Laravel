/** @type {import("prettier").Config & import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    plugin: ["@trivago/prettier-plugin-sort-imports"],
    singleQuote: false,
    trailingComma: "es5",
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: true,

    // sort-imports options
    importOrder: ["^@core/(.*)$", "^react/(.*)$", "^[./]"],
};

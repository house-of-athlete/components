module.exports = {
  extends: ["@houseofathlete/eslint-config-hoa"],

  env: {
    "jest/globals": true,
  },

  plugins: ["jest"],

  rules: {
    // See https://www.sanity.io/docs/parts#e778915da57f
    "import/no-unresolved": [2, { ignore: ["^@hoa/"] }],
  },
}

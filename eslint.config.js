import eslintConfig from "@delement/eslint-config-master";

export default [
  ...eslintConfig,
  {
    rules: {
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-description": "off", 
      "jsdoc/require-returns": "off",
    },
  },
  {
    files: [ "dist/**" ],
    rules: {
      "eqeqeq": "off",
      "no-unused-vars": "off", 
      "promise/param-names": "off",
      "promise/always-return": "off",
    },
  },
];
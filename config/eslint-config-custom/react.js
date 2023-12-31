module.exports = {
  extends: ["./base", "plugin:react-hooks/recommended"],
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
}

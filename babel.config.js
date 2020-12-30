module.exports = {
  presets: [["@babel/preset-env", { targets: "> 0.25%, not dead" }]],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-modules-commonjs"],
    },
  },
};

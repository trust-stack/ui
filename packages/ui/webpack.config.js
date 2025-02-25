const {TamaguiPlugin} = require("tamagui-loader");

module.exports = {
  plugins: [
    new TamaguiPlugin({
      config: "./src/tamagui.config.ts",
      components: ["@truststack/ui", "tamagui"],
      importsWhitelist: ["constants.js", "colors.js"],
      logTimings: true,
      disableExtraction: process.env.NODE_ENV === "development",
    }),
  ],
};

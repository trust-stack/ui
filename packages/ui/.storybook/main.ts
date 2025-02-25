import type {StorybookConfig} from "@storybook/react-vite";
import {tamaguiPlugin} from "@tamagui/vite-plugin";
import react from "@vitejs/plugin-react";
import {dirname, join} from "path";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: [
          "expo-linking",
          "expo-constants",
          "expo-modules-core",
          "expo-document-picker",
          "expo-av",
          "expo-asset",
          "expo-document-picker",
        ],
      },
    },
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    const {mergeConfig} = await import("vite");
    return mergeConfig(config, {
      resolve: {
        alias: {
          ...config.resolve?.alias,
          "*.svg": "*.svg?react",
          "react-native$": require.resolve("react-native-web"),
          "react-native-svg": "react-native-svg-web",
        },
      },
      plugins: [
        tamaguiPlugin({
          config: "../src/tamagui.config.ts",
          components: ["tamagui"],
          importsWhitelist: ["constants.js", "colors.js"],
          logTimings: true,
          disableExtraction: true,
          platform: "web",
        }),
        svgr({
          svgrOptions: {
            icon: true,
          },
          include: "../**/*.svg",
        }),
        react(),
      ],
    });
  },
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(0);
});

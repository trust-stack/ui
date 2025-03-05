import "@tamagui/core/reset.css";
import "./styles.css";

import "raf/polyfill";

import {TamaguiProvider, Theme} from "../src";
import {config} from "../src/tamagui.config";

import {Preview} from "@storybook/react";
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "default",
      values: [{name: "default", value: "#FFF"}],
    },
  },
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme={"light"}>
        <SafeAreaProvider>
          <Theme name={"light"}>
            <Story />
          </Theme>
        </SafeAreaProvider>
      </TamaguiProvider>
    ),
  ],
};

export default preview;

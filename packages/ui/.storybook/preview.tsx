import "@tamagui/core/reset.css";
import "./styles.css";

import "raf/polyfill";

import {config} from "@truststack/ui-config";
import {TamaguiProvider, Theme, ToastProvider, ToastViewport} from "../src";

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
      <TamaguiProvider
        config={config}
        defaultTheme={"provenance"}
        disableRootThemeClass
      >
        <ToastProvider swipeDirection="horizontal" duration={2000}>
          <SafeAreaProvider>
            <Theme name={"light"}>
              <Story />
            </Theme>
          </SafeAreaProvider>
          <ToastViewport />
        </ToastProvider>
      </TamaguiProvider>
    ),
  ],
};

export default preview;

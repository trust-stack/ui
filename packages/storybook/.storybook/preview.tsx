import "./styles.css";

import {TamaguiProvider, Theme} from "../../ui/src";
import {config} from "../../ui/src/tamagui.config";

import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";
import {Preview} from "@storybook/react";
import {initialize, mswLoader} from "msw-storybook-addon";

import React from "react";

initialize({
  onUnhandledRequest: "bypass",
});

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
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "desktop",
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <TamaguiProvider config={config} defaultTheme={"light"}>
        <Theme name={"light"}>
          <Story />
        </Theme>
      </TamaguiProvider>
    ),
  ],
};

export default preview;

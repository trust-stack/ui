import "@tamagui/core/reset.css";
import "./styles.css";

import "raf/polyfill";

import {Preview} from "@storybook/react";
import {config, TamaguiProvider, Theme} from "@truststack/ui";

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
        <Theme name={"light"}>
          <Story />
        </Theme>
      </TamaguiProvider>
    ),
  ],
};

export default preview;

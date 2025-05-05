import {Meta, StoryObj} from "@storybook/react";
import {View} from "@truststack/ui";
import {PassportPresentScreen} from "./PassportPresentScreen";

export default {
  title: "Passport/PassportPresentScreen",
  component: PassportPresentScreen,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone12",
    },
  },
  decorators: [
    (Story) => (
      <View style={{height: "100vh", width: "100vw"}}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof PassportPresentScreen>;

type Story = StoryObj<typeof PassportPresentScreen>;

export const Default: Story = {
  args: {
    value: "https://aatp.foodagility.com/",
    title: "Digital Grain Passport",
    height: "100%",
  },
};

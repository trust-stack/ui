import {Meta, StoryObj} from "@storybook/react";
import {View} from "@truststack/ui";
import {GrainPassportScreen} from "./GrainPassportScreen";

export default {
  title: "Passport/GrainPassportScreen",
  component: GrainPassportScreen,
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
} as Meta<typeof GrainPassportScreen>;

type Story = StoryObj<typeof GrainPassportScreen>;

export const Default: Story = {};

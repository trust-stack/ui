import {Meta, StoryObj} from "@storybook/react";
import {Text, View} from "@truststack/ui";
import {ModalCardScreen} from "./ModalCardScreen";

export default {
  title: "Render/ModalCardScreen",
  component: ModalCardScreen,
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
} as Meta<typeof ModalCardScreen>;

type Story = StoryObj<typeof ModalCardScreen>;

export const Default: Story = {
  args: {
    children: <Text>Modal Card Screen</Text>,
  },
};

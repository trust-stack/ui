import {Meta, StoryObj} from "@storybook/react";
import {View} from "@truststack/ui";
import {QrCode} from "./QrCode";

export default {
  component: QrCode,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A QR code component for displaying a string value as a QR code.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <View width="100%" height={400}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof QrCode>;

type Story = StoryObj<typeof QrCode>;

export const Default: Story = {
  args: {
    value: "https://www.google.com",
  },
};

export const Sized: Story = {
  args: {
    value: "https://www.google.com",
    size: 100,
    height: 100,
  },
};

export const Border: Story = {
  args: {
    value: "https://www.google.com",
    borderWidth: 4,
    borderColor: "$primaryContainer",
  },
};

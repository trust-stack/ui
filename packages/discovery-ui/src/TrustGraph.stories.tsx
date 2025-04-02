import {Meta, StoryObj} from "@storybook/react";
import {TrustGraph} from "./TrustGraph";

export default {
  component: TrustGraph,
} as Meta;

type Story = StoryObj<typeof TrustGraph>;

export const Default: Story = {
  args: {},
};

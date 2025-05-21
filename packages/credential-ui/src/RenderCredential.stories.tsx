import {Meta, StoryObj} from "@storybook/react";
import {RenderCredential} from "./RenderCredential";
import {NGR} from "./__mocks__";

export default {
  component: RenderCredential,
} as Meta<typeof RenderCredential>;

type Story = StoryObj<typeof RenderCredential>;

export const Default: Story = {
  args: {
    render: NGR,
  },
};

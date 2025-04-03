import {Meta, StoryObj} from "@storybook/react/*";
import {Body} from "../../ui/src/typography";
import {RailLayout} from "./RailLayout";

export default {
  component: RailLayout,
  title: "Layout/RailLayout",
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof RailLayout>;

type Story = StoryObj<typeof RailLayout>;

export const Default: Story = {
  args: {
    children: <Body>Content</Body>,
  },
};

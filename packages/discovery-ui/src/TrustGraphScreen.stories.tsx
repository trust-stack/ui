import {Meta, StoryObj} from "@storybook/react/*";
import {Simple} from "./TrustGraph.stories";
import {TrustGraphScreen} from "./TrustGraphScreen";

export default {
  component: TrustGraphScreen,
  title: "Discovery/TrustGraphScreen",
} as Meta<typeof TrustGraphScreen>;

type Story = StoryObj<typeof TrustGraphScreen>;

export const Default: Story = {
  args: {
    data: {
      header: {
        title: "Consignment Summary",
        subtitle: "Processed on the 2nd of April 2025",
        size: "medium",
      },
      trustGraph: {
        ...Simple.args.data,
      },
    },
  },
};

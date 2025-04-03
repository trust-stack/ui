import {Meta, StoryObj} from "@storybook/react";
import {View} from "@truststack/ui";
import {TrustGraph} from "./TrustGraph";
import {DCC, DPP, DTE} from "./TrustGraphNode.stories";

export default {
  component: TrustGraph,
  title: "Discovery/TrustGraph",
  decorators: [
    (Story) => (
      <View width={800} height={800}>
        <Story />
      </View>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof TrustGraph>;

export const Simple: Story = {
  name: "DPP",
  args: {
    data: {
      id: "1",
      hash: "1",
      nodes: [DTE.args.data, DPP.args.data, DCC.args.data],
      edges: [
        {
          source: "dte",
          target: "dpp",
        },
        {
          source: "dcc",
          target: "dpp",
        },
      ],
    },
  },
};

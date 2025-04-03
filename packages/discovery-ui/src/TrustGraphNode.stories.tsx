import {Meta, StoryObj} from "@storybook/react/*";
import {TrustGraphNodeType} from "@truststack/schema";
import ReactFlow from "react-flow-renderer";
import {TrustGraphNode} from "./TrustGraphNode";

export default {
  component: TrustGraphNode,
  title: "Discovery/TrustGraphNode",
  decorators: [
    (Story) => (
      <ReactFlow>
        <Story />
      </ReactFlow>
    ),
  ],
} as Meta<typeof TrustGraphNode>;

type Story = StoryObj<typeof TrustGraphNode>;

export const DPP: Story = {
  args: {
    data: {
      type: TrustGraphNodeType.DPP,
      id: "dpp",
      hash: "dpp",
      raw: {},
    },
  },
};

export const DTE: Story = {
  args: {
    data: {
      type: TrustGraphNodeType.DTE,
      id: "dte",
      hash: "dte",
      raw: {},
    },
  },
};

export const DCC: Story = {
  args: {
    data: {
      type: TrustGraphNodeType.DCC,
      id: "dcc",
      hash: "dcc",
      raw: {},
    },
  },
};

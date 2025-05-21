import {Meta, StoryObj} from "@storybook/react/*";
import {View} from "@truststack/ui";
import {PolicyResultItem} from "./PolicyResultItem";

export default {
  component: PolicyResultItem,
  title: "Discovery/PolicyResultItem",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A component that displays a policy result item.
                It displays a label and a description.
                It also displays an icon based on the status of the policy.
                `,
      },
    },
  },
  decorators: [
    (Story) => (
      <View width={600} margin={40}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof PolicyResultItem>;

type Story = StoryObj<typeof PolicyResultItem>;

export const Success: Story = {
  args: {
    data: {
      status: "SUCCESS",
      policyName: "Policy Name",
      policyDescription: "Policy Description",
    },
  },
};

export const Pending: Story = {
  args: {
    data: {
      status: "PENDING",
      policyName: "Policy Name",
      policyDescription: "Policy Description",
    },
  },
};

export const Failure: Story = {
  args: {
    data: {
      status: "FAILURE",
      policyName: "Policy Name",
      policyDescription: "Policy Description",
    },
  },
};

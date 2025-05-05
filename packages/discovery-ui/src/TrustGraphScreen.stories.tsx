import {Meta, StoryObj} from "@storybook/react/*";
import {RailLayout} from "@truststack/render-ui";
import {ThemeProvider} from "@truststack/theme-ui";
import {theme} from "./__mock__";
import {Failure, Pending, Success} from "./PolicyResultItem.stories";
import {Simple} from "./TrustGraph.stories";
import {TrustGraphScreen} from "./TrustGraphScreen";

export default {
  component: TrustGraphScreen,
  title: "Discovery/TrustGraphScreen",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={{
          name: "Demo",
          variables: theme,
        }}
      >
        <RailLayout>
          <Story />
        </RailLayout>
      </ThemeProvider>
    ),
  ],
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
      policyResults: [
        Success.args as any,
        Failure.args as any,
        Pending.args as any,
      ],
    },
  },
};

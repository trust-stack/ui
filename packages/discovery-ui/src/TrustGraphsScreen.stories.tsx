import { Meta, StoryObj } from "@storybook/react/*";
import { RailLayout } from "@truststack/render-ui";
import { ThemeProvider } from "@truststack/theme-ui";
import { theme } from "./__mock__";
import { TrustGraphsScreen } from "./TrustGraphsScreen";
import { Home } from "@truststack/icons-ui";
import { Icon, NavRailItem } from "@truststack/ui";
import { Image } from "tamagui";

export default {
  component: TrustGraphsScreen,
  title: "Discovery/TrustGraphsScreen",
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
        <RailLayout
          Icon={
            <Image
              br={100}
              source={{
                uri: "logo.png",
                width: 50,
                height: 50,
              }}
            />
          }
          Items={<NavRailItem label="Home" icon={Home} active={true} />}
        >
          <Story />
        </RailLayout>
      </ThemeProvider>
    ),
  ],
} as Meta<typeof TrustGraphsScreen>;

type Story = StoryObj<typeof TrustGraphsScreen>;

export const Default: Story = {
  args: {
    data: {
      header: {
        title: "Recent Consignments",
        subtitle: "Processed on the 2nd of April 2025",
        size: "medium",
      },
      trustGraphs: [
        {
          batch: "12345678.1",
          supplier: "Cargill Inc.",
          policies: ["US EPA Pathways"],
          s3: 100,
          compliant: true,
          date: new Date("2024-05-01"),
        },
        {
          batch: "12345678.2",
          supplier: "ADM Company",
          policies: ["US EPA Pathways"],
          s3: 200,
          compliant: false,
          date: new Date("2024-04-15"),
        },
        {
          batch: "12345678.3",
          supplier: "Bunge Limited",
          policies: ["US EPA Pathways"],
          s3: 300,
          compliant: true,
          date: new Date("2024-03-20"),
        },
        {
          batch: "12345678.4",
          supplier: "Louis Dreyfus Company",
          policies: ["US EPA Pathways"],
          s3: 400,
          compliant: true,
          date: new Date("2024-02-10"),
        },
      ],
    },
  },
};

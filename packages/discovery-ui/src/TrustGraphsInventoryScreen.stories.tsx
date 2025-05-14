import {Meta, StoryObj} from "@storybook/react/*";
import {BarChart, Home, Sun} from "@truststack/icons-ui";
import {RailLayout} from "@truststack/render-ui";
import {ThemeProvider} from "@truststack/theme-ui";
import {NavRailItem} from "@truststack/ui";
import {Fragment} from "react/jsx-runtime";
import {Image} from "tamagui";
import {theme} from "./__mock__";
import {TrustGraphsInventoryScreen} from "./TrustGraphsInventoryScreen";

export default {
  component: TrustGraphsInventoryScreen,
  title: "Discovery/TrustGraphsInventoryScreen",
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
          Items={
            <Fragment>
              <NavRailItem label="Home" icon={Home} />
              <NavRailItem label="Inventory" icon={BarChart} active={true} />
              <NavRailItem label="ESG" icon={Sun} />
            </Fragment>
          }
        >
          <Story />
        </RailLayout>
      </ThemeProvider>
    ),
  ],
} as Meta<typeof TrustGraphsInventoryScreen>;

type Story = StoryObj<typeof TrustGraphsInventoryScreen>;

export const Default: Story = {
  args: {
    data: {
      header: {
        title: "Bunker #23",
        subtitle: "Inventory history for the bunker",
        size: "medium",
      },
      inventoryHistory: [
        {
          batch: "batch:12345678.12",
          supplier: "John Doe",
          policies: ["US EPA Pathways"],
          s3: 100,
          compliant: true,
          date: new Date("2024-05-01"),
          declaration: "Canola, Bandit TT",
        },
        {
          batch: "batch:12326634.20",
          supplier: "Jane Doe",
          policies: ["US EPA Pathways"],
          s3: 200,
          compliant: true,
          date: new Date("2024-04-15"),
          declaration: "Canola, Avon",
        },
        {
          batch: "batch:32244634.3",
          supplier: "Farming Inc.",
          policies: ["US EPA Pathways"],
          s3: 300,
          compliant: true,
          date: new Date("2024-03-20"),
          declaration: "Canola, Baseline",
        },
        {
          batch: "batch:99124722.41",
          supplier: "Sam Scoot",
          policies: ["US EPA Pathways"],
          s3: 400,
          compliant: true,
          date: new Date("2024-02-10"),
          declaration: "Canola, Bidgee",
        },
      ],
    },
  },
};

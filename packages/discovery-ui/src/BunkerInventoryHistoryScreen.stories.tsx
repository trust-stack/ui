import { Meta, StoryObj } from "@storybook/react/*";
import { ThemeProvider } from "@truststack/theme-ui";
import { theme } from "./__mock__";
import { BunkerInventoryHistoryScreen } from "./BunkerInventoryHistoryScreen";

export default {
  component: BunkerInventoryHistoryScreen,
  title: "Discovery/BunkerInventoryHistoryScreen",
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
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta<typeof BunkerInventoryHistoryScreen>;

type Story = StoryObj<typeof BunkerInventoryHistoryScreen>;

export const Default: Story = {
  args: {
    data: {
      header: {
        title: "Bunker Inventory History",
        subtitle: "Inventory history for the bunker",
        size: "medium",
      },
      inventoryHistory: [
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

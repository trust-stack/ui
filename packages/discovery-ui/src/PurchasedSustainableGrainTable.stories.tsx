import { Meta, StoryObj } from "@storybook/react/*";
import { PurchasedSustainableGrainTable } from "./PurchasedSustainableGrainTable";

export default {
  component: PurchasedSustainableGrainTable,
  title: "Discovery/PurchasedSustainableGrainTable",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
} as Meta<typeof PurchasedSustainableGrainTable>;

type Story = StoryObj<typeof PurchasedSustainableGrainTable>;

export const Default: Story = {
  args: {
    purchasedSustainableGrains: [
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
        compliant: false,
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
};

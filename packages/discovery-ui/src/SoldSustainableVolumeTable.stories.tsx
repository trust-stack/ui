import { Meta, StoryObj } from "@storybook/react/*";
import { SoldSustainableVolumeTable } from "./SoldSustainableVolumeTable";

export default {
  component: SoldSustainableVolumeTable,
  title: "Discovery/SoldSustainableVolumeTable",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
} as Meta<typeof SoldSustainableVolumeTable>;

type Story = StoryObj<typeof SoldSustainableVolumeTable>;

export const Default: Story = {
  args: {
    soldSustainableVolume: [
      {
        contractNumber: "+1 1234567812",
        buyer: "John Doe",
        quantity: 100,
        unit: "t",
        country: "US",
      },
      {
        contractNumber: "+1 1232663420",
        buyer: "Jane Doe",
        quantity: 200,
        unit: "t",
        country: "US",
      },
      {
        contractNumber: "+1 322446343",
        buyer: "Farming Inc.",
        quantity: 300,
        unit: "t",
        country: "US",
      },
      {
        contractNumber: "+1 9912472241",
        buyer: "Sam Scoot",
        quantity: 400,
        unit: "t",
        country: "US",
      },
    ],
  },
};

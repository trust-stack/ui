import {Meta, StoryObj} from "@storybook/react";
import {BarcodeScanner} from "./BarcodeScanner";

export default {
  component: BarcodeScanner,
} as Meta<typeof BarcodeScanner>;

type Story = StoryObj<typeof BarcodeScanner>;

export const Default: Story = {
  args: {
    onScan: (code: string) => {
      console.log(code);
    },
    onError: (error: string) => {
      console.error(error);
    },
  },
};

import { Meta, StoryObj } from "@storybook/react";
import { View } from "@truststack/ui";
import { http, HttpResponse } from "msw";
import { AddCredentialScreen, FETCH_URL } from "./AddCredentialScreen";
import { NGR } from "./__mocks__/ngr";

export default {
  title: "Wallet/AddCredentialScreen",
  component: AddCredentialScreen,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "iphone12",
    },
  },
  decorators: [
    (Story) => (
      <View style={{height: "100vh", width: "100vw"}}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof AddCredentialScreen>;

type Story = StoryObj<typeof AddCredentialScreen>;

export const Default: Story = {
  args: {
    value: "https://aatp.foodagility.com/",
    title: "Digital Grain Passport",
    height: "100%",
  },
  parameters: {
    msw: {
      handlers: [
        http.get(FETCH_URL, () => {
          return HttpResponse.json({
            render: NGR,
          });
        }),
      ],
    },
  },
};

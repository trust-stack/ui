import {Meta, StoryObj} from "@storybook/react";
import {useForm} from "react-hook-form";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {H4, View} from "tamagui";
import {PlatformDecorator} from "../../ui/src/storybook-utils";
import {FormProvider} from "./context";
import {PagerForm} from "./PagerForm";

export default {
  component: PagerForm,
  decorators: [
    (Story) => {
      const formMethods = useForm();

      return (
        <SafeAreaProvider>
          <FormProvider formMethods={formMethods} submitHandler={() => {}}>
            <Story />
          </FormProvider>
        </SafeAreaProvider>
      );
    },
  ],
} as Meta<typeof PagerForm>;

type Story = StoryObj<typeof PagerForm>;

export const Web: Story = {
  parameters: {
    viewport: {
      defaultViewport: "fullscreen",
    },
    layout: "fullscreen",
  },
  args: {
    forms: [
      {
        title: "Hello",
        content: <H4>Hello World</H4>,
      },
      {
        title: "Good Bye",
        content: <H4>Good Bye World</H4>,
      },
    ],
  },
  decorators: [
    (Story) => (
      <View maxWidth={800}>
        <Story />
      </View>
    ),
    PlatformDecorator("web"),
  ],
};

import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { ImagePicker } from "./ImagePicker";

const meta = {
  title: "Components/ImagePicker",
  component: ImagePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A component for selecting and capturing images. Supports both camera and gallery selection.

### Features
- Camera capture
- Gallery selection
- Image preview
- Responsive design
        `,
      },
    },
  },
  argTypes: {
    onChange: {
      description: "Callback function when an image is selected or captured",
      action: "image selected",
    },
    uri: {
      description: "URI of the currently selected image",
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImagePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (uri, mimeType) => {
      console.log("Selected image:", uri);
      console.log("MIME type:", mimeType);
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <ImagePicker {...args} />
    </YStack>
  ),
};

export const WithPreview: Story = {
  args: {
    onChange: (uri, mimeType) => {
      console.log("Selected image:", uri);
      console.log("MIME type:", mimeType);
    },
    uri: "https://picsum.photos/200/300",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing an image picker with a pre-selected image preview.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <ImagePicker {...args} />
    </YStack>
  ),
};

export const CustomSize: Story = {
  args: {
    onChange: (uri, mimeType) => {
      console.log("Selected image:", uri);
      console.log("MIME type:", mimeType);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing how to customize the size of the image picker.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={300}>
      <ImagePicker {...args} />
    </YStack>
  ),
};

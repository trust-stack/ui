import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { ImagesPicker } from "./ImagesPicker";

const meta = {
  title: "Components/ImagesPicker",
  component: ImagesPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A component for selecting and managing multiple images. Supports both camera capture and gallery selection.

### Features
- Multiple image selection
- Camera capture
- Gallery selection
- Image preview
- Image removal
- Responsive design
        `,
      },
    },
  },
  argTypes: {
    onChange: {
      description: "Callback function when images are selected or removed",
      action: "images changed",
    },
    images: {
      description: "Array of images with URIs and MIME types",
      control: "object",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImagesPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: (images) => {
      console.log("Selected images:", images);
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <ImagesPicker {...args} />
    </YStack>
  ),
};

export const WithInitialImages: Story = {
  args: {
    onChange: (images) => {
      console.log("Selected images:", images);
    },
    images: [
      { uri: "https://picsum.photos/200/300", mimeType: "image/jpeg" },
      { uri: "https://picsum.photos/300/200", mimeType: "image/jpeg" },
      { uri: "https://picsum.photos/250/250", mimeType: "image/jpeg" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing pre-selected images with the ability to add more or remove existing ones.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <ImagesPicker {...args} />
    </YStack>
  ),
};

export const SingleImage: Story = {
  args: {
    onChange: (images) => {
      console.log("Selected images:", images);
    },
    images: [{ uri: "https://picsum.photos/200/300", mimeType: "image/jpeg" }],
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing a single image with the ability to replace it.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <ImagesPicker {...args} />
    </YStack>
  ),
};

export const CustomSize: Story = {
  args: {
    onChange: (images) => {
      console.log("Selected images:", images);
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
      <ImagesPicker {...args} />
    </YStack>
  ),
};

export const GridLayout: Story = {
  args: {
    onChange: (images) => {
      console.log("Selected images:", images);
    },
    images: [
      { uri: "https://picsum.photos/200/300", mimeType: "image/jpeg" },
      { uri: "https://picsum.photos/300/200", mimeType: "image/jpeg" },
      { uri: "https://picsum.photos/250/250", mimeType: "image/jpeg" },
      { uri: "https://picsum.photos/200/200", mimeType: "image/jpeg" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing multiple images in a grid layout.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={800}>
      <ImagesPicker {...args} />
    </YStack>
  ),
};

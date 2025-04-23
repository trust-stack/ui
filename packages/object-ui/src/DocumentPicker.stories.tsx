import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { DocumentPicker } from "./DocumentPicker";

const meta = {
  title: "Components/DocumentPicker",
  component: DocumentPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A component for selecting documents from the device. Supports various file types and provides a clean upload interface.

### Features
- Document selection
- File type filtering
- Customizable label
- Disabled state
- Responsive design
        `,
      },
    },
  },
  argTypes: {
    onSelect: {
      description: "Callback function when a document is selected",
      action: "document selected",
    },
    type: {
      description: "Array of MIME types to filter documents",
      control: "multi-select",
      options: [
        "application/pdf",
        "image/*",
        "text/plain",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
    },
    label: {
      description: "Custom label for the upload button",
      control: "text",
    },
    disabled: {
      description: "Disable the document picker",
      control: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DocumentPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: (asset) => {
      console.log("Selected document:", asset);
    },
    label: "Upload document",
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentPicker {...args} />
    </YStack>
  ),
};

export const PDFOnly: Story = {
  args: {
    onSelect: (asset) => {
      console.log("Selected PDF:", asset);
    },
    type: ["application/pdf"],
    label: "Upload PDF",
  },
  parameters: {
    docs: {
      description: {
        story: "Example of restricting file selection to PDF documents only.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentPicker {...args} />
    </YStack>
  ),
};

export const WordDocuments: Story = {
  args: {
    onSelect: (asset) => {
      console.log("Selected Word document:", asset);
    },
    type: [
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    label: "Upload Word document",
  },
  parameters: {
    docs: {
      description: {
        story: "Example of allowing both .doc and .docx file formats.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentPicker {...args} />
    </YStack>
  ),
};

export const Disabled: Story = {
  args: {
    onSelect: (asset) => {
      console.log("Selected document:", asset);
    },
    disabled: true,
    label: "Upload disabled",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of the disabled state where users cannot select new documents.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentPicker {...args} />
    </YStack>
  ),
};

export const CustomSize: Story = {
  args: {
    onSelect: (asset) => {
      console.log("Selected document:", asset);
    },
    label: "Upload document",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing how to customize the size of the document picker.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={300}>
      <DocumentPicker {...args} />
    </YStack>
  ),
};

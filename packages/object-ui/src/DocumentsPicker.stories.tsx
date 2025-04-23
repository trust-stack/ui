import type { Meta, StoryObj } from "@storybook/react";
import { YStack } from "tamagui";
import { DocumentsPicker } from "./DocumentsPicker";

const meta = {
  title: "Components/DocumentsPicker",
  component: DocumentsPicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A component for selecting multiple documents. Supports various file types and provides a list view of selected documents.

### Features
- Multiple document selection
- File type filtering
- Document removal
- Disabled state
- Customizable label
- Responsive design
        `,
      },
    },
  },
  argTypes: {
    onSelect: {
      description: "Callback function when documents are selected",
      action: "documents selected",
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
} satisfies Meta<typeof DocumentsPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: (documents) => {
      console.log("Selected documents:", documents);
    },
    label: "Upload files",
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentsPicker {...args} />
    </YStack>
  ),
};

export const PDFOnly: Story = {
  args: {
    onSelect: (documents) => {
      console.log("Selected documents:", documents);
    },
    type: ["application/pdf"],
    label: "Upload PDFs",
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
      <DocumentsPicker {...args} />
    </YStack>
  ),
};

export const WithInitialDocuments: Story = {
  args: {
    onSelect: (documents) => {
      console.log("Selected documents:", documents);
    },
    documents: [
      {
        uri: "file:///example1.pdf",
        name: "Document 1.pdf",
        mimeType: "application/pdf",
      },
      {
        uri: "file:///example2.pdf",
        name: "Document 2.pdf",
        mimeType: "application/pdf",
      },
    ],
    label: "Add more files",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example showing pre-selected documents with the ability to add more.",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentsPicker {...args} />
    </YStack>
  ),
};

export const Disabled: Story = {
  args: {
    onSelect: (documents) => {
      console.log("Selected documents:", documents);
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
      <DocumentsPicker {...args} />
    </YStack>
  ),
};

export const CustomFileTypes: Story = {
  args: {
    onSelect: (documents) => {
      console.log("Selected documents:", documents);
    },
    type: ["image/*", "application/pdf"],
    label: "Upload images or PDFs",
  },
  parameters: {
    docs: {
      description: {
        story: "Example of allowing multiple file types (images and PDFs).",
      },
    },
  },
  render: (args) => (
    <YStack gap={"$4"} w={500}>
      <DocumentsPicker {...args} />
    </YStack>
  ),
};

import { Meta, StoryObj } from "@storybook/react";
import { View } from "@truststack/ui";
import { LexShapeEditor } from "./LexShapeEditor";

const DEFAULT_VALUE = `// Digital Product Passport Rule
rule "DPP Conformity Check"
target DigitalProductPassport
must reference ConformityCredential
where the property "issuer" is "web:did:example:issuer123"
and the property "type" is "DeforestationCredential"`;

const COMPLEX_EXAMPLE = `// Multiple Rules Example
rule "Product Origin Verification"
target DigitalProductPassport
must reference Party
where the property "role" is "manufacturer"
and the property "location" is "EU"

rule "Conformity Validation"
target ConformityCredential
must reference Party
where issuer was issued by "web:did:trusted:authority"
and the property "validUntil" is "2024-12-31"`;

export default {
  component: LexShapeEditor,
  title: "Discovery/LexShapeEditor",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A specialized code editor for LexSHAPE (Lexical Shapes) language.
          Features include:
          - Custom syntax highlighting for LexSHAPE keywords and entities
          - Auto-completion support
          - Dark theme optimized for readability
          - Built on Monaco Editor for powerful editing capabilities`,
      },
    },
  },
  decorators: [
    (Story) => (
      <View width="100%" height={400}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof LexShapeEditor>;

type Story = StoryObj<typeof LexShapeEditor>;

export const Default: Story = {
  args: {
    value: DEFAULT_VALUE,
    onChange: (value) => console.log("Content changed:", value),
    options: {
      minimap: { enabled: true },
      lineNumbers: "on",
      scrollBeyondLastLine: false,
      fontSize: 14,
      wordWrap: "on",
      automaticLayout: true,
    },
  },
};

export const ComplexRules: Story = {
  args: {
    ...Default.args,
    value: COMPLEX_EXAMPLE,
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    value: DEFAULT_VALUE,
    options: {
      ...Default.args?.options,
      minimap: { enabled: false },
      lineNumbers: "off",
      folding: false,
    },
  },
  decorators: [
    (Story) => (
      <View width="100%" height={200}>
        <Story />
      </View>
    ),
  ],
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    value: DEFAULT_VALUE,
    options: {
      ...Default.args?.options,
      readOnly: true,
      minimap: { enabled: false },
    },
  },
};

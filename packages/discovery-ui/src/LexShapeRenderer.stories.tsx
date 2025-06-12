import { Meta, StoryObj } from "@storybook/react";
import { View } from "@truststack/ui";
import { LexShapeRenderer } from "./LexShapeRenderer";

const SIMPLE_RULE = `// Digital Product Passport Rule
rule "DPP Conformity Check"
target DigitalProductPassport
must reference ConformityCredential
where the property "issuer" is "web:did:example:issuer123"
and the property "type" is "DeforestationCredential"`;

const COMPLEX_RULES = `// Multiple Rules Example
rule "Product Origin Verification"
target DigitalProductPassport
must reference Party
where the property "role" is "manufacturer"
and the property "location" is "EU"

rule "Conformity Validation"
target ConformityCredential
must reference Party
where issuer was issued by "web:did:trusted:authority"
and the property "validUntil" is "2024-12-31"

rule "Supply Chain Verification"
target DigitalProductPassport
must reference Party
where the property "role" is "supplier"
and the property "certification" is "ISO14001"`;

export default {
  component: LexShapeRenderer,
  title: "Discovery/LexShapeRenderer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `A read-only renderer for LexSHAPE (Lexical Shapes) language.
          Features include:
          - Syntax highlighting for LexSHAPE keywords and entities
          - Optimized for display-only use cases
          - Clean, minimal interface without editing controls
          - Perfect for rule visualization and documentation`,
      },
    },
  },
  decorators: [
    (Story) => (
      <View width="100%" height={400} backgroundColor="$surface">
        <Story />
      </View>
    ),
  ],
} as Meta<typeof LexShapeRenderer>;

type Story = StoryObj<typeof LexShapeRenderer>;

export const Default: Story = {
  args: {
    value: SIMPLE_RULE,
  },
};

export const ComplexExample: Story = {
  args: {
    value: COMPLEX_RULES,
  },
  decorators: [
    (Story) => (
      <View width="100%" height={600} backgroundColor="$surface">
        <Story />
      </View>
    ),
  ],
};

export const Compact: Story = {
  args: {
    value: SIMPLE_RULE,
  },
  decorators: [
    (Story) => (
      <View width="100%" height={200} backgroundColor="$surface">
        <Story />
      </View>
    ),
  ],
};

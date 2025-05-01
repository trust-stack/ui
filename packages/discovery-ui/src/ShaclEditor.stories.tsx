import { Meta, StoryObj } from "@storybook/react";
import { View } from "@truststack/ui";
import { ShaclEditor } from "./ShaclEditor";

const DEFAULT_VALUE = `# SHACL Shapes for Deforestation Digital Livestock Passports

@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix ex: <http://tprov.io/ns#> .

ex:DigitalLivestockPassportShape 
    a sh:NodeShape ;
    sh:targetClass ex:PASSPORT ;    # Targets DIGITAL_LIVESTOCK_PASSPORTS
    sh:property [
        sh:path ex:conformityClaims ;             # Ensures link to CONFORMITY_CREDENTIAL
        sh:class ex:CONFORMITY ;          # Credential must be of type CONFORMITY_CREDENTIAL
        sh:minCount 1 ;                             # Requires at least ONE
        sh:node ex:DeforestationCredentialShape ;   # Must be a DEFORETATION CREDENTIAL
    ] .`;

export default {
  component: ShaclEditor,
  title: "Discovery/ShaclEditor",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A specialized Monaco editor for editing SHACL (Shapes Constraint Language) with syntax highlighting, autocompletion, and custom theming.",
      },
    },
  },
  decorators: [
    (Story) => (
      <View width={"100%"} height={800}>
        <Story />
      </View>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof ShaclEditor>;

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

export const Compact: Story = {
  args: {
    ...Default.args,
    options: {
      ...Default.args?.options,
      minimap: { enabled: false },
      lineNumbers: "off",
      folding: false,
    },
  },
  decorators: [
    (Story) => (
      <View width={"100%"} height={300}>
        <Story />
      </View>
    ),
  ],
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    options: {
      ...Default.args?.options,
      readOnly: true,
      minimap: { enabled: false },
    },
  },
};

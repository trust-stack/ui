import type { Meta, StoryObj } from "@storybook/react";
import { View } from "@truststack/ui";
import { ShaclRenderer } from "./ShaclRenderer";

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

const meta = {
  component: ShaclRenderer,
  title: "Discovery/ShaclRenderer",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <View width={"100%"} height={800}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ShaclRenderer>;

export default meta;
type Story = StoryObj<typeof ShaclRenderer>;

export const Default: Story = {
  args: {
    value: DEFAULT_VALUE,
  },
};

export const SmallHeight: Story = {
  args: {
    value: DEFAULT_VALUE,
  },
  decorators: [
    (Story) => (
      <View width={"100%"} height={200}>
        <Story />
      </View>
    ),
  ],
};

export const FullWidth: Story = {
  args: {
    value: DEFAULT_VALUE,
  },
  decorators: [
    (Story) => (
      <View width={"100%"} height={800}>
        <Story />
      </View>
    ),
  ],
};

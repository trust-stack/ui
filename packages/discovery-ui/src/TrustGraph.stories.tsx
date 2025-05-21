import {Meta, StoryObj} from "@storybook/react";
import {View} from "@truststack/ui";
import {TrustGraph} from "./TrustGraph";
import {cibo} from "./__mocks__/cibo";
import {dgp} from "./__mocks__/dgp";
import {emissions} from "./__mocks__/emissions";
import {go} from "./__mocks__/go";
import {ngr} from "./__mocks__/ngr";
import {yieldValidity} from "./__mocks__/yield";

export default {
  component: TrustGraph,
  title: "Discovery/TrustGraph",
  decorators: [
    (Story) => (
      <View width={"100%"} height={800}>
        <Story />
      </View>
    ),
  ],
} as Meta;

type Story = StoryObj<typeof TrustGraph>;

export const Simple: Story = {
  name: "Grain Chain Map",
  args: {
    data: {
      id: "grain-map",
      hash: "grain-map",
      type: "DPP",
      policyResults: [],
      policies: [],
      nodes: [
        {
          id: "landTitles",
          type: "DIA",
          hash: "landTitles",
          raw: {
            label: "NSW Land Titles",
            description: "New South Wales Land Titles Register.",
          },
        },
        {
          id: "go",
          type: "DCC",
          hash: "go",
          raw: {
            label: "Guarantee of Origin",
            description: "Evidence of land ownership, or right to operate",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: go,
          },
        },
        {
          id: "usEpa",
          type: "DCC",
          hash: "usEpa",
          raw: {
            label: "Deforestation Assessment",
            description:
              "Assessment of land boundaries in GO credential against US EPA requirements.",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: cibo as any,
          },
        },
        {
          id: "digitalGrainPassport",
          type: "DPP",
          hash: "digitalGrainPassport",
          raw: {
            label: "Digital Grain Passport",
            description: "Canola passport issued by McKabe Farms.",
            html: dgp as any,
          },
        },
        {
          id: "cibo",
          type: "DIA",
          hash: "cibo",
          raw: {
            label: "CIBO Labs",
            description: "Certified deforestation assessment provider.",
            raw: cibo as any,
          },
        },
        {
          id: "acmeCalculator",
          type: "DIA",
          hash: "acmeCalculator",
          raw: {
            label: "ACME Emissions Calculator",
            description: "ACME Emissions Calculator description",
          },
        },
        {
          id: "yieldValidity",
          type: "DCC",
          hash: "yieldValidity",
          raw: {
            label: "Yield Validity",
            description:
              "Assessment of crop production and yield validity for given production areas.",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: yieldValidity,
          },
        },
        {
          id: "dataFarming",
          type: "DIA",
          hash: "dataFarming",
          raw: {label: "DataFarming", description: "DataFarming description"},
        },
        {
          id: "ngr",
          type: "DCC",
          hash: "ngr",
          raw: {
            label: "National Grower Registration",
            description: "Registration of grower against the NGR.",
            issuedAt: "2021-01-01",
            expiresAt: "2031-01-01",
            html: ngr as any,
          },
        },
        {
          id: "theNgr",
          type: "DIA",
          hash: "theNgr",
          raw: {
            label: "National Grower Register",
            description: "Trusted register of grower business identification.",
          },
        },
        {
          id: "emissionsProfile",
          type: "DCC",
          hash: "emissionsProfile",
          raw: {
            label: "Emissions Profile",
            description: "Assessment of production emissions at a unit level.",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: emissions,
          },
        },
      ],
      edges: [
        {source: "landTitles", target: "go"},
        {source: "go", target: "usEpa"},
        {source: "usEpa", target: "digitalGrainPassport"},
        {source: "usEpa", target: "cibo"},
        {source: "digitalGrainPassport", target: "ngr"},
        {source: "ngr", target: "theNgr"},
        {source: "yieldValidity", target: "dataFarming"},
        {source: "digitalGrainPassport", target: "yieldValidity"},
        {source: "digitalGrainPassport", target: "emissionsProfile"},
        {source: "emissionsProfile", target: "acmeCalculator"},
        {source: "yieldValidity", target: "go"},
      ],
    },
  },
};

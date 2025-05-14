import {Meta, StoryObj} from "@storybook/react";
import {View} from "@truststack/ui";
import {TrustGraph} from "./TrustGraph";
import {dgp} from "./__mocks__/dgp";
import {ngr} from "./__mocks__/ngr";

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
          type: "DPP",
          hash: "landTitles",
          raw: {label: "Land Titles", description: "Land Titles description"},
        },
        {
          id: "go",
          type: "DFR",
          hash: "go",
          raw: {
            label: "GO",
            description: "GO description",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: `
              <div style="font-family: sans-serif;">
                <h3 style="margin-top:0;">GO</h3>
                <p>
                  This credential certifies the validity of the yield for the specified period. Please review the details below for more information.
                </p>
                <ul>
                  <li><strong>Issued by:</strong> Example Authority</li>
                  <li><strong>Valid from:</strong> 2024-01-01</li>
                  <li><strong>Expires on:</strong> 2025-01-01</li>
                  <li><strong>Status:</strong> <span style="color:green;">Active</span></li>
                </ul>
                <p style="font-size:0.9em;color:#666;">
                  For more details, contact your administrator or visit our <a href="https://example.com">website</a>.
                </p>
              </div>
            `,
          },
        },
        {
          id: "usEpa",
          type: "DFR",
          hash: "usEpa",
          raw: {
            label: "US EPA Deforestation",
            description: "US EPA Deforestation description",

            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: `
                <div style="font-family: sans-serif;">
                  <h3 style="margin-top:0;">US EPA Deforestation</h3>
                  <p>
                    This credential certifies the validity of the yield for the specified period. Please review the details below for more information.
                  </p>
                  <ul>
                    <li><strong>Issued by:</strong> Example Authority</li>
                    <li><strong>Valid from:</strong> 2024-01-01</li>
                    <li><strong>Expires on:</strong> 2025-01-01</li>
                    <li><strong>Status:</strong> <span style="color:green;">Active</span></li>
                  </ul>
                  <p style="font-size:0.9em;color:#666;">
                    For more details, contact your administrator or visit our <a href="https://example.com">website</a>.
                  </p>
                </div>
              `,
          },
        },
        {
          id: "digitalFarmRecord",
          type: "DTE",
          hash: "digitalFarmRecord",
          raw: {
            label: "Digital Farm Record",
            description: "Digital Farm Record description",
          },
        },
        {
          id: "digitalGrainPassport",
          type: "DTE",
          hash: "digitalGrainPassport",
          raw: {
            label: "Digital Grain Passport",
            description: "Digital Grain Passport description",
            html: dgp as any,
          },
        },
        {
          id: "cibo",
          type: "DPP",
          hash: "cibo",
          raw: {label: "CIBO", description: "CIBO description"},
        },
        {
          id: "acmeCalculator",
          type: "DPP",
          hash: "acmeCalculator",
          raw: {
            label: "ACME Calculator",
            description: "ACME Calculator description",
          },
        },
        {
          id: "yieldValidity",
          type: "DFR",
          hash: "yieldValidity",
          raw: {
            label: "Yield Validity",
            description: "Yield Validity description",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: `
              <div style="font-family: sans-serif;">
                <h3 style="margin-top:0;">Yield Validity</h3>
                <p>
                  This credential certifies the validity of the yield for the specified period. Please review the details below for more information.
                </p>
                <ul>
                  <li><strong>Issued by:</strong> Example Authority</li>
                  <li><strong>Valid from:</strong> 2024-01-01</li>
                  <li><strong>Expires on:</strong> 2025-01-01</li>
                  <li><strong>Status:</strong> <span style="color:green;">Active</span></li>
                </ul>
                <p style="font-size:0.9em;color:#666;">
                  For more details, contact your administrator or visit our <a href="https://example.com">website</a>.
                </p>
              </div>
            `,
          },
        },
        {
          id: "dataFarming",
          type: "DPP",
          hash: "dataFarming",
          raw: {label: "DataFarming", description: "DataFarming description"},
        },
        {
          id: "ngr",
          type: "DFR",
          hash: "ngr",
          raw: {
            label: "NGR",
            description: "NGR description",
            issuedAt: "2021-01-01",
            expiresAt: "2031-01-01",
            html: ngr as any,
          },
        },
        {
          id: "theNgr",
          type: "DPP",
          hash: "theNgr",
          raw: {label: "The NGR", description: "The NGR description"},
        },
        {
          id: "emissionsProfile",
          type: "DFR",
          hash: "emissionsProfile",
          raw: {
            label: "Emissions Profile",
            description: "Emissions Profile description",
            issuedAt: "2021-01-01",
            expiresAt: "2021-01-01",
            html: `
            <div style="font-family: sans-serif;">
              <h3 style="margin-top:0;">Emissions Profile</h3>
              <p>
                This credential certifies the validity of the yield for the specified period. Please review the details below for more information.
              </p>
              <ul>
                <li><strong>Issued by:</strong> Example Authority</li>
                <li><strong>Valid from:</strong> 2024-01-01</li>
                <li><strong>Expires on:</strong> 2025-01-01</li>
                <li><strong>Status:</strong> <span style="color:green;">Active</span></li>
              </ul>
              <p style="font-size:0.9em;color:#666;">
                For more details, contact your administrator or visit our <a href="https://example.com">website</a>.
              </p>
            </div>
          `,
          },
        },
      ],
      edges: [
        {source: "landTitles", target: "go"},
        {source: "go", target: "usEpa"},
        {source: "usEpa", target: "digitalFarmRecord"},
        {source: "digitalFarmRecord", target: "digitalGrainPassport"},
        {source: "go", target: "cibo"},
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

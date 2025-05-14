import {Meta, StoryObj} from "@storybook/react/*";
import {BarChart, Home, Sun} from "@truststack/icons-ui";
import {RailLayout} from "@truststack/render-ui";
import {ThemeProvider} from "@truststack/theme-ui";
import {NavRailItem} from "@truststack/ui";
import {Fragment} from "react/jsx-runtime";
import {Image} from "tamagui";
import {theme} from "./__mock__";
import {Simple} from "./TrustGraph.stories";
import {TrustGraphScreen} from "./TrustGraphScreen";

const LEX_SHAPE = `// Multiple Rules Example
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
  component: TrustGraphScreen,
  title: "Discovery/TrustGraphScreen",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        theme={{
          name: "Demo",
          variables: theme,
        }}
      >
        <RailLayout
          Icon={
            <Image
              br={100}
              source={{
                uri: "logo.png",
                width: 50,
                height: 50,
              }}
            />
          }
          Items={
            <Fragment>
              <NavRailItem label="Home" icon={Home} />
              <NavRailItem label="Inventory" icon={BarChart} active={true} />
              <NavRailItem label="ESG" icon={Sun} />
            </Fragment>
          }
        >
          <Story />
        </RailLayout>
      </ThemeProvider>
    ),
  ],
} as Meta<typeof TrustGraphScreen>;

type Story = StoryObj<typeof TrustGraphScreen>;

export const Default: Story = {
  args: {
    data: {
      batchNumber: "12345678.1",
      supplier: "Kate McGabe Farms",
      date: "2025-11-11",
      header: {
        title: "Consignment Summary",
        subtitle: "Processed on the 2nd of April 2025",
        size: "medium",
      },
      trustGraph: {
        ...Simple.args.data,
      },
      policyResults: [
        {
          data: {
            status: "SUCCESS",
            policyName: "US EPA Deforestation Assesment",
            policyDescription:
              "Valid deforestation certified found, issued by CIBO labs, with evidence from Land Titles of ownership",
          },
          renderLexShape: LEX_SHAPE,
        },
        {
          data: {
            status: "SUCCESS",
            policyName: "ISCC Canola Assessment",
            policyDescription:
              "Valid deforestation certified found, issued by CIBO labs, with evidence from Land Titles of ownership",
          },
          renderLexShape: LEX_SHAPE,
        },
        {
          data: {
            status: "SUCCESS",
            policyName: "Emissions Profile",
            policyDescription:
              "Valid emissions profile found, issued by AIA calculator.",
          },
          renderLexShape: LEX_SHAPE,
        },
        {
          data: {
            status: "SUCCESS",
            policyName: "NGR Registration",
            policyDescription:
              "Valid NGR registration credential found and in date.",
          },
          renderLexShape: LEX_SHAPE,
        },
      ],
    },
  },
};

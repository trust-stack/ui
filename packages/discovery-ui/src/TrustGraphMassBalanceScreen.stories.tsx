import { Meta, StoryObj } from "@storybook/react/*";
import { BarChart, Home, Sun, Weight } from "@truststack/icons-ui";
import { RailLayout } from "@truststack/render-ui";
import { ThemeProvider } from "@truststack/theme-ui";
import { NavRailItem } from "@truststack/ui";
import { Fragment } from "react/jsx-runtime";
import { Image } from "tamagui";
import { theme } from "./__mock__";
import { TrustGraphMassBalanceScreen } from "./TrustGraphMassBalanceScreen";
import { Default as SoldSustainableVolumeTable } from "./SoldSustainableVolumeTable.stories";
import { Default as PurchasedSustainableGrainTable } from "./PurchasedSustainableGrainTable.stories";

export default {
  component: TrustGraphMassBalanceScreen,
  title: "Discovery/TrustGraphMassBalanceScreen",
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
              <NavRailItem label="Inventory" icon={BarChart} />
              <NavRailItem label="ESG" icon={Sun} />
              <NavRailItem label="Mass Balance" icon={Weight} active={true} />
            </Fragment>
          }
        >
          <Story />
        </RailLayout>
      </ThemeProvider>
    ),
  ],
} as Meta<typeof TrustGraphMassBalanceScreen>;

type Story = StoryObj<typeof TrustGraphMassBalanceScreen>;

export const Default: Story = {
  args: {
    soldSustainableVolume:
      SoldSustainableVolumeTable.args.soldSustainableVolume,
    purchasedSustainableGrains:
      PurchasedSustainableGrainTable.args.purchasedSustainableGrains,
  },
};

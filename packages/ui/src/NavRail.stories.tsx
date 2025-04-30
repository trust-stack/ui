import {Meta, StoryObj} from "@storybook/react";
import {Home, List} from "@truststack/icons-ui";
import {View} from "tamagui";
import {NavFab} from "./NavFab";
import {NavRail, NavRailItem} from "./NavRail";

export default {
  component: NavRail,
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <View style={{height: "100vh"}}>
        <Story />
      </View>
    ),
  ],
} as Meta<typeof NavRail>;

type Story = StoryObj<typeof NavRail>;

export const Rail: Story = {
  args: {
    children: (
      <>
        <NavRailItem active label="Home" icon={Home} />
        <NavRailItem label="Tasks" icon={List} />
      </>
    ),
    Fab: <NavFab />,
  },
};

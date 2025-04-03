import {GetProps, XStack, styled} from "tamagui";

const Frame = styled(XStack, {
  name: "NavBar",
  justifyContent: "space-around",
  backgroundColor: "$surfaceContainer",
  height: 80,
  pb: 16,
  pt: 12,
});

export const NavBar = Frame.styleable((props, ref) => {
  return <Frame {...props} ref={ref} />;
});

export type NavBarProps = GetProps<typeof NavBar>;

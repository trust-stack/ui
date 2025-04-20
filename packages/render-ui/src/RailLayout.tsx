import {NavRail, NavRailProps} from "@truststack/ui";
import {ScrollView, XStack} from "tamagui";

export type RailLayoutProps = {
  readonly children: React.ReactNode;
} & NavRailProps;

export function RailLayout({children, ...props}: RailLayoutProps): JSX.Element {
  return (
    <XStack h="100%" w="100%" style={{height: "100vh"}}>
      <NavRail {...props} />
      <ScrollView
        flex={1}
        contentContainerStyle={{flexGrow: 1}}
        backgroundColor={"$surface"}
      >
        {children}
      </ScrollView>
    </XStack>
  );
}

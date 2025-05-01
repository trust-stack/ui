import {NavRail, NavRailProps, ScrollView, XStack} from "@truststack/ui";

export type RailLayoutProps = {
  readonly children: React.ReactNode;
} & NavRailProps;

export function RailLayout({children, ...props}: RailLayoutProps): JSX.Element {
  return (
    <XStack height="100%" width="100%" style={{height: "100vh"}}>
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

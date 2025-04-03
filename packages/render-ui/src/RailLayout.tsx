import {NavRail} from "@truststack/ui";
import {ScrollView, XStack} from "tamagui";

export type RailLayoutProps = {
  readonly children: React.ReactNode;
};

export function RailLayout({children}: RailLayoutProps): JSX.Element {
  return (
    <XStack h="100%" w="100%" style={{height: "100vh"}}>
      <NavRail />
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

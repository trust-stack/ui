import { XStack, YStack } from "tamagui";
import { Divider } from "./Divider";

export type ScreenLayoutProps = {
  readonly children: React.ReactNode;
  readonly header?: React.ReactNode;
};

export function ScreenLayout({
  header,
  children,
}: ScreenLayoutProps): JSX.Element {
  return (
    <XStack justifyContent="center" marginRight={24}>
      <YStack
        borderRadius={"$shape.corner_m"}
        overflow={"hidden"}
        backgroundColor={"$surfaceContainerLowest"}
        maxWidth={1200}
        width={"100%"}
        marginTop={24}
      >
        {header && (
          <YStack>
            {header}
            <Divider />
          </YStack>
        )}
        {children}
      </YStack>
    </XStack>
  );
}

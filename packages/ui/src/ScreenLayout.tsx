import {YStack} from "tamagui";
import {Divider} from "./Divider";

export type ScreenLayoutProps = {
  readonly children: React.ReactNode;
  readonly header?: React.ReactNode;
};

export function ScreenLayout({
  header,
  children,
}: ScreenLayoutProps): JSX.Element {
  return (
    <YStack
      borderRadius={"$shape.corner_m"}
      overflow={"hidden"}
      backgroundColor={"$surfaceContainerLowest"}
    >
      {header && (
        <YStack>
          {header} <Divider />
        </YStack>
      )}
      {children}
    </YStack>
  );
}

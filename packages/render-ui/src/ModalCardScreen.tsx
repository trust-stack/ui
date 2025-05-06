import {ChevronLeft} from "@truststack/icons-ui";
import {IconButton, XStack, YStack, YStackProps} from "@truststack/ui";
import React from "react";

export type ModalCardScreenProps = {
  readonly onBack?: () => void;
  readonly children: React.ReactNode;
} & YStackProps;

export function ModalCardScreen({
  onBack,
  children,
  ...props
}: ModalCardScreenProps) {
  return (
    <YStack backgroundColor={"black"} flexGrow={1}>
      <XStack padding={"$spacing.compact_margin"}>
        {onBack && (
          <IconButton variant="standard" onPress={onBack}>
            <IconButton.Icon Icon={ChevronLeft} />
          </IconButton>
        )}
      </XStack>

      <YStack
        marginTop={40}
        flexGrow={1}
        borderTopLeftRadius={"$shape.corner_xl"}
        borderTopRightRadius={"$shape.corner_xl"}
        overflow="hidden"
        backgroundColor={"$surface"}
        shadowColor={"$shadow_opacity"}
        shadowRadius={"$shadow.5"}
        {...props}
      >
        {children}
      </YStack>
    </YStack>
  );
}

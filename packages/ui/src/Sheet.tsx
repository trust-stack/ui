import {ComponentProps, forwardRef} from "react";
import {
  Stack,
  Sheet as TSheet,
  TamaguiElement,
  createSheet,
  styled,
} from "tamagui";

const Handle = styled(TSheet.Handle, {
  backgroundColor: "$surfaceVariant",
  width: 100,
  borderRadius: "$shape.corner_full",
  height: 4,
  pos: "absolute",
  als: "center",
  mt: "$3",
  zi: 100_000,
});

const FOverlay = forwardRef<
  TamaguiElement,
  ComponentProps<typeof TSheet.Overlay>
>((props, ref) => <TSheet.Overlay {...props} />);

const Overlay = styled(FOverlay, {
  bg: "black",
  h: "100%",
  o: 0.3,
});

const Frame = styled(TSheet.Frame, {
  bg: "$surface",
  btrr: "$shape.corner_full",
  btlr: "$shape.corner_full",
  paddingTop: 12,
  variants: {
    variant: {
      outlined: {
        borderColor: "$outlineVariant",
        backgroundColor: "$surfaceContainerLowest",
        borderWidth: "$border.outline",
      },
    },
  } as const,
});

export const SheetContent = styled(Stack, {
  paddingTop: "$spacing.margin_compact",
});

export const Sheet = createSheet({
  Frame,
  Handle,
  Overlay,
});

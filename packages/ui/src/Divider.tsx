import {styled, View} from "tamagui";

// https://m3.material.io/components/divider/specs
export const Divider = styled(View, {
  name: "Divider",
  borderBottomWidth: "$border.outline",
  btc: "transparent",
  brc: "transparent",
  blc: "transparent",
  borderBottomColor: "$outlineVariant",
  variants: {
    inset: {
      true: {
        marginLeft: 16,
        marginRight: 16,
      },
    },
    vertical: {
      true: {
        y: 0,
        x: -0.5,
        // height: isWeb ? 'initial' : 'auto',
        // maxHeight auto WILL BE passed to style attribute, but for some reason not used?
        // almost seems like a react or browser bug, but for now `initial` works
        // also, it doesn't happen for `height`, but for consistency using the same values
        // maxHeight: isWeb ? 'initial' : 'auto',
        width: 0,
        maxWidth: 0,
        borderBottomColor: "transparent",
        borderBottomWidth: 0,
        borderRightWidth: 1,
        borderRightColor: "$outlineVariant",
      },
      false: {},
    },
  } as const,
});

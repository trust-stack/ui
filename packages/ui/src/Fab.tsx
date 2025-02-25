import {ComponentProps} from "react";
import {Pressable, PressableProps} from "react-native";
import {
  GetProps,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";

const FabContext = createStyledContext({
  size: "",
  variant: "",
});

const FabFrame = styled(View, {
  name: "Fab",
  context: FabContext,
  disabledStyle: {
    o: 0.4,
    pe: "none",
  },
  cursor: "pointer",
  br: 18,
  dsp: "flex",
  ai: "center",
  jc: "center",
  shadowColor: "$shadow_opacity",
  shadowRadius: "$shadow.3",
  variants: {
    variant: {
      primary: {
        bg: "$primaryContainer",
      },
      success: {
        bg: "$successContainer",
      },
      secondary: {
        bg: "$secondaryContainer",
      },

      tertiary: {
        bg: "$tertiaryContainer",
      },
      surface: {
        bg: "$surfaceContainer",
      },
    },
    size: {
      small: {
        width: 40,
        height: 40,
      },
      medium: {
        width: 56,
        height: 56,
      },
      large: {
        width: 96,
        height: 96,
      },
    },
  } as const,
  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});

type Props = GetProps<typeof FabFrame> &
  Partial<Pick<PressableProps, "onPress">>;

const FabHOC = FabFrame.styleable<Props>(({onPress, ...props}, ref) => {
  return (
    <Pressable
      onPress={props?.disabled ? () => {} : onPress}
      style={{
        pointerEvents: props?.disabled ? "none" : "auto",
      }}
    >
      <FabFrame {...props} ref={ref} disabled={props.disabled} />
    </Pressable>
  );
});

const FabIcon = styled(Icon, {
  context: FabContext,
  name: "FabIcon",
  col: "$onSurface" as any,
  variants: {
    variant: {
      primary: {
        col: "$onPrimaryContainer" as any,
      },
      secondary: {
        col: "$onSecondaryContainer" as any,
      },
      tertiary: {
        col: "$onTertiaryContainer" as any,
      },
      success: {
        col: "$onSuccessContainer" as any,
      },
      "action-red": {
        col: "$onActionRed" as any,
      },
    },
  },
});

export const Fab = withStaticProperties(FabFrame, {
  Icon: FabIcon,
  Props: FabContext.Provider,
});

export type FabProps = ComponentProps<typeof Fab>;

import {ComponentProps} from "react";
import {
  Spinner,
  XStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";
import {Label} from "./typography";

const ButtonContext = createStyledContext({
  variant: undefined,
  loading: false,
  density: "0",
});

const ButtonFrame = styled(XStack, {
  paddingLeft: 16,
  paddingRight: 16,
  name: "Button",
  context: ButtonContext,
  alignItems: "center",
  alignSelf: "flex-start",
  flexDirection: "row",
  justifyContent: "center",
  br: "$shape.corner_full",
  maxHeight: 40,
  height: 40,

  gap: 8,
  cursor: "pointer",
  hoverStyle: {
    cur: "pointer",
    bc: "$primaryContainer",
  },
  pressStyle: {
    // bc: '$backgroundPress',
  },
  disabledStyle: {
    o: 0.4,
    pe: "none",
    cursor: "default",
  },

  variants: {
    variant: {
      outlined: {
        brc: "$outline",
        btc: "$outline",
        bbc: "$outline",
        blc: "$outline",
        bw: "$border.outline",
        background: "transparent",
        hoverStyle: {
          cur: "pointer",
          bc: "$primaryContainer",
        },
      },
      filled: {
        backgroundColor: "$primary",
      },
      "filled-tonal": {
        backgroundColor: "$secondaryContainer",
      },
      "filled-error": {
        backgroundColor: "$errorContainer",
        hoverStyle: {
          backgroundColor: "$error" as any,
        },
      },
      tonal: {
        bg: "$secondaryContainer",
      },
      "tonal-success": {
        bg: "$successContainer",
        hoverStyle: {
          backgroundColor: "$success",
        },
      },
      "tonal-warning": {
        backgroundColor: "$warningContainer",
        hoverStyle: {
          backgroundColor: "$warning",
        },
      },
      "tonal-info": {
        backgroundColor: "$infoContainer",
        hoverStyle: {
          backgroundColor: "$info",
        },
      },
      elevated: {
        bg: "$surfaceContainerLow",
        shadowColor: "$shadow_opacity",
        shadowRadius: "$shadow.1",
      },
      text: {
        bc: "transparent",
        hoverStyle: {
          bc: "$primaryContainer",
        },
      },
      warning: {
        backgroundColor: "$warning",
        hoverStyle: {
          backgroundColor: "$warningContainer",
        },
      },
    },
    loading: {
      true: {},
      false: {},
    },
    density: {
      "0": {},
      "-1": {
        height: 36,
      },
      "-2": {
        height: 32,
      },
      "-3": {
        height: 28,
      },
    },
    shape: {
      none: {
        borderRadius: 0,
      },
      xs: {
        borderRadius: "$shape.corner_xs",
      },
      sm: {
        borderRadius: "$shape.corner_sm",
      },
      m: {
        borderRadius: "$shape.corner_m",
      },
      l: {
        borderRadius: "$shape.corner_l",
      },
      xl: {
        borderRadius: "$shape.corner_xl",
      },
      full: {
        borderRadius: "$shape.corner_full",
      },
    },
  } as const,
  defaultVariants: {
    variant: "filled",
    density: "0",
  },
});

const ButtonText = styled(Label, {
  name: "ButtonText",
  size: "large",
  context: ButtonContext,
  variants: {
    size: {
      "...fontSize": (name, {font}) => ({
        fos: font?.size[name],
      }),
    },
    variant: {
      filled: {
        col: "$onPrimary",
      },
      outlined: {
        col: "$primary",
      },
      "filled-tonal": {
        col: "$onSecondaryContainer",
      },
      "filled-error": {
        col: "$onErrorContainer",
      },
      tonal: {
        col: "$onSecondaryContainer",
      },
      "tonal-success": {
        col: "$onSuccessContainer",
        hoverStyle: {
          col: "$onSuccess",
        },
      },
      "tonal-warning": {
        col: "$onWarningContainer",
        hoverStyle: {
          col: "$onWarning",
        },
      },
      "tonal-info": {
        col: "$onInfoContainer" as any,
        "$group-button-hover": {
          col: "$onInfo",
        },
      },
      elevated: {
        col: "$primary",
      },
      warning: {
        col: "$onWarning",
        hoverStyle: {
          col: "$onWarningContainer",
        },
      },
    },
  } as const,
});

const ButtonSpinner = styled(Spinner, {
  name: "ButtonSpinner",
  context: ButtonContext,
  variants: {
    loading: {
      false: {
        display: "none",
      },
    },
    variant: {
      filled: {
        col: "$onPrimary" as any,
      },
      "filled-error": {
        col: "$onError" as any,
      },
      "tonal-warning": {
        col: "$onWarningContainer" as any,
      },
      "tonal-info": {
        col: "$onInfoContainer" as any,
      },
      warning: {
        col: "$onWarning" as any,
      },
    },
  } as const,
});

const ButtonIcon = styled(Icon, {
  context: ButtonContext,
  name: "ButtonIcon",
  size: 18,
  variants: {
    variant: {
      filled: {
        col: "$onPrimary" as any,
      },
      outlined: {
        col: "$primary" as any,
      },
      "filled-tonal": {
        col: "$onSecondaryContainer" as any,
      },
      "filled-error": {
        col: "$onErrorContainer" as any,
      },
      tonal: {
        col: "$onSecondaryContainer" as any,
      },
      "tonal-success": {
        col: "$onSuccessContainer" as any,
      },
      "tonal-warning": {
        col: "$onWarningContainer" as any,
      },
      "tonal-info": {
        col: "$onInfoContainer" as any,
        "$group-button-hover": {
          col: "$onInfo" as any,
        },
      },
      elevated: {
        col: "$primary" as any,
      },
      warning: {
        col: "$onWarning" as any,
        hoverStyle: {
          col: "$onWarningContainer" as any,
        },
      },
    },
  } as const,
});

export const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Icon: ButtonIcon,
  Props: ButtonContext.Provider,
  Spinner: ButtonSpinner,
});

export type ButtonProps = ComponentProps<typeof Button>;

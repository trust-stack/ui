import {AlertCircle, AlertTriangle, Check, XSquare} from "@truststack/icons-ui";
import {ComponentProps} from "react";
import {
  View,
  XStack,
  YStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";
import {Body, Title} from "./typography";

type Severity = "info" | "success" | "warning" | "error";

const AlertContext = createStyledContext<{
  severity: Severity;
  hidden?: boolean;
}>({
  severity: undefined,
  hidden: false,
});

const AlertFrame = styled(XStack, {
  name: "Alert",
  context: AlertContext,
  padding: 12,
  flexDirection: "row",
  flexShrink: 1,
  gap: 12,
  variants: {
    // Border width is 0 by default,
    // set attributed `outlined` as true AFTER the severity to apply border
    // e.g. <Alert severity="info" outlined />
    severity: {
      info: {
        bg: "$infoContainer",
        borderColor: "$info",
        borderWidth: 0,
      },
      success: {
        bg: "$successContainer",
        borderColor: "$success",
        borderWidth: 0,
      },
      error: {
        bg: "$errorContainer",
        borderColor: "$error",
        borderWidth: 0,
      },
      warning: {
        bg: "$warningContainer",
        borderColor: "$warning",
        borderWidth: 0,
      },
    },
    outlined: {
      true: {
        borderWidth: "$border.outline",
      },
    },
    hidden: {
      true: {
        display: "none",
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
    },
  } as const,
  defaultVariants: {
    severity: "info",
    shape: "xs",
  },
});

const AlertIcon = styled(Icon, {
  context: AlertContext,
  variants: {
    severity: {
      success: {
        Icon: Check,
        col: "$onSuccessContainer" as any,
      },
      warning: {
        Icon: AlertTriangle,
        col: "$onWarningContainer" as any,
      },
      error: {
        Icon: XSquare,
        col: "$onErrorContainer" as any,
      },
      info: {
        Icon: AlertCircle,
        col: "$onInfoContainer" as any,
      },
    },
  },
});

const variants = {
  severity: {
    info: {
      col: "$onInfoContainer",
    },
    success: {
      col: "$onSuccessContainer",
    },
    error: {
      col: "$onErrorContainer",
    },
    warning: {
      col: "$onWarningContainer",
    },
  },
} as const;

const AlertHeading = styled(Title, {
  name: "AlertHeading",
  context: AlertContext,
  variants: {
    ...variants,
  },
});

const AlertText = styled(Body, {
  name: "AlertText",
  context: AlertContext,
  variants: {
    ...variants,
  } as const,
});

const AlertLiDot = styled(View, {
  name: "AlertLiDot",
  context: AlertContext,
  width: 6,
  height: 6,
  borderRadius: 100,
  variants: {
    severity: {
      info: {
        backgroundColor: "$onInfoContainer",
      },
      success: {
        backgroundColor: "$onSuccessContainer",
      },
      error: {
        backgroundColor: "$onErrorContainer",
      },
      warning: {
        backgroundColor: "$onWarningContainer",
      },
    },
  },
});

const AlertLi = AlertText.styleable((props, ref) => {
  return (
    <XStack gap={12}>
      <View marginTop={8}>
        <AlertLiDot />
      </View>
      <AlertText ref={ref} {...props} />
    </XStack>
  );
});

const Container = styled(YStack, {
  name: "AlertContainer",
  minWidth: 0,
  flex: 1,
});

const Actions = styled(XStack, {
  name: "AlertActions",
  justifyContent: "flex-end",
  marginTop: 12,
});

export const Alert = withStaticProperties(AlertFrame, {
  Props: AlertContext.Provider,
  Heading: AlertHeading,
  Container,
  Text: AlertText,
  Icon: AlertIcon,
  Li: AlertLi,
  Actions,
});

export type AlertProps = ComponentProps<typeof Alert>;

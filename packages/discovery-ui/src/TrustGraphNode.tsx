import { View } from "@tamagui/web";
import { CalendarX, Clock, Package, Timer } from "@truststack/icons-ui";
import {
  TrustGraphNodeType,
  TrustGraphNode as TTrustGraphNode,
} from "@truststack/schema";
import {
  createStyledContext,
  Dialog,
  Icon,
  Label,
  styled,
  ThemeableStack,
  Title as TTitle,
  withStaticProperties,
  XStack,
  YStack,
} from "@truststack/ui";
import { Fragment, useState } from "react";
import { Handle, Position } from "react-flow-renderer";
import { RenderCredential } from "@truststack/credential-ui";

export const NODE_WIDTH = 340;
export const NODE_HEIGHT = 220;

const TrustGraphNodeContext = createStyledContext<{
  type: TrustGraphNodeType | undefined;
  variant:
    | "assist"
    | "filter"
    | "input"
    | "suggestion"
    | "success-tonal"
    | "warning-tonal"
    | "error-tonal";
}>({
  type: undefined,
  variant: "assist",
});

const Frame = styled(YStack, {
  name: "NodeCircle",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  context: TrustGraphNodeContext,
  height: NODE_HEIGHT,
  width: NODE_WIDTH,
  padding: "$spacing.card_body_2",
  borderRadius: "$shape.corner_sm",
  borderColor: "$outline",
  borderWidth: 3,
  animateOnly: ["transform"],
  animation: "slow",
  variants: {
    nonConformant: {
      true: {
        backgroundColor: "red",
      },
    },
    conformant: {
      true: {
        backgroundColor: "$success",
      },
    },
    focused: {
      true: {
        scale: 1.1,
      },
      false: {
        scale: 0.9,
      },
    },
    type: {
      DCC: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
      DTE: {
        backgroundColor: "$successContainer",
        borderColor: "$success",
      },
      DPP: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
    },
    root: {
      true: {
        backgroundColor: "$primary",
      },
    },
    variant: {
      rectangle: {
        borderRadius: "$shape.corner_full",
      },
    },
  } as const,
});

const Title = styled(TTitle, {
  context: TrustGraphNodeContext,
  size: "large",
  variants: {
    nonConformant: {
      true: {
        col: "white",
      },
    },
    conformant: {
      true: {
        col: "$onSuccess",
      },
    },
    type: {
      DCC: {
        col: "$onInfoContainer",
      },
      DTE: {
        col: "$onInfoContainer",
      },
      DPP: {
        col: "$onInfoContainer",
      },
    },
    root: {
      true: {
        size: "large",
        col: "$onPrimary",
      },
    },
  },
} as const);

const SupportingText = styled(TTitle, {
  context: TrustGraphNodeContext,
  variants: {
    nonConformant: {
      true: {
        col: "white",
      },
    },
    conformant: {
      true: {
        col: "$onSuccess",
      },
    },
    type: {
      DCC: {
        col: "$onInfoContainer",
      },
      DTE: {
        col: "$onInfoContainer",
      },
      DPP: {
        col: "$onInfoContainer",
      },
    },
    root: {
      true: {
        size: "large",
        col: "$onPrimary",
      },
    },
  },
});

const Chip = styled(ThemeableStack, {
  name: "Chip",
  context: TrustGraphNodeContext,
  dsp: "flex",
  ai: "center",
  fd: "row",
  height: 32,
  maxHeight: 32,
  paddingLeft: 16,
  paddingRight: 16,
  flexDirection: "row",
  // @ts-ignore
  pressable: true,
  minWidth: 48,
  gap: 8,
  justifyContent: "space-between",
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
  },
  variants: {
    variant: {
      assist: {
        brc: "$outline",
        btc: "$outline",
        bbc: "$outline",
        blc: "$outline",
        borderBlockColor: "$outline",
        borderBlockStartColor: "$outline",
        bw: 1,
      },
      filter: {
        bg: "$secondaryContainer",
      },
      input: {
        brc: "$outline",
        btc: "$outline",
        bbc: "$outline",
        blc: "$outline",
        borderBlockColor: "$outline",
        borderBlockStartColor: "$outline",
        bw: 1,
      },
      suggestion: {
        brc: "$outline",
        btc: "$outline",
        bbc: "$outline",
        blc: "$outline",
        borderBlockColor: "$outline",
        borderBlockStartColor: "$outline",
        bw: 1,
      },
      "success-tonal": {
        brc: "$success",
        btc: "$success",
        bbc: "$success",
        blc: "$success",
        bg: "$successContainer",
      },
      "warning-tonal": {
        brc: "$warning",
        btc: "$warning",
        bbc: "$warning",
        blc: "$warning",
        bg: "$warningContainer",
      },
      "error-tonal": {
        brc: "$error",
        btc: "$error",
        bbc: "$error",
        blc: "$error",
        bg: "$errorContainer",
      },
    },
    pressable: {
      false: {
        pointerEvents: "none",
        cursor: "none",
        hoverStyle: {},
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
    density: {
      "3": {
        height: 48,
        maxHeight: 48,
        paddingLeft: 16,
        paddingRight: 16,
      },
      "2": {
        height: 40,
        maxHeight: 40,
        paddingLeft: 16,
        paddingRight: 16,
      },
      "1": {
        height: 36,
        maxHeight: 36,
        paddingLeft: 16,
        paddingRight: 16,
      },
      "0": {
        height: 32,
        maxHeight: 32,
        paddingLeft: 16,
        paddingRight: 16,
      },
      "-1": {
        height: 28,
        maxHeight: 28,
        paddingLeft: 12,
        paddingRight: 12,
      },
      "-2": {
        height: 24,
        maxHeight: 24,
        paddingLeft: 8,
        paddingRight: 8,
      },
      "-3": {
        height: 20,
        maxHeight: 20,
        paddingLeft: 4,
        paddingRight: 4,
      },
    },
    color: {
      primary: {
        backgroundColor: "$primaryContainer",
      },
      secondary: {
        backgroundColor: "$secondaryContainer",
      },
      tertiary: {
        backgroundColor: "$tertiaryContainer",
      },
    },
  } as const,
  defaultVariants: {
    variant: "assist",
    shape: "sm",
    density: "0",
  },
});

const ChipText = styled(Label, {
  name: "ChipText",
  context: TrustGraphNodeContext,
  size: "large",
  hoverStyle: {
    col: "$onSurface",
  },
  cursor: "pointer",
  variants: {
    color: {
      primary: {
        col: "$onPrimaryContainer",
      },
      secondary: {
        col: "$onSecondaryContainer",
      },
      tertiary: {
        col: "$onTertiaryContainer",
      },
    },
    pressable: {
      false: {
        cursor: "none",
      },
    },
    variant: {
      assist: {},
      filter: {
        col: "$onSecondaryContainer",
      },
      input: {},
      suggestion: {},
      "success-tonal": {
        col: "$onSuccessContainer",
      },
      "warning-tonal": {
        color: "$onWarningContainer",
      },
      "error-tonal": {
        col: "$onErrorContainer",
      },
    },
  } as const,
});

const ChipIcon = styled(Icon, {
  context: TrustGraphNodeContext,
  name: "ButtonIcon",
  width: 18,
  height: 18,

  variants: {
    variant: {
      assist: {},
      filter: {
        col: "$onSecondaryContainer" as any,
      },
      input: {},
      suggestion: {},
      "success-tonal": {
        col: "$onSuccessContainer" as any,
      },
      "warning-tonal": {
        col: "$onWarningContainer" as any,
      },
      "error-tonal": {
        col: "$onErrorContainer" as any,
      },
    },
    color: {
      primary: {
        col: "$onPrimaryContainer" as any,
      },
      secondary: {
        col: "$onSecondaryContainer" as any,
      },
      tertiary: {
        col: "$onTertiaryContainer" as any,
      },
    },
  } as const,
});

const Node = withStaticProperties(Frame, {
  Props: TrustGraphNodeContext.Provider,
  Title,
  SupportingText,
  Chip,
  ChipText,
  ChipIcon,
});

export type TrustGraphNodeProps = {
  readonly data: TTrustGraphNode;
};

export function TrustGraphNode({ data }: TrustGraphNodeProps): JSX.Element {
  const [open, setOpen] = useState(false);
  // types here aren't working
  const Content = (
    <Fragment>
      <Handle type="target" position={Position.Right} />
      <YStack
        jc="space-between"
        flex={1}
        onPress={() => {
          data?.type === "DFR" && setOpen(true);
        }}
      >
        <YStack>
          <Node.Title>{data?.raw.label}</Node.Title>
          <Node.SupportingText adjustsFontSizeToFit marginBottom={8}>
            {data?.raw.description}
          </Node.SupportingText>
        </YStack>

        {data?.type === "DFR" && (
          <XStack gap={"$spacing.compact_margin"} marginTop="auto">
            <Node.Chip variant="success-tonal">
              <Node.ChipIcon Icon={Clock} />
              <Node.ChipText>{data?.raw.issuedAt}</Node.ChipText>
            </Node.Chip>
            <Node.Chip variant="success-tonal">
              <Node.ChipIcon Icon={CalendarX} />
              <Node.ChipText>{data?.raw.expiresAt}</Node.ChipText>
            </Node.Chip>
          </XStack>
        )}
      </YStack>
      <Handle type="source" position={Position.Left} />
    </Fragment>
  );

  return (
    <Fragment>
      <Node type={data?.type as any}>{Content as any}</Node>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <Dialog.Headline>Credential Details</Dialog.Headline>
              </Dialog.Title>
            </Dialog.Header>

            <View>
              <RenderCredential render={data?.raw.html as any} />
            </View>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </Fragment>
  );
}

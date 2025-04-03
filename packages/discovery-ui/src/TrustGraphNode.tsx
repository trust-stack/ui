import {
  TrustGraphNodeType,
  TrustGraphNode as TTrustGraphNode,
} from "@truststack/schema";
import {
  createStyledContext,
  Title as TTitle,
  withStaticProperties,
  YStack,
} from "@truststack/ui";
import {Handle, Position} from "react-flow-renderer";
import {styled} from "tamagui";
import {renderTrustGraphNodeType} from "./render";

export const NODE_WIDTH = 340;
export const NODE_HEIGHT = 220;

const TrustGraphNodeContext = createStyledContext<{
  type: TrustGraphNodeType | undefined;
}>({
  type: undefined,
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
      [TrustGraphNodeType.DCC]: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
      [TrustGraphNodeType.DTE]: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
      [TrustGraphNodeType.DPP]: {
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
      [TrustGraphNodeType.DCC]: {
        col: "$onInfoContainer",
      },
      [TrustGraphNodeType.DTE]: {
        col: "$onInfoContainer",
      },
      [TrustGraphNodeType.DPP]: {
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
      [TrustGraphNodeType.DCC]: {
        col: "$onInfoContainer",
      },
      [TrustGraphNodeType.DTE]: {
        col: "$onInfoContainer",
      },
      [TrustGraphNodeType.DPP]: {
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

const Node = withStaticProperties(Frame, {
  Props: TrustGraphNodeContext.Provider,
  Title,
  SupportingText,
});

export type TrustGraphNodeProps = {
  readonly data: TTrustGraphNode;
};

export function TrustGraphNode({data}: TrustGraphNodeProps): JSX.Element {
  return (
    <Node type={data?.type as any}>
      <Handle type="source" position={Position.Left} />
      <YStack>
        <Node.Title>{renderTrustGraphNodeType(data?.type)}</Node.Title>

        <Node.SupportingText
          adjustsFontSizeToFit
          marginBottom={8}
        ></Node.SupportingText>
      </YStack>
      <Handle type="source" position={Position.Right} />
    </Node>
  );
}

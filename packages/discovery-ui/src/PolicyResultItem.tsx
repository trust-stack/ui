import { CheckCircle, Clock1, XCircle } from "@truststack/icons-ui";
import { PolicyResult as TPolicyResult } from "@truststack/schema";
import {
  Body,
  createStyledContext,
  Icon,
  styled,
  Title,
  withStaticProperties,
  XStack,
  YStack,
} from "@truststack/ui";
import { useContext } from "react";

export type PolicyResultItemProps = {
  readonly data: Pick<
    TPolicyResult,
    "status" | "policyName" | "policyDescription"
  >;
  readonly onPress?: () => void;
};

export function PolicyResultItem({
  data,
  onPress,
}: PolicyResultItemProps): JSX.Element {
  return (
    <PolicyResult status={data.status} onPress={onPress}>
      <YStack>
        <PolicyResult.Label>{data?.policyName}</PolicyResult.Label>
        <PolicyResult.Description>
          {data?.policyDescription}
        </PolicyResult.Description>
      </YStack>

      <PolicyResult.StatusIcon />
    </PolicyResult>
  );
}

const PolicyResultContext = createStyledContext({
  status: "PENDING",
});

const Frame = styled(XStack, {
  name: "PolicyResult",
  context: PolicyResultContext,
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "$shape.corner_m",
  overflow: "hidden",
  borderWidth: 1,
  padding: "$spacing.card_body_1",
  variants: {
    status: {
      PENDING: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
      SUCCESS: {
        backgroundColor: "$successContainer",
        borderColor: "$success",
      },
      FAILURE: {
        backgroundColor: "$errorContainer",
        borderColor: "$error",
      },
    },
  } as const,
  defaultVariants: {
    status: "PENDING",
  },
});

const Label = styled(Title, {
  name: "PolicyResultLabel",
  context: PolicyResultContext,
  variants: {
    status: {
      PENDING: {
        color: "$onInfoContainer",
      },
      SUCCESS: {
        color: "$onSuccessContainer",
      },
      FAILURE: {
        color: "$onErrorContainer",
      },
    },
  } as const,
  defaultVariants: {
    status: "PENDING",
  },
});

const Description = styled(Body, {
  name: "PolicyResultDescription",
  context: PolicyResultContext,
  variants: {
    status: {
      PENDING: {
        color: "$onInfoContainer",
      },
      SUCCESS: {
        color: "$onSuccessContainer",
      },
      FAILURE: {
        color: "$onErrorContainer",
      },
    },
  } as const,
  defaultVariants: {
    status: "PENDING",
  },
});

const StatusIcon = (props = {}) => {
  const { status } = useContext(PolicyResultContext.context);

  if (status === "PENDING") {
    return <Icon {...props} Icon={Clock1} color="$info" />;
  }

  if (status === "SUCCESS") {
    return <Icon {...props} Icon={CheckCircle} color="$success" />;
  }

  return <Icon {...props} Icon={XCircle} color="$error" />;
};

export const PolicyResult = withStaticProperties(Frame, {
  Props: PolicyResultContext.Provider,
  Label: Label,
  Description: Description,
  StatusIcon,
});

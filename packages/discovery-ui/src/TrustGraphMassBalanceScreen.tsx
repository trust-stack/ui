import { Breadcrumbs } from "@truststack/nav-ui";
import {
  Body,
  createStyledContext,
  Divider,
  Headline,
  ScreenLayout,
  styled,
  Title,
  TopAppBar,
  withStaticProperties,
  XStack,
  YStack,
} from "@truststack/ui";
import {
  SoldSustainableVolume,
  SoldSustainableVolumeTable,
} from "./SoldSustainableVolumeTable";
import {
  PurchasedSustainableGrain,
  PurchasedSustainableGrainTable,
} from "./PurchasedSustainableGrainTable";

export type TrustGraphMassBalanceScreenProps = {
  readonly soldSustainableVolume: SoldSustainableVolume[];
  readonly purchasedSustainableGrains: PurchasedSustainableGrain[];
};

export function TrustGraphMassBalanceScreen({
  soldSustainableVolume,
  purchasedSustainableGrains,
}: TrustGraphMassBalanceScreenProps) {
  return (
    <ScreenLayout
      header={
        <TopAppBar size="medium" backgroundColor={"transparent"}>
          <TopAppBar.TopRail>
            <TopAppBar.LeadingItemsContainer>
              <Breadcrumbs
                items={[
                  {
                    label: "Home",
                    href: "/",
                  },
                  {
                    label: "Mass Balance",
                    href: "/",
                  },
                ]}
              />
            </TopAppBar.LeadingItemsContainer>
          </TopAppBar.TopRail>

          <TopAppBar.BottomRail>
            <TopAppBar.MediumHeadline>
              ISCC Mass Balance
            </TopAppBar.MediumHeadline>
          </TopAppBar.BottomRail>
        </TopAppBar>
      }
    >
      <XStack gap={12} padding={"$spacing.exp_margin"}>
        <SummaryCard variant="info" width={320}>
          <XStack alignItems="flex-end">
            <SummaryCard.Label>23434</SummaryCard.Label>
            <SummaryCard.UnitLabel> t</SummaryCard.UnitLabel>
          </XStack>
          <SummaryCard.Divider />
          <SummaryCard.SubLabel>Received</SummaryCard.SubLabel>
        </SummaryCard>

        <SummaryCard variant="success" width={320}>
          <XStack alignItems="flex-end">
            <SummaryCard.Label>12342</SummaryCard.Label>
            <SummaryCard.UnitLabel> t</SummaryCard.UnitLabel>
          </XStack>
          <SummaryCard.Divider />
          <SummaryCard.SubLabel>Sold</SummaryCard.SubLabel>
        </SummaryCard>
      </XStack>

      <SoldSustainableVolumeTable
        soldSustainableVolume={soldSustainableVolume}
      />

      <PurchasedSustainableGrainTable
        purchasedSustainableGrains={purchasedSustainableGrains}
      />
    </ScreenLayout>
  );
}

const SummaryCardContext = createStyledContext({
  variant: "info",
});

const Frame = styled(YStack, {
  name: "SummaryCardFrame",
  context: SummaryCardContext,
  gap: 8,
  padding: "$spacing.card_body",
  borderRadius: "$shape.corner_m",
  borderWidth: 1,
  variants: {
    variant: {
      info: {
        backgroundColor: "$infoContainer",
        borderColor: "$info",
      },
      success: {
        backgroundColor: "$successContainer",
        borderColor: "$success",
      },
    },
  } as const,
});

const FrameLabel = styled(Headline, {
  name: "SummaryCardLabel",
  context: SummaryCardContext,
  size: "large",
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameSubLabel = styled(Headline, {
  name: "SummaryCardSubLabel",
  context: SummaryCardContext,
  size: "small",
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameUnitLabel = styled(Title, {
  name: "SummaryCardUnitLabel",
  context: SummaryCardContext,
  size: "large",
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameDivider = styled(Divider, {
  name: "SummaryCardDivider",
  context: SummaryCardContext,
  variants: {
    variant: {
      info: {
        borderColor: "$onInfoContainer",
      },
      success: {
        borderColor: "$onSuccessContainer",
      },
    },
  } as const,
});

const FrameDescription = styled(Body, {
  name: "SummaryCardDescription",
  context: SummaryCardContext,
  variants: {
    variant: {
      info: {
        color: "$onInfoContainer",
      },
      success: {
        color: "$onSuccessContainer",
      },
    },
  },
});

const SummaryCard = withStaticProperties(Frame, {
  Props: SummaryCardContext.Provider,
  Label: FrameLabel,
  SubLabel: FrameSubLabel,
  Divider: FrameDivider,
  UnitLabel: FrameUnitLabel,
  Description: FrameDescription,
});

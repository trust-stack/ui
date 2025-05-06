import {Calendar, Check, Package, User} from "@truststack/icons-ui";
import {Breadcrumbs} from "@truststack/nav-ui";
import {TrustGraphScreen as TTrustGraphScreen} from "@truststack/schema";
import {
  Body,
  Dialog,
  Divider,
  ScreenLayout,
  TagChip,
  Title,
  TopAppBar,
  View,
  XStack,
  YStack,
} from "@truststack/ui";
import {useState} from "react";
import {LexShapeRenderer} from "./LexShapeRenderer";
import {PolicyResultItem, PolicyResultItemProps} from "./PolicyResultItem";
import {TrustGraph} from "./TrustGraph";

type TrustGraphSummery = {
  readonly batchNumber: string;
  readonly supplier: string;
  readonly date: string;
};

type Data = TrustGraphSummery &
  TTrustGraphScreen & {
    readonly policyResults: (PolicyResultItemProps & {
      renderLexShape?: string;
    })[];
  };

export type TrustGraphScreenProps = {
  readonly data: Data;
};

export function TrustGraphScreen({data}: TrustGraphScreenProps) {
  const [open, setOpen] = useState<
    | (PolicyResultItemProps & {
        renderLexShape?: string;
      })
    | null
  >(null);

  return (
    <ScreenLayout
      header={
        <TopAppBar size="medium" backgroundColor="transparent">
          <TopAppBar.TopRail>
            <TopAppBar.LeadingItemsContainer>
              <Breadcrumbs
                items={[
                  {
                    label: "Home",
                    href: "/",
                  },
                  {
                    label: "Consignments",
                    href: "/",
                  },
                  {
                    label: "12345678.12",
                    href: "",
                  },
                ]}
              />
            </TopAppBar.LeadingItemsContainer>

            <TopAppBar.TrailItemsContainer>
              <TagChip variant={"success-tonal"}>
                <TagChip.Icon Icon={Check} />
                <TagChip.Text>US EPA Compliant</TagChip.Text>
              </TagChip>
            </TopAppBar.TrailItemsContainer>
          </TopAppBar.TopRail>
          <TopAppBar.BottomRail>
            <TopAppBar.MediumHeadline>
              Consignment Summary
            </TopAppBar.MediumHeadline>
          </TopAppBar.BottomRail>
        </TopAppBar>
      }
    >
      <XStack gap={8} padding={"$spacing.exp_margin"}>
        <TagChip>
          <TagChip.Icon Icon={Package} />
          <TagChip.Text>{data?.batchNumber}</TagChip.Text>
        </TagChip>

        <TagChip>
          <TagChip.Icon Icon={User} />
          <TagChip.Text>{data?.supplier}</TagChip.Text>
        </TagChip>

        <TagChip>
          <TagChip.Icon Icon={Calendar} />
          <TagChip.Text>{data?.date}</TagChip.Text>
        </TagChip>
      </XStack>
      <YStack padding={"$spacing.exp_margin"}>
        <Title size="large">Trust Graph</Title>
        <Body>
          Below is a visualisation of the Trust Graph discovered, and associated
          information from the{" "}
          <Body fontWeight="bold">Digital Grain Passport</Body> presented with
          this Consignment.
        </Body>
      </YStack>
      <TrustGraph data={data?.trustGraph} width={"100%"} height={620} />

      <Divider />

      <YStack padding={"$spacing.exp_margin"} gap={20}>
        <View>
          <Title size="large">Policies and Constraints</Title>
          <Body>
            Policies and constraints that are applied to the Trust Graph.
          </Body>
        </View>

        <YStack gap={12}>
          {data?.policyResults?.map((result, index) => (
            <PolicyResultItem
              key={`policy-result-${index}`}
              data={result.data}
              onPress={() => {
                setOpen(result);
              }}
            />
          ))}
        </YStack>
      </YStack>

      <Dialog open={!!open} onOpenChange={() => setOpen(null)}>
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <Dialog.Headline>{open?.data.policyName}</Dialog.Headline>
              </Dialog.Title>
              <Dialog.SupportingText>
                {open?.data.policyDescription}
              </Dialog.SupportingText>
            </Dialog.Header>

            <View height={400}>
              <LexShapeRenderer value={open?.renderLexShape} />
            </View>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </ScreenLayout>
  );
}

import {
  CheckCircle,
  Clock,
  Earth,
  IdCard,
  TreeDeciduous,
} from "@truststack/icons-ui";
import {ModalCardScreen} from "@truststack/render-ui";
import {
  Body,
  Divider,
  Headline,
  Icon,
  ListItem,
  QrCode,
  XStack,
  YStack,
  YStackProps,
} from "@truststack/ui";

export type PassportPresentScreenProps = {
  readonly onBack?: () => void;
  readonly value: string;
  readonly title?: string;
} & YStackProps;

export function PassportPresentScreen({
  onBack,
  value,
  title,
  ...props
}: PassportPresentScreenProps) {
  return (
    <ModalCardScreen onBack={onBack}>
      <YStack>
        <YStack marginHorizontal={12} marginTop={20}>
          <Headline>{title || "Digital Grain Passport"}</Headline>
        </YStack>

        <YStack
          justifyContent="center"
          gap={12}
          padding={"$spacing.compact_margin"}
          alignItems="center"
        >
          <QrCode
            value={value}
            borderColor={"$info"}
            width={280}
            height={280}
          />

          <Body textAlign="center">Scan QR Code to receive passport</Body>

          <XStack
            borderRadius={"$shape.corner_m"}
            overflow="hidden"
            backgroundColor={"$successContainer"}
            paddingHorizontal={12}
            paddingVertical={8}
            alignItems="center"
            gap={12}
          >
            <Icon Icon={CheckCircle} color="$onSuccessContainer" />

            <Body size="large" color={"$onSuccessContainer"}>
              Verified
            </Body>
          </XStack>
        </YStack>

        <YStack>
          <Divider />
          <ListItem line="two">
            <ListItem.LeadingIcon Icon={TreeDeciduous} />
            <ListItem.Container>
              <ListItem.Headline>Deforestation Assessment</ListItem.Headline>
              <ListItem.SupportingText>
                Evidence of deforestation-free production
              </ListItem.SupportingText>
            </ListItem.Container>
          </ListItem>

          <Divider />
          <ListItem line="two">
            <ListItem.LeadingIcon Icon={Earth} />
            <ListItem.Container>
              <ListItem.Headline>Emissions Profile</ListItem.Headline>
              <ListItem.SupportingText>
                Production emissions profile present
              </ListItem.SupportingText>
            </ListItem.Container>
          </ListItem>

          <Divider />
          <ListItem line="two">
            <ListItem.LeadingIcon Icon={Clock} />
            <ListItem.Container>
              <ListItem.Headline>Traceability and Production</ListItem.Headline>
              <ListItem.SupportingText>
                Consignment traceability events on-farm is present
              </ListItem.SupportingText>
            </ListItem.Container>
          </ListItem>

          <Divider />
          <ListItem line="two">
            <ListItem.LeadingIcon Icon={IdCard} />
            <ListItem.Container>
              <ListItem.Headline>Business Identity</ListItem.Headline>
              <ListItem.SupportingText>
                Business identify verified and present
              </ListItem.SupportingText>
            </ListItem.Container>
          </ListItem>
        </YStack>
      </YStack>
    </ModalCardScreen>
  );
}

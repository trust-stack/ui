import {ScreenHeader} from "@truststack/render-ui";
import {TrustGraphScreen as TTrustGraphScreen} from "@truststack/schema";
import {Body, ScreenLayout, Title, YStack} from "@truststack/ui";
import {TrustGraph} from "./TrustGraph";

export type TrustGraphScreenProps = {
  readonly data: TTrustGraphScreen;
};

export function TrustGraphScreen({data}: TrustGraphScreenProps) {
  return (
    <ScreenLayout header={<ScreenHeader data={data?.header} />}>
      <YStack padding={"$spacing.exp_margin"}>
        <Title size="large">Trust Graph</Title>
        <Body>
          Visualisation of the Trust Graph discovered, and associated
          information.
        </Body>
      </YStack>
      <TrustGraph data={data?.trustGraph} width={"100%"} height={600} />
    </ScreenLayout>
  );
}

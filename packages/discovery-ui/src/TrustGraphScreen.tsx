import {ScreenHeader} from "@truststack/render-ui";
import {TrustGraphScreen as TTrustGraphScreen} from "@truststack/schema";
import {Body, Divider, ScreenLayout, Title, View, YStack} from "@truststack/ui";
import {PolicyResultItem, PolicyResultItemProps} from "./PolicyResultItem";
import {TrustGraph} from "./TrustGraph";

type Data = TTrustGraphScreen & {
  readonly policyResults: PolicyResultItemProps[];
};

export type TrustGraphScreenProps = {
  readonly data: Data;
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
            />
          ))}
        </YStack>
      </YStack>
    </ScreenLayout>
  );
}

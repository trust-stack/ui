import {Meta} from "@storybook/react";
import {YStack} from "tamagui";
import {Input} from "./Input";
import {RenderStage, RenderVariants} from "./storybook-utils";

export default {
  component: Input,
  title: "Mui Input",
} as Meta<typeof Input>;

export const Variants = () => {
  return (
    <YStack gap={"$2"}>
      <RenderStage>
        <RenderVariants title="Default">
          <Input>
            <Input.Label>Label</Input.Label>
            <Input.SupportingText>Supporting Text</Input.SupportingText>
          </Input>

          <Input error>
            <Input.Label>Label</Input.Label>
            <Input.SupportingText>Supporting Text</Input.SupportingText>
          </Input>
        </RenderVariants>
      </RenderStage>

      <RenderStage>
        <RenderVariants title="Disabled">
          <Input disabled>
            <Input.Label>Label</Input.Label>
            <Input.SupportingText>Supporting Text</Input.SupportingText>
          </Input>
        </RenderVariants>
      </RenderStage>
    </YStack>
  );
};

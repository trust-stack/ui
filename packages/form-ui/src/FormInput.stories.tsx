import {yupResolver} from "@hookform/resolvers/yup";
import {Meta} from "@storybook/react";
import {useForm} from "react-hook-form";
import {YStack} from "tamagui";
import {object, string} from "yup";
import {FormInput} from "./FormInput";
import {FormProvider} from "./context";

const schema = object({
  test: string(),
});

export default {
  component: FormInput,
} as Meta<typeof FormInput>;

export const Variants = () => {
  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider formMethods={formMethods} submitHandler={() => {}}>
      <YStack gap={"$4"}>
        <FormInput
          id="test"
          label="Tooltip"
          variant="outlined"
          tooltip="Hi! My name is John Wick."
        />

        <FormInput
          id="test"
          label="Label"
          variant="outlined"
          helperText="Helper text..."
        />

        <FormInput
          id="test"
          label="Multiline"
          variant="outlined"
          helperText="Helper text..."
          multiline
        />

        <FormInput
          id="test"
          label="Label"
          variant="outlined"
          error
          helperText="Helper text..."
        />

        <FormInput
          id="test"
          label="Label"
          variant="outlined"
          disabled
          helperText="Helper text..."
        />

        <FormInput
          id="test"
          label="Loading"
          variant="outlined"
          loading
          helperText="Helper text..."
        />
      </YStack>
    </FormProvider>
  );
};

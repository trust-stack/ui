import {yupResolver} from "@hookform/resolvers/yup";
import {Meta} from "@storybook/react";
import {useForm} from "react-hook-form";
import {YStack} from "tamagui";
import {date, object} from "yup";
import {FormProvider} from "./context";
import {FormDateTimePicker} from "./FormDateTimePicker";

const schema = object({
  test: date(),
});

export default {
  component: FormDateTimePicker,
} as Meta<typeof FormDateTimePicker>;

export const Variants = () => {
  const formMethods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider formMethods={formMethods} submitHandler={() => {}}>
      <YStack gap={"$4"}>
        <FormDateTimePicker
          id="test"
          label="Date and Time"
          helperText="Without Now Button"
          withNow={false}
        />
        <FormDateTimePicker
          id="test"
          label="Date and Time"
          helperText="With Now Button"
          withNow
        />
      </YStack>
    </FormProvider>
  );
};

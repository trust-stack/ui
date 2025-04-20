import {RadioGroup} from "@truststack/ui";
import {Controller, FieldValues, Path} from "react-hook-form";
import {useFormContext} from "./context";

export type FormToggleProps<TFormFields extends FieldValues> = {
  readonly id: Path<TFormFields>;
  readonly options: {
    label: string;
    value: string;
  }[];
};

export function FormToggle<TFormFields extends FieldValues>({
  id,
  options,
}: FormToggleProps<TFormFields>): JSX.Element {
  const {control} = useFormContext<TFormFields>();

  return (
    <Controller
      control={control}
      name={id}
      render={({field}) => (
        <RadioGroup
          value={field.value}
          onChange={field.onChange}
          items={options}
        />
      )}
    />
  );
}

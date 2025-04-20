import {Clock} from "@tamagui/lucide-icons";
import {DateTimePicker, DateTimePickerProps, IconButton} from "@truststack/ui";
import {Controller, FieldValues, Path} from "react-hook-form";
import {View, XStack} from "tamagui";
import {useFormContext} from "./context";

export type FormDateTimePickerProps<TFormFields extends FieldValues> = {
  readonly id: Path<TFormFields>;
  readonly label: string;
  readonly helperText?: string;
  readonly withNow?: boolean;
} & Omit<DateTimePickerProps, "onChange" | "value">;

export function FormDateTimePicker<TFormFields extends FieldValues>({
  id,
  helperText,
  error: defaultError,
  withNow = true,
  ...props
}: FormDateTimePickerProps<TFormFields>): JSX.Element {
  const {
    control,
    formState: {errors},
    disabled,
  } = useFormContext<TFormFields>();

  const error = !!errors[id] || defaultError;
  const supportingText = errors?.[id]?.message || helperText;

  return (
    <Controller
      control={control}
      name={id}
      render={({field}) => {
        if (withNow)
          return (
            <XStack gap="$spacing.form_gap" alignItems="center" f={1}>
              <DateTimePicker
                {...props}
                disabled={disabled || props?.disabled}
                error={error}
                onChange={(d) => {
                  field?.onChange(d);
                }}
                value={field?.value}
                supportingText={supportingText as string}
              />

              <View>
                <IconButton
                  variant="filled-tonal"
                  onPress={() => field.onChange(new Date())}
                >
                  <IconButton.Icon Icon={Clock} />
                </IconButton>
              </View>
            </XStack>
          );

        return (
          <DateTimePicker
            {...props}
            disabled={disabled || props?.disabled}
            error={error}
            onChange={(d) => {
              field?.onChange(d);
            }}
            value={field?.value}
            supportingText={supportingText as string}
          />
        );
      }}
    />
  );
}

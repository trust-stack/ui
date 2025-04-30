import { DateTimePickerProps } from "@truststack/ui";
import { FieldValues, Path } from "react-hook-form";
export type FormDateTimePickerProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label: string;
    readonly helperText?: string;
    readonly withNow?: boolean;
} & Omit<DateTimePickerProps, "onChange" | "value">;
export declare function FormDateTimePicker<TFormFields extends FieldValues>({ id, helperText, error: defaultError, withNow, ...props }: FormDateTimePickerProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormDateTimePicker.d.ts.map
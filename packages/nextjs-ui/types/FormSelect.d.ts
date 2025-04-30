import { SelectProps } from "@truststack/ui";
import { FieldValues, Path } from "react-hook-form";
export type FormSelectProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly options: SelectProps["options"];
    readonly disabled?: SelectProps["disabled"];
    readonly loading?: SelectProps["loading"];
} & Partial<SelectProps>;
export type WrappedFormSelectProps<TFieldValues extends FieldValues> = Omit<FormSelectProps<TFieldValues>, "options" | "label"> & {
    readonly id: FormSelectProps<TFieldValues>["id"];
} & Partial<FormSelectProps<TFieldValues>>;
export declare function FormSelect<TFormFields extends FieldValues>({ id, label, supportingText, options, error: defaultError, ...props }: FormSelectProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormSelect.d.ts.map
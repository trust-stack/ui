import { NumericalInputProps } from "@truststack/ui";
import { FieldValues, Path } from "react-hook-form";
export type FormNumericalInputProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly helperText?: string;
} & NumericalInputProps;
export declare function FormNumericalInput<TFormFields extends FieldValues>({ id, helperText, error: defaultError, ...props }: FormNumericalInputProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormNumericalInput.d.ts.map
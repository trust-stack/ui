import { FieldValues, Path } from 'react-hook-form';
import { NumericalInputProps } from '../NumericalInput';
export type FormNumericalInputProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly helperText?: string;
} & NumericalInputProps;
export declare function FormNumericalInput<TFormFields extends FieldValues>({ id, helperText, error: defaultError, ...props }: FormNumericalInputProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormNumericalInput.d.ts.map
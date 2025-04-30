import { FieldValues, Path } from 'react-hook-form';
import { TextFieldProps } from './TextField';
export type FormInputProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly helperText?: string;
    readonly required?: boolean;
} & TextFieldProps;
export declare function FormInput<TFormFields extends FieldValues>({ id, helperText, error: defaultError, required, ...props }: FormInputProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormInput.d.ts.map
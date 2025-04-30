import { FieldValues, Path } from 'react-hook-form';
import { CheckboxProps } from '../Checkbox';
export type FormCheckboxProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
} & Omit<CheckboxProps, 'onChange' | 'value'>;
export declare function FormCheckbox<TFormFields extends FieldValues>({ id, label, ...props }: FormCheckboxProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormCheckbox.d.ts.map
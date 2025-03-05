import { Controller, FieldValues, Path } from 'react-hook-form';
import { Checkbox, CheckboxLabel, CheckboxProps } from '../Checkbox';
import { useFormContext } from './context';

export type FormCheckboxProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
} & Omit<CheckboxProps, 'onChange' | 'value'>;

export function FormCheckbox<TFormFields extends FieldValues>({
    id,
    label,
    ...props
}: FormCheckboxProps<TFormFields>): JSX.Element {
    const { control } = useFormContext<TFormFields>();

    return (
        <Controller
            control={control}
            name={id}
            render={({ field }) => {
                if (label)
                    return (
                        <CheckboxLabel
                            {...props}
                            label={label}
                            checked={field.value}
                            onChange={field.onChange}
                        />
                    );

                return (
                    <Checkbox
                        {...props}
                        checked={field.value}
                        onChange={field.onChange}
                    />
                );
            }}
        />
    );
}

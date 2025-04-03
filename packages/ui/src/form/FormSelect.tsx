import { Controller, FieldValues, Path } from 'react-hook-form';
import { Select, SelectProps } from '../Select';
import { useFormContext } from './context';

export type FormSelectProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly options: SelectProps['options'];
    readonly disabled?: SelectProps['disabled'];
    readonly loading?: SelectProps['loading'];
} & Partial<SelectProps>;

export type WrappedFormSelectProps<TFieldValues extends FieldValues> = Omit<
    FormSelectProps<TFieldValues>,
    'options' | 'label'
> & {
    readonly id: FormSelectProps<TFieldValues>['id'];
} & Partial<FormSelectProps<TFieldValues>>;

export function FormSelect<TFormFields extends FieldValues>({
    id,
    label,
    supportingText,
    options,
    error: defaultError,
    ...props
}: FormSelectProps<TFormFields>): JSX.Element {
    const {
        formState: { errors },
        control,
        disabled,
    } = useFormContext<TFormFields>();

    const error = !!errors[id] || defaultError;
    const helperText = errors?.[id]?.message || supportingText;

    return (
        <Controller
            control={control}
            name={id}
            render={({ field }) => (
                <Select
                    {...props}
                    disabled={disabled || props?.disabled}
                    options={options}
                    label={label}
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                    id={id}
                    error={error}
                    supportingText={helperText as string}
                />
            )}
        />
    );
}

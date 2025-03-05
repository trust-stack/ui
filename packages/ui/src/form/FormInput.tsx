import { Controller, FieldValues, Path } from 'react-hook-form';
import { TextField, TextFieldProps } from './TextField';
import { useFormContext } from './context';

export type FormInputProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly helperText?: string;
    readonly required?: boolean;
} & TextFieldProps;

export function FormInput<TFormFields extends FieldValues>({
    id,
    helperText,
    error: defaultError,
    required,
    ...props
}: FormInputProps<TFormFields>): JSX.Element {
    const {
        control,
        formState: { errors },
        disabled,
    } = useFormContext<TFormFields>();

    const error = !!errors[id] || defaultError;
    const supportingText = errors?.[id]?.message || helperText;
    const label = required ? `${props.label} *` : props.label;

    return (
        <Controller
            control={control}
            name={id}
            render={({ field }) => {
                return (
                    <TextField
                        {...props}
                        fg={1}
                        label={label}
                        disabled={disabled || props?.disabled}
                        error={error}
                        onBlur={field?.onBlur}
                        onChangeText={field?.onChange}
                        value={field?.value?.toString()}
                        placeholder={field?.value?.toString()}
                        id={id}
                        supportingText={supportingText as string}
                    />
                );
            }}
        />
    );
}

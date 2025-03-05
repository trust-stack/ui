import { Controller, FieldValues, Path } from 'react-hook-form';
import { NumericalInput, NumericalInputProps } from '../NumericalInput';
import { useFormContext } from './context';

export type FormNumericalInputProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly label?: string;
    readonly helperText?: string;
} & NumericalInputProps;

export function FormNumericalInput<TFormFields extends FieldValues>({
    id,
    helperText,
    error: defaultError,
    ...props
}: FormNumericalInputProps<TFormFields>): JSX.Element {
    const {
        control,
        formState: { errors },
        disabled,
    } = useFormContext<TFormFields>();

    const error = !!errors[id] || defaultError;
    const supportingText = errors?.[id]?.message || helperText;

    return (
        <Controller
            control={control}
            name={id}
            render={({ field }) => (
                <NumericalInput
                    {...props}
                    fg={1}
                    disabled={disabled || props?.disabled}
                    onChangeText={(e) => {
                        const newValue = e
                            ?.replace(/[^0-9.]/g, '')
                            .replace(/(\..*)\./g, '$1');
                        field?.onChange(newValue);
                    }}
                    value={field?.value?.toString()}
                    onValueChange={(v) => field?.onChange(v)}
                    onBlur={field?.onBlur}
                    id={id}
                    error={error}
                    supportingText={supportingText as string}
                />
            )}
        />
    );
}

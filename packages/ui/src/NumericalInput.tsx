import { TextField, TextFieldProps } from './TextField';

export type NumericalInputProps = {
    readonly value?: number;
    readonly onChange?: (v: number) => void;
} & Omit<TextFieldProps, 'value' | 'onChangeText'>;

export function NumericalInput({
    value,
    onChange,
    ...props
}: NumericalInputProps): JSX.Element {
    return (
        <TextField
            {...props}
            keyboardType="decimal-pad"
            onChangeText={(e) => {
                const newValue = e
                    ?.replace(/[^0-9.]/g, '')
                    .replace(/(\..*)\./g, '$1');
                onChange && onChange(newValue);
            }}
            value={value?.toString()}
        />
    );
}

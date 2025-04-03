import { KeyboardType } from 'react-native';
import { TextField, TextFieldProps } from './form/TextField';

export type NumericalInputProps = {
    readonly onValueChange?: (v: string) => void;
    readonly keyboardType?: KeyboardType;
} & Omit<TextFieldProps, 'value'>;

export function NumericalInput({
    onValueChange = () => {},
    ...props
}: NumericalInputProps): JSX.Element {
    return (
        <TextField
            keyboardType="decimal-pad"
            {...props}
            onChangeText={(e) => {
                const newValue = e
                    ?.replace(/[^0-9.]/g, '')
                    .replace(/(\..*)\./g, '$1');
                onValueChange(newValue);
            }}
        />
    );
}

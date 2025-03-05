import { KeyboardType } from 'react-native';
import { TextFieldProps } from './form/TextField';
export type NumericalInputProps = {
    readonly onValueChange?: (v: string) => void;
    readonly keyboardType?: KeyboardType;
} & Omit<TextFieldProps, 'value'>;
export declare function NumericalInput({ onValueChange, ...props }: NumericalInputProps): JSX.Element;
//# sourceMappingURL=NumericalInput.d.ts.map
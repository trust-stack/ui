import { TextFieldProps } from './TextField';
export type NumericalInputProps = {
    readonly value?: number;
    readonly onChange?: (v: number) => void;
} & Omit<TextFieldProps, 'value' | 'onChangeText'>;
export declare function NumericalInput({ value, onChange, ...props }: NumericalInputProps): JSX.Element;
//# sourceMappingURL=NumericalInput.d.ts.map
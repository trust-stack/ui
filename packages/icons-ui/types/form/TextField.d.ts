import { IconProps } from '@tamagui/helpers-icon';
import { FunctionComponent } from 'react';
import { InputProps } from './Input';
export type TextFieldProps = {
    readonly label?: string;
    readonly value?: string;
    readonly loading?: boolean;
    readonly error?: boolean;
    readonly disabled?: boolean;
    readonly supportingText?: string;
    readonly trailingIcon?: FunctionComponent<IconProps>;
    readonly multiline?: boolean;
    readonly endAdornment?: string;
    readonly tooltip?: string;
} & Omit<Partial<InputProps>, 'disabled'>;
export declare function TextField({ label, supportingText, value, trailingIcon, onChangeText, multiline, endAdornment, keyboardType, tooltip, ...props }: TextFieldProps): JSX.Element;
//# sourceMappingURL=TextField.d.ts.map
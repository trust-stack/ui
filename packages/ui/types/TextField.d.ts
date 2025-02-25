import { IconProps } from '@tamagui/helpers-icon';
import { FunctionComponent } from 'react';
import { InputProps } from './Input';
export type TextFieldProps = {
    readonly label: string;
    readonly value?: string;
    readonly loading?: boolean;
    readonly error?: boolean;
    readonly disabled?: boolean;
    readonly supportingText?: string;
    readonly trailingIcon?: FunctionComponent<IconProps>;
} & Partial<InputProps>;
export declare function TextField({ label, supportingText, value, trailingIcon, ...props }: TextFieldProps): JSX.Element;
//# sourceMappingURL=TextField.d.ts.map
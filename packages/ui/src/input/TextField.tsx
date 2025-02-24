import { IconProps } from '@tamagui/helpers-icon';
import { FunctionComponent } from 'react';
import { Input, InputProps } from './Input';

export type TextFieldProps = {
    readonly label: string;
    readonly value?: string;
    readonly loading?: boolean;
    readonly error?: boolean;
    readonly disabled?: boolean;
    readonly supportingText?: string;
    readonly trailingIcon?: FunctionComponent<IconProps>;
} & Partial<InputProps>;

export function TextField({
    label,
    supportingText,
    value,
    trailingIcon,
    ...props
}: TextFieldProps): JSX.Element {
    return (
        <Input {...props}>
            <Input.Container>
                <Input.Label>{label}</Input.Label>
                <Input.Text value={value} />
                {trailingIcon && <Input.TrailingIcon Icon={trailingIcon} />}
                <Input.Spinner />
            </Input.Container>
            {supportingText && (
                <Input.SupportingText>{supportingText}</Input.SupportingText>
            )}
        </Input>
    );
}

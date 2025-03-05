import { IconProps } from '@tamagui/helpers-icon';
import { FunctionComponent } from 'react';
import { Input, InputProps } from './Input';

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

export function TextField({
    label,
    supportingText,
    value,
    trailingIcon,
    onChangeText,
    multiline,
    endAdornment,
    keyboardType,
    tooltip,
    ...props
}: TextFieldProps): JSX.Element {
    return (
        <Input {...props}>
            <Input.Container>
                {!!label && !props?.bare && <Input.Label>{label}</Input.Label>}
                <Input.Text
                    value={value}
                    onChangeText={onChangeText}
                    multiline={multiline}
                    keyboardType={keyboardType}
                />
                {endAdornment && (
                    <Input.Adornment>{endAdornment}</Input.Adornment>
                )}

                {tooltip && <Input.Tooltip label={tooltip} />}

                {trailingIcon && <Input.TrailingIcon Icon={trailingIcon} />}
                <Input.Spinner />
            </Input.Container>
            {supportingText && !props?.bare && (
                <Input.SupportingText>{supportingText}</Input.SupportingText>
            )}
        </Input>
    );
}

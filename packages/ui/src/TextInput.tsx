import { Input, InputProps, Label, XStack } from 'tamagui';

export type TextInputProps = {
    readonly label?: string;
    readonly id: string;
} & InputProps;

export function TextInput({
    label,
    id,
    ...props
}: TextInputProps): JSX.Element {
    return (
        <XStack>
            {label && (
                <Label w={'100%'} htmlFor={id}>
                    {label}
                </Label>
            )}

            <Input
                w={'100%'}
                fg={1}
                id={id}
                {...props}
                focusStyle={{
                    borderWidth: 1,
                    borderColor: '$outline',
                }}
            />
        </XStack>
    );
}

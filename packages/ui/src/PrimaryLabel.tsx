import { View, XStack, YStack } from 'tamagui';
import { Divider } from './Divider';
import { Spinner } from './Spinner';
import { Display, Headline, Title } from './typography';

export type PrimaryLabelProps = {
    readonly value?: number | string;
    readonly loading?: boolean;
    readonly unit?: string;
    readonly subtitle?: string;
};

export function PrimaryLabel({
    value,
    loading,
    unit,
    subtitle,
}: PrimaryLabelProps): JSX.Element {
    const [intPart, decimalPart] = isNumber(value)
        ? splitFloat(value)
        : [value, ''];

    return (
        <YStack>
            <View gap={12} display="inline">
                {loading ? (
                    <>
                        <Spinner />
                        <View pl={8} display="inline" />
                    </>
                ) : (
                    <XStack alignItems="baseline">
                        <Display>{intPart}</Display>
                        {decimalPart && (
                            <Headline
                                size={'small'}
                            >{`.${decimalPart}`}</Headline>
                        )}
                        <Title pl={8} size={'large'}>
                            {unit}
                        </Title>
                    </XStack>
                )}
            </View>
            <Divider />
            <Title size={'large'}>{subtitle}</Title>
        </YStack>
    );
}

function isNumber(value: string | number): boolean {
    // Check if it's a number type or if the string can be converted to a valid number
    return typeof value === 'number' || !isNaN(Number(value));
}

function splitFloat(num: number | string): [string, string] {
    const numString = num.toString();
    const [intNumber, decimalNumber] = numString.split('.').map(Number);
    const intPart = isNaN(intNumber) ? '0' : intNumber.toString();
    const decimalPart = isNaN(decimalNumber) ? '' : decimalNumber.toString();
    return [intPart, decimalPart];
}

import { IconProps as TIconProps } from '@tamagui/helpers-icon';
import { FunctionComponent } from 'react';
import {
    createStyledContext,
    GetProps,
    styled,
    Text,
    ThemeableStack,
    View,
    withStaticProperties,
    XStack,
    YStack,
} from 'tamagui';
import { Icon as TPIcon } from './Icon';

const Context = createStyledContext({
    variant: 'primary',
    size: 'small',
});

const Frame = styled(ThemeableStack, {
    name: 'CalloutCard',
    context: Context,
    justifyContent: 'flex-end',
    borderRadius: '$shape.corner_medium',
    padding: '$spacing.card_body',
    variants: {
        variant: {
            primary: {
                backgroundColor: '$primaryContainer',
            },
            secondary: {
                backgroundColor: '$secondaryContainer',
            },
            tertiary: {
                backgroundColor: '$tertiaryContainer',
            },
            methane: {
                backgroundColor: '$methaneContainer',
            },
            carbon: {
                backgroundColor: '$carbonContainer',
            },
            nitrousOxide: {
                backgroundColor: '$nitrousOxideContainer',
            },
            success: {
                backgroundColor: '$successContainer',
            },
            warning: {
                backgroundColor: '$warningContainer',
            },
            error: {
                backgroundColor: '$errorContainer',
            },
        },
        size: {
            sm: {
                padding: 8,
            },
            m: {
                padding: 12,
            },
            l: {
                padding: '$spacing.card_body',
            },
        },
    } as const,
});

const IntLabel = styled(Text, {
    name: 'CalloutIntLabel',
    context: Context,
    col: '$onSurfaceVariant',
    variants: {
        size: {
            sm: {
                fontWeight: '400',
                fontSize: 22,
                lineHeight: 28,
            },
            m: {
                fontWeight: '400',
                fontSize: 32,
                lineHeight: 40,
            },
            l: {
                fontWeight: '400',
                fontSize: 57,
                lineHeight: 64,
            },
        },
        variant: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            methane: {
                col: '$onMethaneContainer',
            },
            carbon: {
                col: '$onCarbonContainer',
            },
            nitrousOxide: {
                col: '$onNitrousOxideContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
    } as const,
});

const Value = styled(Text, {
    name: 'CalloutCardValue',
    context: Context,
    col: '$onSurfaceVariant',
    fontFamily: '$heading',
    variants: {
        size: {
            sm: {
                fontWeight: '400',
                fontSize: 22,
                lineHeight: 28,
            },
            m: {
                fontWeight: '400',
                fontSize: 32,
                lineHeight: 40,
            },
            l: {
                fontWeight: '400',
                fontSize: 57,
                lineHeight: 64,
            },
        },
        variant: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            methane: {
                col: '$onMethaneContainer',
            },
            carbon: {
                col: '$onCarbonContainer',
            },
            nitrousOxide: {
                col: '$onNitrousOxideContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
    } as const,
});

const DecimalLabel = styled(Text, {
    name: 'CalloutDecimalLabel',
    context: Context,
    variants: {
        size: {
            sm: {
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 24,
            },
            m: {
                fontWeight: '400',
                fontSize: 22,
                lineHeight: 28,
                marginBottom: 2,
            },
            l: {
                fontWeight: '400',
                fontSize: 32,
                lineHeight: 40,
                marginBottom: 4,
            },
        },
        variant: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            methane: {
                col: '$onMethaneContainer',
            },
            carbon: {
                col: '$onCarbonContainer',
            },
            nitrousOxide: {
                col: '$onNitrousOxideContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
    },
});

const Label = styled(Text, {
    name: 'CalloutCardLabel',
    context: Context,
    col: '$onSurfaceVariant',
    numberOfLines: 1,
    adjustsFontSizeToFit: true,
    variants: {
        size: {
            sm: {
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 24,
            },
            m: {
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 24,
            },
            l: {
                fontWeight: '400',
                fontSize: 22,
                lineHeight: 28,
            },
        },
        variant: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            methane: {
                col: '$onMethaneContainer',
            },
            carbon: {
                col: '$onCarbonContainer',
            },
            nitrousOxide: {
                col: '$onNitrousOxideContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
    } as const,
});

const Icon = styled(TPIcon, {
    name: 'CalloutCardIcon',
    context: Context,
    variants: {
        size: {
            sm: {
                width: 28,
                height: 28,
            },
            m: {
                width: 32,
                height: 32,
            },
            lg: {
                width: 36,
                height: 36,
            },
        },
        variant: {
            primary: {
                col: '$onPrimaryContainer' as any,
            },
            secondary: {
                col: '$onSecondaryContainer' as any,
            },
            tertiary: {
                col: '$onTertiaryContainer' as any,
            },
            methane: {
                col: '$onMethaneContainer' as any,
            },
            carbon: {
                col: '$onCarbonContainer' as any,
            },
            nitrousOxide: {
                col: '$onNitrousOxideContainer' as any,
            },
            success: {
                col: '$onSuccessContainer' as any,
            },
            warning: {
                col: '$onWarningContainer' as any,
            },
            error: {
                col: '$onErrorContainer' as any,
            },
        },
    } as const,
});

const SupportText = styled(Text, {
    name: 'CalloutCardSupportingText',
    context: Context,
    variants: {
        size: {
            sm: {
                width: 12,
                height: 12,
            },
            m: {
                width: 16,
                height: 16,
            },
            lg: {
                width: 22,
                height: 22,
            },
        },
        variant: {
            primary: {
                col: '$onPrimaryContainer' as any,
            },
            secondary: {
                col: '$onSecondaryContainer' as any,
            },
            tertiary: {
                col: '$onTertiaryContainer' as any,
            },
            methane: {
                col: '$onMethaneContainer' as any,
            },
            carbon: {
                col: '$onCarbonContainer' as any,
            },
            nitrousOxide: {
                col: '$onNitrousOxideContainer' as any,
            },
            success: {
                col: '$onSuccessContainer' as any,
            },
            warning: {
                col: '$onWarningContainer' as any,
            },
            error: {
                col: '$onErrorContainer' as any,
            },
        },
    } as const,
});

const ValueContainer = styled(XStack, {
    name: 'CalloutCardValue',
    context: Context,
    alignItems: 'baseline',
    display: 'flex',
    flexDirection: 'row',
});

const Card = withStaticProperties(Frame, {
    Props: Context.Provider,
    Label,
    IntLabel,
    DecimalLabel,
    ValueContainer,
    Value,
    Icon,
    SupportText,
});

export type CalloutCardProps = GetProps<typeof Card> & {
    readonly value: string | number;
    readonly label: string;
};

export function CalloutCard({
    value,
    label,
    ...props
}: CalloutCardProps): JSX.Element {
    return (
        <Card {...props}>
            <Card.ValueContainer>
                <Card.Value>{value}</Card.Value>
            </Card.ValueContainer>
            <Card.Label>{label}</Card.Label>
        </Card>
    );
}

export type NumericalCalloutCardProps = {
    readonly value: number;
    readonly label: string;
    readonly unit?: string;
    readonly supportingText?: string;
    readonly action?: React.ReactNode;
} & CalloutCardProps;

export function NumericalCalloutCard({
    value,
    label,
    unit,
    supportingText,
    action,
    ...props
}: NumericalCalloutCardProps): JSX.Element {
    const [intPart, decimalPart] =
        typeof value === 'number' ? splitFloat(value) : [value, ''];

    return (
        <Card {...props}>
            <XStack justifyContent="space-between" alignContent="flex-end">
                <YStack
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                    gap={4}
                >
                    <Card.ValueContainer>
                        <Card.IntLabel>{intPart}</Card.IntLabel>
                        {!!decimalPart && (
                            <Card.DecimalLabel>
                                .{decimalPart}
                            </Card.DecimalLabel>
                        )}
                        {unit && <Card.DecimalLabel>{unit}</Card.DecimalLabel>}
                    </Card.ValueContainer>
                    <Card.Label>{label}</Card.Label>
                    {supportingText && (
                        <Card.SupportText>{supportingText}</Card.SupportText>
                    )}
                </YStack>

                <View
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-end"
                >
                    {action}
                </View>
            </XStack>
        </Card>
    );
}

export type IconCalloutCardProps = {
    readonly Icon?: FunctionComponent<TIconProps>;
    readonly label?: string;
} & GetProps<typeof Card>;

export function IconCalloutCard({
    Icon,
    label,
    ...props
}: IconCalloutCardProps): JSX.Element {
    return (
        <Card {...props}>
            <Card.ValueContainer>
                <Card.Icon Icon={Icon} />
            </Card.ValueContainer>
            <Card.Label>{label}</Card.Label>
        </Card>
    );
}

function splitFloat(num: number): [number, number] {
    const numString = num.toFixed(1).toString();
    const [intPart, decimalPart] = numString.split('.').map(Number);
    return [intPart, decimalPart];
}

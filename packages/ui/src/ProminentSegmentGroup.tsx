import {
    createStyledContext,
    styled,
    withStaticProperties,
} from '@tamagui/web';
import { ThemeableStack, ThemeableStackProps } from 'tamagui';
import { Body, Title } from './typography';

export type ProminentSegmentGroupProps<T extends string = string> = {
    readonly value: T;
    readonly options?: {
        headline: string;
        supportingText?: string;
        value: T;
    }[];
    readonly onChange: (v: T) => void;
} & ThemeableStackProps;

export function ProminentSegmentGroup<T extends string = string>({
    value,
    options,
    onChange,
    ...props
}: ProminentSegmentGroupProps<T>) {
    return (
        <ThemeableStack
            display="flex"
            flexDirection="row"
            gap={20}
            alignItems="center"
            justifyContent="center"
            {...props}
        >
            {options?.map((option, index) => (
                <Option
                    selected={option.value == value}
                    key={`prominent-option-${index}`}
                    onPress={() => onChange(option.value)}
                >
                    <Option.Headline>{option?.headline}</Option.Headline>
                    {option?.supportingText && (
                        <Option.SupportingText>
                            {option.supportingText}
                        </Option.SupportingText>
                    )}
                </Option>
            ))}
        </ThemeableStack>
    );
}

const Context = createStyledContext({
    selected: false,
});

const OptionFrame = styled(ThemeableStack, {
    name: 'OptionFrame',
    context: Context,
    borderRadius: '$shape.corner_m',

    padding: '$spacing.card_body',
    cursor: 'pointer',
    hoverStyle: {
        shadowColor: '$shadow',
        shadowRadius: '$shadow.1',
        backgroundColor: '$infoContainer',
    },
    group: 'option',
    height: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 12,
    flex: 1,
    flexGrow: 1,
    maxWidth: 280,
    variants: {
        selected: {
            true: {
                backgroundColor: '$secondaryContainer',
            },
            false: {
                backgroundColor: 'transparent',
            },
        },
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
        },
        outlined: {
            true: {
                borderColor: '$outline',
                borderWidth: 1,
            },
            false: {
                borderWidth: 0,
            },
        },
    } as const,
    defaultVariants: {
        outlined: true,
    },
});

const Headline = styled(Title, {
    name: 'OptionHeadline',
    context: Context,
    size: 'large',
    variants: {
        selected: {
            true: {
                col: '$onSecondaryContainer',
            },
            false: {},
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
        },
    } as const,
    '$group-option-hover': {
        col: '$onInfoContainer',
    },
});

const SupportingText = styled(Body, {
    name: 'OptionSupportText',
    context: Context,
    textAlign: 'center',
    variants: {
        selected: {
            true: {
                col: '$onSecondaryContainer',
            },
            false: {},
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
        },
    } as const,
    '$group-option-hover': {
        col: '$onInfoContainer',
    },
});

const Option = withStaticProperties(OptionFrame, {
    Props: Context.Provider,
    Headline,
    SupportingText,
});

export const ProminentButton = Option;

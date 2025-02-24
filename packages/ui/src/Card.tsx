import {
    GetProps,
    Image,
    ThemeableStack,
    View,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Body, Headline } from './typography';

const CardContext = createStyledContext({
    variant: undefined,
    color: undefined,
    density: '0',
});

export const CardFrame = styled(ThemeableStack, {
    name: 'Card',
    context: CardContext,
    overflow: 'hidden',
    pos: 'relative',
    flexDirection: 'column',
    variants: {
        pressable: {
            true: {
                cursor: 'pointer',
                hoverStyle: {
                    shadowColor: '$shadow_opacity',
                    shadowRadius: '$shadow.2',
                },
            },
            false: {
                cursor: 'default',
            },
        },
        color: {
            primary: {
                bc: '$primaryContainer',
            },
            secondary: {
                bc: '$secondaryContainer',
            },
            tertiary: {
                bc: '$tertiaryContainer',
            },
            success: {
                bc: '$successContainer',
            },
            info: {
                bc: '$infoContainer',
            },
            warning: {
                bc: '$warningContainer',
            },
            error: {
                bc: '$errorContainer',
            },
        },
        variant: {
            elevated: {
                bc: '$surfaceContainerLow',
                shadowColor: '$shadow_opacity',
                shadowRadius: '$shadow.1',
                hoverStyle: {
                    shadowColor: '$shadow_opacity',
                    shadowRadius: '$shadow.2',
                },
            },
            outlined: {
                bg: '$surface',
                brc: '$outlineVariant',
                btc: '$outlineVariant',
                bbc: '$outlineVariant',
                blc: '$outlineVariant',
                shadowColor: '$shadow_opacity',
                shadowRadius: '$shadow.0',
                bw: 1,
                hoverStyle: {
                    shadowColor: '$shadow_opacity',
                    shadowRadius: '$shadow.1',
                },
            },
            filled: {
                bc: '$surfaceContainerHighest',
                shadowColor: '$shadow_opacity',
                shadowRadius: '$shadow.0',
                hoverStyle: {
                    shadowColor: '$shadow_opacity',
                    shadowRadius: '$shadow.1',
                },
            },
            'filled-tonal': {
                bc: '$secondaryContainer',
                shadowColor: '$shadow_opacity',
                shadowRadius: '$shadow.0',
                hoverStyle: {
                    shadowColor: '$shadow_opacity',
                    shadowRadius: '$shadow.1',
                },
            },
        },
        shape: {
            xs: {
                borderRadius: '$shape.corner_xs',
            },
            sm: {
                borderRadius: '$shape.corner_sm',
            },
            m: {
                borderRadius: '$shape.corner_m',
            },
            l: {
                borderRadius: '$shape.corner_l',
            },
            xl: {
                borderRadius: '$shape.corner_xl',
            },
        },
        density: {
            '0': {},
            '-1': {},
            '-2': {},
            '-3': {},
        },
    } as const,
    defaultVariants: {
        pressable: false,
        variant: 'outlined',
        shape: 'm',
    },
});

export const CardHeader = styled(ThemeableStack, {
    name: 'CardHeader',
    context: CardContext,
    padding: 16,
    variants: {
        density: {
            '0': {},
            '-1': {
                padding: 12,
            },
            '-2': {
                padding: 8,
            },
            '-3': {
                padding: 4,
            },
        },
        variant: {
            'flex-between': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            },
        },
    } as const,
});

export const CardHeadline = styled(Headline, {
    name: 'Headline',
    context: CardContext,
    size: 'small',
    variants: {
        color: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            info: {
                col: '$onInfoContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
        variant: {
            elevated: {
                col: '$onSurface',
            },
            outlined: {
                col: '$onSurface',
            },
            filled: {
                col: '$onSurface',
            },
            'filled-tonal': {
                col: '$onSecondaryContainer',
            },
        } as const,
    },
});

export const CardSubheader = styled(Body, {
    name: 'Subheader',
    context: CardContext,
    size: 'large',
    variants: {
        color: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            info: {
                col: '$onInfoContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
        variant: {
            elevated: {
                col: '$onSurface',
            },
            outlined: {
                col: '$onSurface',
            },
            filled: {
                col: '$onSurface',
            },
            'filled-tonal': {
                col: '$onSecondaryContainer',
            },
        } as const,
    },
});

const ImageContainer = styled(View, {
    name: 'CardImageContainer',
    context: CardContext,
    variants: {
        rounded: {
            true: {
                borderRadius: '$shape.corner_m',
                overflow: 'hidden',
            },
        },
    },
});

export const SupportingText = styled(Body, {
    name: 'Subheader',
    context: CardContext,
    size: 'medium',
    variants: {
        color: {
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
            },
            info: {
                col: '$onInfoContainer',
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
        variant: {
            elevated: {
                col: '$onSurface',
            },
            outlined: {
                col: '$onSurface',
            },
            filled: {
                col: '$onSurface',
            },
            'filled-tonal': {
                col: '$onSecondaryContainer',
            },
        } as const,
    },
});

export const CardBody = styled(ThemeableStack, {
    context: CardContext,
    padding: '$spacing.card_body',
    name: 'CardBody',
    variants: {
        density: {
            '0': {},
            '-1': {
                padding: 12,
            },
            '-2': {
                padding: 8,
            },
            '-3': {
                padding: 4,
            },
        },
    } as const,
});

const Actions = styled(ThemeableStack, {
    context: CardContext,
    gap: 8,
    name: 'CardActions',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    p: 16,
    marginTop: 'auto',
    variants: {
        density: {
            '0': {},
            '-1': {
                padding: 12,
            },
            '-2': {
                padding: 8,
            },
            '-3': {
                padding: 4,
            },
        },
    } as const,
});

export const Card = withStaticProperties(CardFrame, {
    Props: CardContext.Provider,
    Headline: CardHeadline,
    Header: CardHeader,
    Body: CardBody,
    Subheader: CardSubheader,
    Actions,
    SupportingText,
    Image,
    ImageContainer,
});

export type CardProps = GetProps<typeof Card>;

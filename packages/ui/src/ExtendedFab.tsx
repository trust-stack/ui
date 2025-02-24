import {
    View,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon } from './Icon';
import { Label } from './typography';

const ExtendedFabContext = createStyledContext({
    variant: undefined,
});

const Frame = styled(View, {
    name: 'ExtendedFab',
    context: ExtendedFabContext,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 80,
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '$shape.corner_l',
    shadowColor: '$shadow_opacity',
    shadowRadius: '$shadow.3',
    gap: 8,
    hoverStyle: {
        shadowColor: '$shadow_opacity',
        shadowRadius: '$shadow.4',
    },
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
        },
        elevated: {
            false: {
                shadowColor: 'unset',
                shadowRadius: 'unset',
            },
        },
        density: {
            '0': {
                padding: 16,
                height: 56,
            },
            '-1': {
                padding: 12,
                height: 52,
            },
            '-2': {
                padding: 8,
                height: 48,
            },
            '-3': {
                padding: 4,
                height: 44,
            },
        },
    } as const,
    defaultVariants: {
        variant: 'primary',
        density: '0',
    },
});

const ExtendedFabIcon = styled(Icon, {
    name: 'ExtendedFabIcon',
    width: 24,
    height: 24,
    context: ExtendedFabContext,
    variants: {
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
        },
    },
});

const ExtendedFabLabel = styled(Label, {
    name: 'ExtendedFabLabel',
    size: 'large',
    context: ExtendedFabContext,
    variants: {
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
    },
});

export const ExtendedFab = withStaticProperties(Frame, {
    Props: ExtendedFabContext.Provider,
    Icon: ExtendedFabIcon,
    Label: ExtendedFabLabel,
});

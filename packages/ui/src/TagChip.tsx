import { ComponentProps } from 'react';
import {
    ThemeableStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon } from './Icon';
import { Spinner } from './Spinner';
import { Label } from './typography';

const ChipContext = createStyledContext({
    variant: undefined,
    loading: false,
});

const ChipFrame = styled(ThemeableStack, {
    name: 'Chip',
    context: ChipContext,
    dsp: 'flex',
    ai: 'center',
    fd: 'row',
    height: 32,
    maxHeight: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    // @ts-ignore
    pressable: true,
    minWidth: 48,
    gap: 8,
    justifyContent: 'space-between',
    disabledStyle: {
        o: 0.4,
        pe: 'none',
    },
    variants: {
        variant: {
            tonal: {
                bg: '$secondaryContainer',
            },
            outlined: {
                brc: '$outline',
                btc: '$outline',
                bbc: '$outline',
                blc: '$outline',
                bw: '$border.outline',
                background: 'transparent',
                hoverStyle: {
                    cur: 'pointer',
                    bc: '$primaryContainer',
                },
            },
            'success-tonal': {
                brc: '$success',
                btc: '$success',
                bbc: '$success',
                blc: '$success',
                bg: '$successContainer',
            },
            'warning-tonal': {
                brc: '$warning',
                btc: '$warning',
                bbc: '$warning',
                blc: '$warning',
                bg: '$warningContainer',
            },
            'error-tonal': {
                brc: '$error',
                btc: '$error',
                bbc: '$error',
                blc: '$error',
                bg: '$errorContainer',
            },
        },
        shape: {
            none: {
                borderRadius: 0,
            },
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
            full: {
                borderRadius: '$shape.corner_full',
            },
        },
        density: {
            '0': {
                height: 32,
                maxHeight: 32,
                paddingLeft: 16,
                paddingRight: 16,
            },
            '-1': {
                height: 28,
                maxHeight: 28,
                paddingLeft: 12,
                paddingRight: 12,
            },
            '-2': {
                height: 24,
                maxHeight: 24,
                paddingLeft: 8,
                paddingRight: 8,
            },
            '-3': {
                height: 20,
                maxHeight: 20,
                paddingLeft: 4,
                paddingRight: 4,
            },
        },
        color: {
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
    } as const,
    defaultVariants: {
        variant: 'tonal',
        shape: 'sm',
        density: '0',
    },
});

const ChipText = styled(Label, {
    name: 'ChipText',
    context: ChipContext,
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
        },
        variant: {
            tonal: {
                col: '$onSecondaryContainer',
            },
            'success-tonal': {
                col: '$onSuccessContainer',
            },
            'warning-tonal': {
                color: '$onWarningContainer',
            },
            'error-tonal': {
                col: '$onErrorContainer',
            },
        },
    } as const,
});

const ChipIcon = styled(Icon, {
    context: ChipContext,
    name: 'ButtonIcon',
    width: 18,
    height: 18,
    variants: {
        variant: {
            tonal: {
                col: '$onSecondaryContainer' as any,
            },
            'success-tonal': {
                color: '$onSuccessContainer',
            },
            'warning-tonal': {
                col: '$onWarningContainer' as any,
            },
            'error-tonal': {
                col: '$onErrorContainer' as any,
            },
        },
        color: {
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
    } as const,
});

const ChipSpinner = styled(Spinner, {
    name: 'ChipSpinner',
    context: ChipContext,
    variants: {
        loading: {
            false: {
                display: 'none',
            },
        },
        color: {
            tonal: {
                col: '$onSecondaryContainer',
            },
            'success-tonal': {
                col: '$onSuccessContainer' as any,
            },
            'warning-tonal': {
                col: '$onWarningContainer' as any,
            },
            'error-tonal': {
                col: '$onErrorContainer' as any,
            },
        },
    },
});

export const TagChip = withStaticProperties(ChipFrame, {
    Props: ChipContext.Provider,
    Text: ChipText,
    Icon: ChipIcon,
    Spinner: ChipSpinner,
});

export type TagChipProps = ComponentProps<typeof TagChip>;

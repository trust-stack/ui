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
    cursor: 'pointer',
    hoverStyle: {
        cur: 'pointer',
        bc: '$primaryContainer',
    },
    pressStyle: {
        // bc: '$backgroundPress',
    },
    disabledStyle: {
        o: 0.4,
        pe: 'none',
    },
    variants: {
        variant: {
            assist: {
                brc: '$outline',
                btc: '$outline',
                bbc: '$outline',
                blc: '$outline',
                borderBlockColor: '$outline',
                borderBlockStartColor: '$outline',
                bw: 1,
            },
            filter: {
                bg: '$secondaryContainer',
            },
            input: {
                brc: '$outline',
                btc: '$outline',
                bbc: '$outline',
                blc: '$outline',
                borderBlockColor: '$outline',
                borderBlockStartColor: '$outline',
                bw: 1,
            },
            suggestion: {
                brc: '$outline',
                btc: '$outline',
                bbc: '$outline',
                blc: '$outline',
                borderBlockColor: '$outline',
                borderBlockStartColor: '$outline',
                bw: 1,
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
        pressable: {
            false: {
                pointerEvents: 'none',
                cursor: 'none',
                hoverStyle: {},
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
            '3': {
                height: 48,
                maxHeight: 48,
                paddingLeft: 16,
                paddingRight: 16,
            },
            '2': {
                height: 40,
                maxHeight: 40,
                paddingLeft: 16,
                paddingRight: 16,
            },
            '1': {
                height: 36,
                maxHeight: 36,
                paddingLeft: 16,
                paddingRight: 16,
            },
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
        variant: 'assist',
        shape: 'sm',
        density: '0',
    },
});

const ChipText = styled(Label, {
    name: 'ChipText',
    context: ChipContext,
    size: 'large',
    hoverStyle: {
        col: '$onSurface',
    },
    cursor: 'pointer',
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
        pressable: {
            false: {
                cursor: 'none',
            },
        },
        variant: {
            assist: {},
            filter: {
                col: '$onSecondaryContainer',
            },
            input: {},
            suggestion: {},
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
            assist: {},
            filter: {
                col: '$onSecondaryContainer' as any,
            },
            input: {},
            suggestion: {},
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
            primary: {
                col: '$onPrimaryContainer',
            },
            secondary: {
                col: '$onSecondaryContainer',
            },
            tertiary: {
                col: '$onTertiaryContainer',
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

export const Chip = withStaticProperties(ChipFrame, {
    Props: ChipContext.Provider,
    Text: ChipText,
    Icon: ChipIcon,
    Spinner: ChipSpinner,
});

export type ChipProps = ComponentProps<typeof Chip>;

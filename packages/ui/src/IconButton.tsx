import { ComponentProps } from 'react';
import { PressableProps } from 'react-native';
import {
    GetProps,
    View,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

const IconButtonContext = createStyledContext({
    variant: '',
    loading: false,
    disabled: false,
    density: '0',
});

const IconButtonFrame = styled(View, {
    name: 'IconButton',
    context: IconButtonContext,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 40,
    height: 40,
    borderRadius: 100,
    hoverStyle: {
        cur: 'pointer',
        bc: '$primaryContainer',
    },
    disabledStyle: {
        o: 0.4,
        pointerEvents: 'none',
        cursor: 'none',
    },
    variants: {
        variant: {
            filled: {
                backgroundColor: '$primary',
            },
            elevated: {
                backgroundColor: '$surfaceContainerLow',
            },
            'filled-tonal': {
                bg: '$secondaryContainer',
            },
            'filled-success': {
                bg: '$successContainer',
            },
            'filled-tertiary': {
                bg: '$tertiaryContainer',
            },
            'filled-error': {
                bg: '$errorContainer',
            },
            'tonal-warning': {
                bg: '$warningContainer' as any,
            },
            outlined: {
                bc: 'transparent',
                brc: '$outline',
                btc: '$outline',
                bbc: '$outline',
                blc: '$outline',
                bw: 1.5,
                borderBlockColor: '$outline',
                borderBlockStartColor: '$outline',
            },
            standard: {
                bg: 'transparent',
            },
        },
        density: {
            '0': {},
            '-1': {
                width: 36,
                height: 36,
            },
            '-2': {
                width: 32,
                height: 32,
            },
            '-3': {
                width: 28,
                height: 28,
            },
        },
        disabled: {
            true: {
                pointerEvents: 'none',
                cursor: 'none',
            },
        },
        loading: {
            true: {},
            false: {},
        },
    } as const,
    defaultVariants: {
        variant: 'filled',
        disabled: false,
        density: '0',
    },
});

type Props = GetProps<typeof IconButtonFrame> &
    Partial<Pick<PressableProps, 'onPress'>>;

const IconButtonSpinner = styled(Spinner, {
    name: 'ButtonSpinner',
    context: IconButtonContext,
    col: '$onPrimary',
    variants: {
        loading: {
            false: {
                display: 'none',
            },
        },
        variant: {
            filled: {
                col: '$onPrimary' as any,
            },
            elevated: {
                col: '$primary' as any,
            },
            'filled-tonal': {
                col: '$onSecondaryContainer' as any,
            },
            'filled-tertiary': {
                col: '$onTertiaryContainer' as any,
            },
            'filled-success': {
                col: '$onSuccessContainer',
            },
            'filled-error': {
                col: '$onErrorContainer',
            },
            'tonal-warning': {
                col: '$onWarningContainer' as any,
            },
        },
    } as const,
});

const IconButtonIcon = styled(Icon, {
    name: 'IconButtonIcon',
    context: IconButtonContext,
    size: 24,
    variants: {
        variant: {
            filled: {
                col: '$onPrimary' as any,
            },
            'filled-tonal': {
                col: '$onSecondaryContainer' as any,
            },
            'filled-tertiary': {
                col: '$onTertiaryContainer' as any,
            },
            tonal: {
                col: '$onSecondaryContainer' as any,
            },
            'tonal-success': {
                col: '$onSuccessContainer' as any,
            },
            'tonal-warning': {
                col: '$onWarningContainer' as any,
            },
            elevated: {
                col: '$primary' as any,
            },
        },
        density: {
            '0': {},
            '-1': {
                // @ts-ignore
                size: 20,
            },
            '-2': {
                // @ts-ignore
                size: 16,
            },
            '-3': {
                // @ts-ignore
                size: 16,
            },
        },
        loading: {
            true: {
                display: 'none',
            },
        },
    },
});

export const IconButton = withStaticProperties(IconButtonFrame, {
    Props: IconButtonContext.Provider,
    Icon: IconButtonIcon,
    Spinner: IconButtonSpinner,
});

export type IconButtonProps = ComponentProps<typeof IconButton>;

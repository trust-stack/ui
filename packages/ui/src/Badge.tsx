import {
    ThemeableStack,
    View,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Body } from './typography';

const BadgeContext = createStyledContext({
    visible: false,
    variant: 'small',
    density: '0',
});

const Frame = styled(View, {
    name: 'Badge',
    context: BadgeContext,
    position: 'relative',
    variants: {
        visible: {
            false: {},
            true: {},
        },
        variant: {
            small: {},
            large: {},
        },
        density: {
            '0': {},
            '-1': {},
        },
    } as const,
    defaultVariants: { variant: 'small', visible: false, density: '0' },
});

const Indicator = styled(ThemeableStack, {
    name: 'BadgeIndicator',
    context: BadgeContext,
    backgroundColor: '$error',
    borderRadius: '$shape.corner_full',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    // half of icon button + width of badge
    // this may need to be dynamic based on the size of wrapped element
    left: 26,
    variants: {
        visible: {
            false: {
                display: 'none',
            },
        },
        variant: {
            small: {
                width: 6,
                height: 6,
            },
            large: {
                width: 20,
                height: 20,
            },
        },
        density: {
            '0': {
                top: -4,
            },
            '-1': {
                top: -2,
            },
        },
    } as const,
});

const IndicatorLabel = styled(Body, {
    name: 'BadeIndicatorText',
    context: BadgeContext,
    col: '$onError',
    textAlign: 'center',
});

export const Badge = withStaticProperties(Frame, {
    Props: BadgeContext.Provider,
    Indicator,
    Label: IndicatorLabel,
});

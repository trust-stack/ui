import { Circle, CircleDot } from '@tamagui/lucide-icons';
import { ComponentProps } from 'react';
import { Pressable } from 'react-native';
import {
    ThemeableStack,
    XStack,
    YStack,
    YStackProps,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon as TPIcon } from './Icon';
import { Body } from './typography';

const RadioContext = createStyledContext({
    selected: false,
});

const Frame = styled(ThemeableStack, {
    name: 'Radio',
    context: RadioContext,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: '$shape.corner_full',
    cursor: 'pointer',
    animateOnly: ['backgroundColor'],
    animation: '100ms',
    hoverStyle: {
        backgroundColor: '$onSurfaceOpacity',
    },
    variants: {
        selected: {
            true: {},
            false: {},
        },
    } as const,
});

const Icon = styled(TPIcon, {
    name: 'RadioIcon',
    context: RadioContext,
    size: 20,
    disabledStyle: {
        col: '$onSurface' as any,
        opacity: 0.38,
    },
    variants: {
        selected: {
            true: {
                col: '$primary' as any,
                Icon: CircleDot,
            },
            false: {
                col: '$onSurfaceVariant' as any,
                Icon: Circle,
            },
        },
    },
});

const RadioComposed = withStaticProperties(Frame, {
    Props: RadioContext.Provider,
    Icon,
});

export const Radio = RadioComposed.styleable((props, ref) => {
    return (
        <RadioComposed {...props} ref={ref}>
            <RadioComposed.Icon />
        </RadioComposed>
    );
});

export type RadioProps = ComponentProps<typeof Radio>;

export type RadioGroupProps<T extends string = string> = {
    readonly items: { label: string; value: T }[];
    readonly value: T;
    readonly onChange: (v: T) => void;
} & YStackProps;

export function RadioGroup<T extends string = string>({
    items = [],
    value,
    onChange,
    ...props
}: RadioGroupProps<T>): JSX.Element {
    return (
        <YStack {...props}>
            {items?.map((item, index) => (
                <Pressable
                    style={{ width: '100%' }}
                    key={`radio-item-${index}`}
                    onPress={() => onChange(item.value)}
                >
                    <XStack alignItems="center" gap={20}>
                        <Radio selected={item.value == value} />
                        <Body size="large">{item.label}</Body>
                    </XStack>
                </Pressable>
            ))}
        </YStack>
    );
}

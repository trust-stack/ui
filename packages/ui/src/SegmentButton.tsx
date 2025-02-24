import React from 'react';
import { Pressable } from 'react-native';
import {
    GetProps,
    ThemeableStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { IconProps, Icon as TIcon } from './Icon';
import { Label as TLabel } from './typography';

const SegmentButtonContext = createStyledContext({
    disabled: false,
    variant: undefined,
});

const Frame = styled(ThemeableStack, {
    name: 'SegmentButton',
    context: SegmentButtonContext,
    borderRadius: '$shape.corner_full',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    variants: {
        density: {
            '0': {
                height: 40,
                maxHeight: 48,
            },
            '-1': {
                height: 36,
                maxHeight: 36,
            },
            '-2': {
                height: 32,
                maxHeight: 32,
            },
            '-3': {
                height: 28,
                maxHeight: 28,
            },
        },
        variant: {
            'fill-tonal': {
                backgroundColor: '$secondaryContainer',
            },
        },
        outlined: {
            true: {
                borderWidth: 1,
                borderColor: '$outlineVariant',
            },
            false: {
                borderWidth: 0,
            },
        },
    } as const,
    defaultVariants: {
        variant: undefined,
        outlined: true,
        density: '0',
    },
});

const FrameHOC = Frame.styleable(({ children, ...props }, ref) => {
    const items: React.ReactNode[] = [];

    const childCount = React.Children.count(children);

    React.Children.forEach(children, (child, index) => {
        const isLast = index + 1 == childCount;

        items.push(
            <ThemeableStack
                key={`segment-stack-item-${index}`}
                borderRightWidth={!isLast ? 1 : 0}
                borderRightColor={!isLast ? '$outlineVariant' : undefined}
                height={'100%'}
                f={1}
                fb={1}
                justifyContent="center"
                alignItems="center"
                display="flex"
            >
                {child}
            </ThemeableStack>
        );
    });

    return (
        <Frame {...props} ref={ref}>
            {items}
        </Frame>
    );
});

const SegmentButtonItemContext = createStyledContext({
    selected: false,
});

const Item = styled(ThemeableStack, {
    name: 'SegmentButtonItem',
    context: SegmentButtonItemContext,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 48,
    cursor: 'pointer',
    gap: 8,
    paddingLeft: 12,
    paddingRight: 12,
    variants: {
        variant: {
            'fill-tonal': {
                backgroundColor: 'unset',
            },
        },
        selected: {
            true: {
                backgroundColor: '$secondaryContainer',
            },
            false: {
                hoverStyle: {
                    backgroundColor: '$surface',
                },
            },
        },
    } as const,
    defaultVariants: {
        selected: false,
    },
});

const Label = styled(TLabel, {
    name: 'SegmentButtonLabel',
    context: SegmentButtonItemContext,
    size: 'large',
    variants: {
        selected: {
            false: {
                col: '$onSurface',
            },
            true: {
                col: '$onSecondaryContainer',
            },
        },
        variant: {
            'filled-tonal': {
                col: '$onSecondaryContainer',
            },
        },
    } as const,
    defaultVariants: {
        selected: false,
    },
});

const Icon = styled(TIcon, {
    name: 'SegmentButtonIcon',
    context: SegmentButtonItemContext,
    col: '$onSurface' as any,
    size: 18,
    height: 18,
    width: 18,
    variants: {
        disabled: {
            true: {
                col: '$onSurface' as any,
                opacity: 0.38,
            },
        },
        variant: {
            'filled-tonal': {
                col: '$onSecondaryContainer' as any,
            },
        },
    } as const,
});

const SegmentButtonItem = withStaticProperties(Item, {
    Props: SegmentButtonItemContext.Provider,
    Icon,
    Label,
    Item,
});

export const SegmentButton = withStaticProperties(FrameHOC, {
    Props: SegmentButtonContext.Provider,
    Item: SegmentButtonItem,
});

export type SegmentButtonProps = GetProps<typeof SegmentButton>;

export type SegmentButtonGroupProps<T extends string = string> = {
    readonly value: T;
    readonly onChange: (v: T) => void;
    readonly items: {
        label: string;
        value: T;
        Icon?: React.FunctionComponent<IconProps>;
    }[];
} & Partial<SegmentButtonProps>;

export function SegmentButtonGroup<T extends string = string>({
    value,
    items,
    onChange,
    ...props
}: SegmentButtonGroupProps<T>): JSX.Element {
    return (
        <SegmentButton {...props}>
            {items.map((item, index) => (
                <Pressable
                    key={`segment-item-${index}`}
                    onPress={() => onChange(item.value)}
                    style={{ width: '100%', height: '100%' }}
                >
                    <SegmentButton.Item selected={value == item.value}>
                        {item.Icon && (
                            <SegmentButton.Item.Icon Icon={item.Icon} />
                        )}
                        <SegmentButton.Item.Label>
                            {item.label}
                        </SegmentButton.Item.Label>
                    </SegmentButton.Item>
                </Pressable>
            ))}
        </SegmentButton>
    );
}

import { GetProps, styled, View as TView } from 'tamagui';

export const View = styled(TView, {
    name: 'View',
    variants: {
        outlined: {
            true: {
                borderWidth: '$border.outline',
                borderColor: '$outline',
                borderRadius: '$shape.corner_m',
            },
            false: {},
        },
    } as const,
    defaultVariants: {
        outlined: false,
    },
});

export type ViewProps = GetProps<typeof View>;

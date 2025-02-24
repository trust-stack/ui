import { Spinner as TSpinner, styled } from 'tamagui';

export const Spinner = styled(TSpinner, {
    name: 'Spinner',
    variants: {
        variant: {
            primary: {
                col: '$primary' as any,
            },
            secondary: {
                col: '$secondary' as any,
            },
        },
    } as const,
    defaultVariants: {
        variant: 'primary',
    },
});

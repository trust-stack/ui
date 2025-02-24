import { Stack, styled } from '@tamagui/core';
import { createSheet } from '@tamagui/sheet';
import { ComponentProps, forwardRef } from 'react';
import { Sheet as TSheet, TamaguiElement } from 'tamagui';

const Handle = styled(TSheet.Handle, {
    bg: '$surfaceVariant',
    width: 100,
    br: '$shape.corner_full',
    height: 4,
    pos: 'absolute',
    als: 'center',
    mt: '$3',
    zi: 100_000,
});

const FOverlay = forwardRef<
    TamaguiElement,
    ComponentProps<typeof TSheet.Overlay>
>((props, ref) => <TSheet.Overlay {...props} />);

const Overlay = styled(FOverlay, {
    bg: 'black',
    h: '100%',
    o: 0.3,
});

const Frame = styled(TSheet.Frame, {
    bg: '$surface',
    btrr: '$shape.corner_full',
    btlr: '$shape.corner_full',
    paddingTop: 12,
    variants: {
        variant: {
            outlined: {
                borderColor: '$outlineVariant',
                backgroundColor: '$surfaceContainerLowest',
                borderWidth: '$border.outline',
            },
        },
    } as const,
});

export const SheetContent = styled(Stack, {
    paddingTop: '$spacing.margin_compact',
});

export const Sheet = createSheet({
    Frame,
    Handle,
    Overlay,
});

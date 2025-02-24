import { Popover as TPopover, styled, withStaticProperties } from 'tamagui';
import { Sheet } from './Sheet';
import { Body, Headline } from './typography';

const Content = styled(TPopover.Content, {
    name: 'PopoverContent',
    borderRadius: '$shape.corner_l',
    borderWidth: '$border.outline',
    borderColor: '$outlineVariant',
    overflow: 'hidden',
    enterStyle: { y: -10, opacity: 0 },
    exitStyle: { y: -10, opacity: 0 },
    margin: 0,
    padding: 0,
    animation: [
        'quick',
        {
            opacity: {
                overshootClamping: true,
            },
        },
    ],
});

const PopoverHeadline = styled(Headline, {
    name: 'PopoverHeadline',
    size: 'small',
});

const PopoverSupportingText = styled(Body, {
    name: 'PopoverSupportingText',
    size: 'medium',
});

export const Popover = withStaticProperties(TPopover, {
    Trigger: TPopover.Trigger,
    Content,
    Arrow: TPopover.Arrow,
    Close: TPopover.Close,
    Headline: PopoverHeadline,
    SupportingText: PopoverSupportingText,
    Sheet: Sheet.Controlled,
});

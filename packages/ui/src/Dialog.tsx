import {
    GetProps,
    Dialog as TDialog,
    View,
    XStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from './dimensions';
import { Body, Headline as _Headline } from './typography';

const DialogContext = createStyledContext({
    fullscreen: false,
});

const DialogFrame = styled(TDialog, {
    name: 'Dialog',
    context: DialogContext,
});

const Content = styled(TDialog.Content, {
    name: 'DialogContainer',
    context: DialogContext,
    backgroundColor: '$surfaceContainerLowest',
    borderRadius: '$shape.corner_xl',
    padding: 24,
    minWidth: 280,
    maxWidth: 560,
    elevate: true,
    key: 'content',
    overflow: 'hidden',
    animateOnly: ['transform', 'opacity'],
    $compact: {
        mx: 20,
        backgroundColor: '$surfaceContainerLowest',
    },
    animation: [
        'quick',
        {
            o: {
                overshootClamping: true,
            },
        },
    ],
    enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
    exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
    variants: {
        fullscreen: {
            true: {
                minWidth: WINDOW_WIDTH,
                maxWidth: WINDOW_WIDTH,
                width: WINDOW_WIDTH,
                minHeight: WINDOW_HEIGHT,
                maxHeight: WINDOW_HEIGHT,
                height: WINDOW_HEIGHT,
                borderRadius: 0,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                padding: 0,
            },
            false: {},
        },
    } as const,
    defaultVariants: {
        fullscreen: false,
    },
});

const Headline = styled(_Headline, {
    name: 'DialogHeadline',
    context: DialogContext,
    size: 'small',
});

const Title = styled(TDialog.Title, {
    context: DialogContext,
    name: 'DialogTitle',
    mb: 16,
});

const SupportingText = styled(Body, {
    size: 'medium',
    mb: 24,
});

const Overlay = styled(TDialog.Overlay, {
    context: DialogContext,
    name: 'DialogOverlay',
    backgroundColor: '$scrim',
    key: 'overlay',
    animation: 'slow',
    opacity: 0.6,
    enterStyle: { opacity: 0 },
    exitStyle: { opacity: 0 },
});

const Actions = styled(XStack, {
    name: 'DialogActions',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 24,
    gap: 8,
});

const Header = styled(View, {
    name: 'DialogHeader',
    mb: 16,
});

export const Dialog = withStaticProperties(DialogFrame, {
    Props: DialogContext.Provider,
    Content,
    Headline,
    SupportingText,
    Trigger: TDialog.Trigger,
    Portal: TDialog.Portal,
    Overlay,
    Actions,
    Header,
    Close: TDialog.Close,
    Title,
});

export type DialogProps = GetProps<typeof Dialog>;

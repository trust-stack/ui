import { XStack, YStack, styled, withStaticProperties } from 'tamagui';
import { View } from './View';

export const FullScreenContainer = styled(XStack, {
    name: 'FullScreenContainer',
    style: {
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
    },
});

const MainFrame = styled(YStack, {
    name: 'MainFrame',
    height: '100%',
    maxHeight: '100%',
    fg: 1,
    variants: {
        sizing: {
            1600: {
                maxWidth: 1600,
                width: '100%',
                margin: 'auto',
            },
            1400: {
                maxWidth: 1400,
                width: '100%',
                margin: 'auto',
            },
            1200: {
                maxWidth: 1200,
                width: '100%',
                margin: 'auto',
            },
            1000: {
                maxWidth: 1000,
                width: '100%',
                margin: 'auto',
            },
            800: {
                maxWidth: 800,
                width: '100%',
                margin: 'auto',
            },
        },
    } as const,
});

const MainHeader = styled(XStack, {
    name: 'MainHeader',
    height: 88,
    maxHeight: 88,
    py: 16,
    px: 24,
});

const MainContent = styled(View, {
    name: 'MainContent',
    fg: 1,
    px: 24,
});

const MainFooter = styled(XStack, {
    name: 'MainFooter',
    height: 72,
    py: 16,
    px: 24,
});

export const MainLayout = withStaticProperties(MainFrame, {
    Header: MainHeader,
    Content: MainContent,
    Footer: MainFooter,
});

const ScreenDialogFrame = styled(YStack, {
    name: 'ScreenDialogFrame',
    maxWidth: 1200,
    margin: 'auto',
    height: '100%',
    maxHeight: '100%',
});

const ScreenDialogHeader = styled(XStack, {
    name: 'ScreenDialogHeader',
    height: 88,
    maxHeight: 88,
    pt: 16,
    px: 24,
});

const ScreenDialogMain = styled(View, {
    name: 'ScreenDialogMain',
    px: 24,
    pb: 24,
    width: '100%',
    flex: 1,
    minHeight: 0,
});

export const ScreenDialogLayout = withStaticProperties(ScreenDialogFrame, {
    Header: ScreenDialogHeader,
    Main: ScreenDialogMain,
});

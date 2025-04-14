import { View, YStack, styled, withStaticProperties } from 'tamagui';

const Frame = styled(YStack, {
    name: 'CompactScreenContainer',
    backgroundColor: '$surface',
    pos: 'relative',
    maxHeight: '100%',
    maxWidth: '100%',
    fg: 1,
    flex: 1,
});

const Header = styled(View, {
    name: 'CompactScreenHeader',
    width: '100%',
});

const Content = styled(View, {
    name: 'CompactScreenContent',
    width: '100%',
    flex: 1,
    pos: 'relative',
    minHeight: 0,
    minWidth: 0,
});

const Footer = styled(View, {
    name: 'CompactScreenFooter',
    width: '100%',
});

const Action = styled(View, {
    name: 'CompactScreenAction',
    pos: 'absolute',
    bottom: 16,
    right: 16,
});

export const CompactScreen = withStaticProperties(Frame, {
    Header,
    Content,
    Footer,
    Action,
});

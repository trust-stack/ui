import { ThemeableStack, styled, withStaticProperties } from 'tamagui';

const Frame = styled(ThemeableStack, {
    name: 'BottomAppBar',
    backgroundColor: '$surfaceContainer',
    shadowColor: '$shadow_opacity',
    shadowRadius: '$shadow.2',
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 16,
    paddingLeft: 16,
});

export const BottomAppBar = withStaticProperties(Frame, {});

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GetProps, XStack, styled } from 'tamagui';

const Frame = styled(XStack, {
    name: 'NavBar',
    justifyContent: 'space-around',
    backgroundColor: '$surfaceContainer',
    height: 80,
    pb: 16,
    pt: 12,
});

export const NavBar = Frame.styleable((props, ref) => {
    const insets = useSafeAreaInsets();
    return (
        <Frame
            {...props}
            ref={ref}
            pb={insets.bottom + 16}
            height={insets.bottom + 80}
        />
    );
});

export type NavBarProps = GetProps<typeof NavBar>;

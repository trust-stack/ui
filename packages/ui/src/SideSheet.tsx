import { X } from '@tamagui/lucide-icons';
import { ComponentProps } from 'react';
import { Dimensions } from 'react-native';
import {
    ScrollView,
    Dialog as TDialog,
    View,
    XStack,
    YStack,
    styled,
    useThemeName,
} from 'tamagui';
import { Dialog } from './Dialog';
import { Divider } from './Divider';
import { IconButton } from './IconButton';
import { Title } from './typography';

export type SideSheetProps = {
    readonly open: boolean;
    readonly onOpenChange: (o: boolean) => void;
    readonly children?: React.ReactNode;
    readonly title: string;
    readonly Action?: React.ReactNode;
    readonly width?: number;
} & ComponentProps<typeof Container>;

export function SideSheet({
    open,
    onOpenChange,
    children,
    title,
    Action,
    width = 400,
    ...props
}: SideSheetProps): JSX.Element {
    const theme = useThemeName();

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <Dialog.Portal key={'portal'}>
                <Dialog.Overlay key={`overlay`} />

                <Container
                    {...props}
                    theme={theme}
                    width={width}
                    key={`sheet-container`}
                    enterStyle={{
                        x: width,
                    }}
                    exitStyle={{ x: width }}
                >
                    <YStack pt={24} pl={16} pr={24} h={'100%'} gap={8} fg={1}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {children}
                        </ScrollView>

                        <View fg={1} />

                        {Action && (
                            <View ml={-16} mr={-24}>
                                <Divider w={'100%'} mb={4} />
                                <XStack
                                    bottom={0}
                                    justifyContent="flex-end"
                                    px={24}
                                    py={16}
                                >
                                    {Action}
                                </XStack>
                            </View>
                        )}
                    </YStack>
                </Container>
            </Dialog.Portal>
        </Dialog>
    );
}

const { height: HEIGHT } = Dimensions.get('window');

const Container = styled(TDialog.Content, {
    name: 'SideSheetContainer',
    elevate: true,
    // animateOnly: ['width'],
    bblr: '$shape.corner_l',
    btlr: '$shape.corner_l',
    btrr: 0,
    bbrr: 0,
    style: {
        position: 'fixed',
    },
    right: 0,
    top: 0,
    height: HEIGHT,
    maxHeight: HEIGHT,
    backgroundColor: '$surface',
    animation: 'medium',
    overflow: 'hidden',
    enterStyle: {
        x: 400,
    },
    exitStyle: { x: 800 },
});

import { Meta } from '@storybook/react';
import { View, YStack } from 'tamagui';
import { BottomAppBar } from './BottomAppBar';

export default {
    component: BottomAppBar,
    parameters: {
        layout: 'fullscreen',
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
    decorators: [
        (Story) => (
            <View
                style={{ width: '100vw', height: '100vh' }}
                backgroundColor={'$primaryContainer'}
            >
                <Story />
            </View>
        ),
    ],
} as Meta<typeof BottomAppBar>;

export const Example = () => (
    <YStack width={'100%'} height={'100%'} justifyContent="flex-end">
        <BottomAppBar />
    </YStack>
);

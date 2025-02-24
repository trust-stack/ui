import { Meta, StoryObj } from '@storybook/react';
import { Home, Rocket, SunMedium, Tractor } from '@tamagui/lucide-icons';
import { View, YStack } from 'tamagui';
import { NavBar } from './NavBar';

export default {
    component: NavBar,
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <YStack style={{ height: '100vh' }}>
                <View fg={1} />
                <Story />
            </YStack>
        ),
    ],
} as Meta<typeof NavBar>;

type Story = StoryObj<typeof NavBar>;

export const WithAction: Story = {
    args: {
        items: [
            {
                label: 'Home',
                Icon: Home,
                onPress: () => {},
            },
            {
                label: 'Harvest',
                Icon: Tractor,
                onPress: () => {},
            },
            {
                label: 'Sow',
                Icon: SunMedium,
                onPress: () => {},
            },
            {
                label: 'Tasks',
                Icon: Rocket,
                onPress: () => {},
            },
        ],
    },
};

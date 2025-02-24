import { Meta } from '@storybook/react';
import { useState } from 'react';
import { View, YStack } from 'tamagui';
import { Tabs, TabsContainer } from './Tabs';
import { toCapitalCase } from './render';

export default {
    component: TabsContainer,
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <View style={{ height: '100vh', display: 'flex' }}>
                <Story />
            </View>
        ),
    ],
} as Meta<typeof TabsContainer>;

export const Primary = () => {
    const [value, setValue] = useState<string>('one');

    return (
        <YStack gap={40}>
            <Tabs
                value={value}
                onChange={setValue}
                items={['one', 'two', 'three'].map((v) => ({
                    label: toCapitalCase(v),
                    value: v,
                }))}
            />

            <Tabs
                value={value}
                shiftLeft
                onChange={setValue}
                items={['one', 'two', 'three'].map((v) => ({
                    label: toCapitalCase(v),
                    value: v,
                }))}
            />
        </YStack>
    );
};

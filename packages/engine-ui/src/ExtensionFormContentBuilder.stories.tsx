import { Meta, StoryObj } from '@storybook/react';
import { View } from '@truststack/ui';
import { extensionSchema } from './__mocks__';
import { ExtensionFormContentBuilder } from './ExtensionFormContentBuilder';

export default {
    title: 'engine/ExtensionFormContentBuilder',
    component: ExtensionFormContentBuilder,
    decorators: [
        (Story) => (
            <View maxWidth={800}>
                <Story />
            </View>
        ),
    ],
} as Meta<typeof ExtensionFormContentBuilder>;

type Story = StoryObj<typeof ExtensionFormContentBuilder>;

export const Default: Story = {
    args: {
        schema: extensionSchema as any,
    },
};

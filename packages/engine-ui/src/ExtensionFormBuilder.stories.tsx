import { Meta, StoryObj } from '@storybook/react';
import { View } from '@truststack/ui';
import { extensionSchema } from './__mocks__';
import { ExtensionFormBuilder } from './ExtensionFormBuilder';

export default {
    title: 'engine/ExtensionFormBuilder',
    component: ExtensionFormBuilder,
    decorators: [
        (Story) => (
            <View maxWidth={800}>
                <Story />
            </View>
        ),
    ],
} as Meta<typeof ExtensionFormBuilder>;

type Story = StoryObj<typeof ExtensionFormBuilder>;

export const Default: Story = {
    args: {
        schema: extensionSchema as any,
    },
};

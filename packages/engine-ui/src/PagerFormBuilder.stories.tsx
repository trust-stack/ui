import { Meta, StoryObj } from '@storybook/react';
import { View } from '@truststack/ui';
import { mock } from './__mocks__';
import { PagerFormBuilder } from './PagerFormBuilder';

export default {
    title: 'engine/PagerFormBuilder',
    component: PagerFormBuilder,
    decorators: [
        (Story) => (
            <View maxWidth={800}>
                <Story />
            </View>
        ),
    ],
    args: {
        formDto: mock,
    },
} as Meta<typeof PagerFormBuilder>;

type Story = StoryObj<typeof PagerFormBuilder>;

export const Web: Story = {};

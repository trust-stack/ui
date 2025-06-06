import { Meta, StoryObj } from '@storybook/react';
import { View } from '@truststack/ui';
import data from './example.schema.json';
import { PagerForm as PagerFormDto } from './generated';
import { PagerFormBuilder } from './PagerFormBuilder';

export default {
    title: 'SDUI/PagerFormBuilder',
    component: PagerFormBuilder,
    decorators: [
        (Story) => (
            <View maxWidth={800}>
                <Story />
            </View>
        ),
    ],
    args: {
        formDto: data as PagerFormDto,
    },
} as Meta<typeof PagerFormBuilder>;

type Story = StoryObj<typeof PagerFormBuilder>;

export const Web: Story = {};

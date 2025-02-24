import { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'tamagui';
import { HoldButton } from './HoldButton';

export default {
    component: HoldButton,
    decorators: [
        (Story) => (
            <Stack maw={300}>
                <Story />
            </Stack>
        ),
    ],
} as Meta<typeof HoldButton>;

type Story = StoryObj<typeof HoldButton>;

export const HoldToDelete: Story = {};

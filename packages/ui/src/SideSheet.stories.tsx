import { Meta, StoryObj } from '@storybook/react';
import { SideSheet } from './SideSheet';

export default {
    component: SideSheet,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof SideSheet>;

type Story = StoryObj<typeof SideSheet>;

export const Modal: Story = {
    args: {
        open: true,
        title: 'Sheet Title',
    },
};

import { Meta, StoryObj } from '@storybook/react';
import { SearchList } from './SearchList';

export default {
    component: SearchList,
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
    },
} as Meta<typeof SearchList>;

type Story = StoryObj<typeof SearchList>;

export const Search: Story = {
    args: {
        onChange: () => {},
        value: 'B',
        searchFunc: async () => {
            await sleep(1500);
            return [
                { label: 'Result A', value: 'A' },
                { label: 'Result B', value: 'B' },
                { label: 'Result C', value: 'C' },
            ];
        },
    },
};

export const NoResults: Story = {
    args: {
        onChange: () => {},
        value: 'B',
        searchFunc: async () => {
            await sleep(500);
            return [];
        },
    },
};

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

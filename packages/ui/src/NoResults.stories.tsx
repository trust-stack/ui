import { Meta, StoryObj } from '@storybook/react';
import { NoResults } from './NoResults';
import { RenderStage } from './storybook-utils';

export default {
    component: NoResults,
    decorators: [
        (Story) => (
            <RenderStage>
                <Story />
            </RenderStage>
        ),
    ],
} as Meta<typeof NoResults>;

type Story = StoryObj<typeof NoResults>;

export const Simple: Story = {
    args: {
        entity: 'Entity',
    },
};

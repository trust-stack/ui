import { Meta, StoryObj } from '@storybook/react';
import { View } from 'tamagui';
import { ImageCarousel } from './ImageCarousel';

export default {
    component: ImageCarousel,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <View maxWidth={600}>
                <Story />
            </View>
        ),
    ],
} as Meta<typeof ImageCarousel>;

type Story = StoryObj<typeof ImageCarousel>;

export const Carousel: Story = {
    args: {
        images: Array(3).fill({
            src: 'https://picsum.photos/200/300',
            label: 'Image Label',
        }),
    },
};

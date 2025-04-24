import { Meta, StoryObj } from '@storybook/react';
import { View } from '@truststack/ui';
import { MapboxProvider } from './MapboxProvider';
import { HeatMap } from './HeatMap';

const MAP_TOKEN =
    'pk.eyJ1IjoiaGFybGV5amFja3Rob21hcyIsImEiOiJja3VmOXZxOHAxc2Y3MnBtbnNpZzU5ejZ2In0.X2haU6DH-ahqyu1EiK-0VQ';

export default {
    component: HeatMap,
    title: 'Map/HeatMap',
    decorators: [
        (Story) => (
            <MapboxProvider token={MAP_TOKEN}>
                <View width={800} height={800}>
                    <Story />
                </View>
            </MapboxProvider>
        ),
    ],
} as Meta;

type Story = StoryObj<typeof HeatMap>;

export const Heat: Story = {
    args: {
        layer: 'heatmap',
        coordinates: Array.from({ length: 500 }, () => [
            // Australia bounds roughly:
            // Longitude: 113°E to 154°E
            // Latitude: 10°S to 44°S
            113 + Math.random() * (154 - 113), // Random longitude between 113 and 154
            -(10 + Math.random() * (44 - 10)), // Random latitude between -10 and -44
        ]),
    },
};

export const Marker: Story = {
    args: {
        layer: 'marker',
        coordinates: Array.from({ length: 500 }, () => [
            // Australia bounds roughly:
            // Longitude: 113°E to 154°E
            // Latitude: 10°S to 44°S
            113 + Math.random() * (154 - 113), // Random longitude between 113 and 154
            -(10 + Math.random() * (44 - 10)), // Random latitude between -10 and -44
        ]),
    },
};

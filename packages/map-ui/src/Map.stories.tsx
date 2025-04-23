import { Meta, StoryObj } from '@storybook/react';
import { View } from '@truststack/ui';
import { MapboxProvider } from './MapboxProvider';
import { Map } from './Map';

const MAP_TOKEN =
    'pk.eyJ1IjoiaGFybGV5amFja3Rob21hcyIsImEiOiJja3VmOXZxOHAxc2Y3MnBtbnNpZzU5ejZ2In0.X2haU6DH-ahqyu1EiK-0VQ';

export default {
    component: Map,
    title: 'Map/Map',
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

type Story = StoryObj<typeof Map>;

export const WithMarkers: Story = {
    args: {
        markers: [
            [151.2093, -33.8688], // Sydney
            [144.9631, -37.8136], // Melbourne
            [153.026, -27.4705], // Brisbane
        ],
    },
};

import { Meta } from '@storybook/react';
import { Text } from 'tamagui';
import { Sheet } from './Sheet';

export default {
    component: Sheet,
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
        layout: 'fullscreen',
    },
} as Meta<typeof Sheet>;

export const Modal = () => (
    <Sheet open modal snapPoints={[80, 50, 25]}>
        <Sheet.Handle />
        <Sheet.Frame>
            <Text>Hello</Text>
        </Sheet.Frame>
        <Sheet.Overlay />
    </Sheet>
);

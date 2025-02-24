import { Meta } from '@storybook/react';
import { View } from 'tamagui';
import { Progress } from './Progress';

export default {
    component: Progress,
    decorators: [
        (Story) => (
            <View margin={20} width={600} backgroundColor={'$surface'}>
                <Story />
            </View>
        ),
    ],
} as Meta<typeof Progress>;

export const Determinate = () => (
    <Progress value={0.4} width={'100%'}>
        <Progress.Indicator />
        <Progress.Track />
        <Progress.Target />
    </Progress>
);

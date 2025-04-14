import { Meta } from '@storybook/react';
import { XStack } from 'tamagui';
import { RenderStage } from '../storybook-utils';
import { MonthPicker } from './MonthPicker';

export default {
    component: MonthPicker,
    decorators: [
        (Story) => (
            <RenderStage h={300} ai="center">
                <Story />
            </RenderStage>
        ),
    ],
} as Meta<typeof MonthPicker>;

export const Picker = () => {
    return (
        <XStack>
            <MonthPicker value={'October'} year={2025} />
        </XStack>
    );
};

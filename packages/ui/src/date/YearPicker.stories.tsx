import { Meta } from '@storybook/react';
import { XStack } from 'tamagui';
import { RenderStage } from '../storybook-utils';
import { YearPicker } from './YearPicker';

export default {
    component: YearPicker,
    decorators: [
        (Story) => (
            <RenderStage h={300} ai="center">
                <Story />
            </RenderStage>
        ),
    ],
} as Meta<typeof YearPicker>;

export const Picker = () => {
    return (
        <XStack>
            <YearPicker value={2024} />
        </XStack>
    );
};

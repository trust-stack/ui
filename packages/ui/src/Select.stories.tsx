import { Meta } from '@storybook/react';
import { YStack } from 'tamagui';
import { Select } from './Select';
import { RenderStage, RenderVariants } from './storybook-utils';

export default {
    title: 'Select',
    component: Select,
} as Meta<typeof Select>;

const options = [
    { label: 'Option A', value: 'A' },
    { label: 'Option B', value: 'B' },
];

export const Variants = () => (
    <YStack gap={'$2'}>
        <RenderStage>
            <RenderVariants title="Default">
                <Select label="Default" options={options} value={'A'} />
            </RenderVariants>
        </RenderStage>

        <RenderStage>
            <RenderVariants title="Error">
                <Select label="Error" options={options} value={'A'} error />
            </RenderVariants>
        </RenderStage>

        <RenderStage>
            <RenderVariants title="Disabled">
                <Select
                    label="Disabled"
                    options={options}
                    disabled
                    value={undefined}
                />
            </RenderVariants>
        </RenderStage>

        <RenderStage>
            <RenderVariants title="Loading">
                <Select
                    label="Loading"
                    options={options}
                    loading
                    value={undefined}
                />
            </RenderVariants>
        </RenderStage>
    </YStack>
);

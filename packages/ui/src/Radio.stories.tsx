import { Meta } from '@storybook/react';
import { useState } from 'react';
import { YStack } from 'tamagui';
import { Radio, RadioGroup } from './Radio';
import { RenderStage, RenderVariants } from './storybook-utils';

export default {
    component: Radio,
} as Meta<typeof Radio>;

export const Components = () => {
    const [value, setValue] = useState<string>('hello');

    return (
        <YStack gap={40}>
            <RenderVariants title="Individual Radio">
                <RenderStage>
                    <Radio />
                    <Radio selected />
                </RenderStage>
            </RenderVariants>

            <RenderVariants title="Radio Group">
                <RenderStage>
                    <RadioGroup
                        value={value}
                        onChange={setValue}
                        items={[
                            {
                                label: 'Hello',
                                value: 'hello',
                            },
                            {
                                label: 'World',
                                value: 'world',
                            },
                        ]}
                    />
                </RenderStage>
            </RenderVariants>
        </YStack>
    );
};

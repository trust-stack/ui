import { Meta } from '@storybook/react';
import { YStack } from 'tamagui';
import { Checkbox } from './Checkbox';
import { RenderStage, RenderVariants } from './storybook-utils';

export default { component: Checkbox } as Meta<typeof Checkbox>;

export const Checkboxes = () => {
    return (
        <YStack gap={'$6'}>
            {[3, 4, 5, 6].map((index) => (
                <RenderStage>
                    <RenderVariants title={`Size: $${index}`}>
                        <Checkbox />
                    </RenderVariants>
                </RenderStage>
            ))}
        </YStack>
    );
};

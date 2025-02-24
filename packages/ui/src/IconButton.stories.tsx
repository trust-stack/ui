import { Meta } from '@storybook/react';
import { Heart } from '@tamagui/lucide-icons';
import { YStack } from 'tamagui';
import { IconButton } from './IconButton';
import { RenderStage } from './storybook-utils';

export default {
    component: IconButton,
} as Meta<typeof IconButton>;

export const Variants = () => (
    <YStack gap={'$6'}>
        <RenderStage>
            <IconButton variant="filled">
                <IconButton.Icon icon={Heart} />
            </IconButton>

            <IconButton variant="filled-tonal">
                <IconButton.Icon icon={Heart} />
            </IconButton>

            <IconButton variant="outlined">
                <IconButton.Icon icon={Heart} />
            </IconButton>

            <IconButton variant="standard">
                <IconButton.Icon icon={Heart} />
            </IconButton>
        </RenderStage>
    </YStack>
);

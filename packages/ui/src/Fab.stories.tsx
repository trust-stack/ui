import { Meta } from '@storybook/react';
import { ChevronLeft } from '@tamagui/lucide-icons';
import { YStack } from 'tamagui';
import { Fab } from './Fab';
import { RenderStage } from './storybook-utils';

export default {
    component: Fab,
} as Meta<typeof Fab>;

export const Variants = () => {
    return (
        <YStack gap={'$4'}>
            <RenderStage>
                <Fab>
                    <Fab.Icon icon={ChevronLeft} />
                </Fab>

                <Fab variant="secondary">
                    <Fab.Icon icon={ChevronLeft} />
                </Fab>

                <Fab variant="surface">
                    <Fab.Icon icon={ChevronLeft} />
                </Fab>
            </RenderStage>
        </YStack>
    );
};

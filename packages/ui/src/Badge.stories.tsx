import { Meta } from '@storybook/react';
import { Filter } from '@tamagui/lucide-icons';
import { Badge } from './Badge';
import { IconButton } from './IconButton';
import { RenderStage } from './storybook-utils';

export default {
    component: Badge,
} as Meta<typeof Badge>;

export const Variants = () => {
    return (
        <RenderStage>
            <Badge variant="small" visible>
                <IconButton variant="standard">
                    <IconButton.Icon Icon={Filter} />
                </IconButton>
                <Badge.Indicator />
            </Badge>
        </RenderStage>
    );
};

import { Meta } from '@storybook/react';
import { Heart } from '@tamagui/lucide-icons';
import { YStack } from 'tamagui';
import {
    ListItem,
    ListItemCheckbox,
    ListItemIconLeft,
    ListItemIconRight,
    ListItemTrail,
} from './ListItem';

export default {
    component: ListItem,
} as Meta<typeof ListItem>;

export const Variants = () => (
    <YStack
        bc={'$background'}
        h={600}
        w={'$20'}
        m={'auto'}
        jc="center"
        ai={'center'}
        gap={'$2'}
    >
        <ListItemIconLeft
            heading="Icon Left"
            subtitle="Icon sits to the left"
            icon={Heart}
        />

        <ListItemIconRight
            heading="Icon Right"
            subtitle="Icon sits to the right"
            icon={Heart}
        />

        <ListItemTrail
            heading="Trailing text"
            subtitle="Trailing text to the left"
            trail="+100"
        />

        <ListItemCheckbox
            heading="With checkbox"
            subtitle="Checkbox to the left"
        />
    </YStack>
);

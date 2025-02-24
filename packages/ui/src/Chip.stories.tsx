import { Meta } from '@storybook/react';
import { Calendar, Check, X } from '@tamagui/lucide-icons';
import { Chip } from './Chip';
import { RenderStage } from './storybook-utils';

export default {
    component: Chip,
} as Meta<typeof Chip>;

export const Variants = () => (
    <RenderStage>
        <Chip>
            <Chip.Icon icon={Calendar} />
            <Chip.Text>Assist</Chip.Text>
        </Chip>

        <Chip variant="filter">
            <Chip.Icon icon={Check} />
            <Chip.Text>Filter</Chip.Text>
        </Chip>

        <Chip variant="input">
            <Chip.Text>Input</Chip.Text>
            <Chip.Icon icon={X} />
        </Chip>

        <Chip variant="suggestion">
            <Chip.Text>Suggestion</Chip.Text>
        </Chip>
    </RenderStage>
);

import { Meta } from '@storybook/react';
import { Radio } from '@tamagui/lucide-icons';
import { SegmentButton, SegmentButtonGroup } from './SegmentButton';

export default {
    component: SegmentButton,
} as Meta<typeof SegmentButton>;

export const Basic = () => (
    <SegmentButtonGroup
        value={'podcast'}
        onChange={() => {}}
        items={[
            {
                label: 'Podcast',
                value: 'podcast',
                Icon: Radio,
            },
            {
                label: 'Books',
                value: 'books',
            },
            {
                label: 'Movies',
                value: 'movies',
            },
        ]}
    />
);

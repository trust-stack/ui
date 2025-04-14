import { Meta } from '@storybook/react';
import { useState } from 'react';
import { RenderStage } from '../storybook-utils';
import { DateTimePicker } from './DateTimePicker';

export default {
    component: DateTimePicker,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof DateTimePicker>;

const date = new Date();

export const Variants = () => {
    const [date, setDate] = useState(new Date());
    return (
        <RenderStage>
            <DateTimePicker
                label="Preset Date"
                supportingText="Basic picker"
                value={date}
                onChange={setDate}
            />

            <DateTimePicker
                label="Error"
                supportingText="This is in an error state"
                value={date}
                onChange={setDate}
                error
            />

            <DateTimePicker
                label="Disabled"
                supportingText="This is in an loading state"
                value={date}
                onChange={setDate}
                disabled
            />

            <DateTimePicker
                label="Loading"
                supportingText="This is an disabled state"
                value={date}
                onChange={setDate}
                loading
            />
        </RenderStage>
    );
};

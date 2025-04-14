import { Meta } from '@storybook/react';
import { RenderStage } from '../storybook-utils';
import { DatePicker } from './DatePicker';

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 5);

export default {
    component: DatePicker,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof DatePicker>;

export const Variants = () => {
    return (
        <RenderStage>
            <DatePicker
                label="Preset Date"
                supportingText="Basic picker"
                value={currentDate}
                onChange={(date) => console.log(date)}
            />

            <DatePicker
                label="Error"
                value={currentDate}
                supportingText="This is in an error state"
                onChange={(date) => console.log(date)}
                error
            />

            <DatePicker
                label="Disabled"
                value={currentDate}
                supportingText="This is in an loading state"
                onChange={(date) => console.log(date)}
                disabled
            />

            <DatePicker
                label="Loading"
                value={currentDate}
                supportingText="This is an disabled state"
                onChange={(date) => console.log(date)}
                loading
            />
        </RenderStage>
    );
};

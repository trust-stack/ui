import { Meta } from '@storybook/react';
import { RenderStage } from '../storybook-utils';
import { DateRangePicker } from './DateRangePicker';

export default {
    component: DateRangePicker,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof DateRangePicker>;

export const Variants = () => {
    return (
        <RenderStage>
            <DateRangePicker
                label="Basic"
                supportingText="Basic range picker"
                onChange={() => {}}
            />
            <DateRangePicker
                label="Error"
                error
                supportingText="This is in an error state"
                onChange={() => {}}
            />
            <DateRangePicker
                label="Loading"
                supportingText="This is in an loading state"
                loading
                onChange={() => {}}
            />
            <DateRangePicker
                label="Disabled"
                disabled
                supportingText="This is an disabled state"
                onChange={() => {}}
            />
        </RenderStage>
    );
};

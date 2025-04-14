import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { date, object } from 'yup';
import { FormProvider } from '../form/context';
import { FormDateTimePicker } from './FormDateTimePicker';

const schema = object({
    test: date(),
});

export default {
    component: FormDateTimePicker,
    decorators: [
        (Story) => {
            const formMethods = useForm({
                resolver: yupResolver(schema),
            });

            return (
                <FormProvider
                    formMethods={formMethods}
                    submitHandler={() => {}}
                >
                    <Story />
                </FormProvider>
            );
        },
    ],
    args: {
        id: 'test',
        label: 'Date and Time',
    },
} as Meta<typeof FormDateTimePicker>;

type Story = StoryObj<typeof FormDateTimePicker>;

export const Default: Story = {};

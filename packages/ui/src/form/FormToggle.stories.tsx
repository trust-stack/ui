import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { FormProvider } from '../form/context';
import { FormToggle } from './FormToggle';

const schema = object({
    test: string(),
});

export default {
    component: FormToggle,
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
        options: [
            { label: 'Option 1', value: 'option1' },
            { label: 'Option 2', value: 'option2' },
        ],
    },
} as Meta<typeof FormToggle>;

type Story = StoryObj<typeof FormToggle>;

export const Default: Story = {};

import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { H4 } from 'tamagui';
import { FormProvider } from '../form/context';
import { PlatformDecorator } from '../storybook-utils';
import { PagerForm } from './PagerForm.web';

export default {
    component: PagerForm,
    decorators: [
        (Story) => {
            const formMethods = useForm();

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
} as Meta<typeof PagerForm>;

type Story = StoryObj<typeof PagerForm>;

export const Web: Story = {
    args: {
        forms: [
            {
                title: 'Hello',
                content: <H4>Hello World</H4>,
            },
            {
                title: 'Good Bye',
                content: <H4>Good Bye World</H4>,
            },
        ],
    },
    decorators: [PlatformDecorator('web')],
};

export const Native: Story = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile2',
        },
        layout: 'fullscreen',
    },
    args: {
        forms: [
            {
                title: 'Hello',
                content: <H4>Hello World</H4>,
            },
            {
                title: 'Good Bye',
                content: <H4>Good Bye World</H4>,
            },
        ],
    },
    decorators: [PlatformDecorator('ios')],
};

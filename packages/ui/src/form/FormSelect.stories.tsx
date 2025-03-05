import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { TypeOf, object, string } from 'yup';
import { RenderStage } from '../storybook-utils';
import { FormSelect } from './FormSelect';
import { FormProvider } from './context';

export default {
    component: FormSelect,
    decorators: [],
} as Meta<typeof FormSelect>;

const options = [
    {
        label: 'Option A',
        value: 'A',
    },
    {
        label: 'Option B',
        value: 'B',
    },
];

export const Variants = () => {
    const formMethods = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <FormProvider formMethods={formMethods} submitHandler={() => {}}>
            <RenderStage>
                <FormSelect<FormValues>
                    id={'property'}
                    label="Standard"
                    options={options}
                    supportingText="Standard select"
                />

                <FormSelect<FormValues>
                    id={'property'}
                    label="Loading"
                    options={options}
                    loading
                    supportingText="Loading state"
                />

                <FormSelect<FormValues>
                    id={'property'}
                    label="Error"
                    options={options}
                    error
                    supportingText="Error state"
                />

                <FormSelect<FormValues>
                    id={'property'}
                    label="Disabled"
                    options={options}
                    disabled
                    supportingText="Disabled state"
                />
            </RenderStage>
        </FormProvider>
    );
};

const schema = object({
    property: string().required(),
});

type FormValues = TypeOf<typeof schema>;

import { yupResolver } from '@hookform/resolvers/yup';
import { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { YStack } from 'tamagui';
import { object, number } from 'yup';
import { RenderStage } from '../storybook-utils';
import { FormNumericalInput } from './FormNumericalInput';
import { FormProvider } from './context';

const schema = object({
    test: number(),
});

export default {
    component: FormNumericalInput,
} as Meta<typeof FormNumericalInput>;

export const Variants = () => {
    const formMethods = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <FormProvider formMethods={formMethods} submitHandler={() => {}}>
            <YStack gap={'$4'}>
                <RenderStage>
                    <FormNumericalInput
                        id="test"
                        label="Label"
                        variant="outlined"
                        helperText="Helper text..."
                    />

                    <FormNumericalInput
                        id="test"
                        label="Label"
                        variant="outlined"
                        error
                        helperText="Helper text..."
                    />

                    <FormNumericalInput
                        id="test"
                        label="Label"
                        variant="outlined"
                        disabled
                        helperText="Helper text..."
                    />

                    <FormNumericalInput
                        id="test"
                        label="Loading"
                        variant="outlined"
                        loading
                        helperText="Helper text..."
                    />
                </RenderStage>
            </YStack>
        </FormProvider>
    );
};

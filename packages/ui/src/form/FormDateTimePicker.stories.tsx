import { Meta } from '@storybook/react';
import { YStack } from 'tamagui';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { date, object } from 'yup';
import { RenderStage } from '../storybook-utils';
import { FormProvider } from '../form/context';
import { FormDateTimePicker } from './FormDateTimePicker';

const schema = object({
    test: date(),
});

export default {
    component: FormDateTimePicker,
} as Meta<typeof FormDateTimePicker>;

export const Variants = () => {
    const formMethods = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <FormProvider formMethods={formMethods} submitHandler={() => {}}>
            <YStack gap={'$4'}>
                <RenderStage>
                    <FormDateTimePicker
                        id="test"
                        label="Date and Time"
                        helperText="Without Now Button"
                        withNow={false}
                    />
                    <FormDateTimePicker
                        id="test"
                        label="Date and Time"
                        helperText="With Now Button"
                        withNow
                    />
                </RenderStage>
            </YStack>
        </FormProvider>
    );
};

import { Grid, YStack } from '@truststack/ui';
import {
    FormCheckbox,
    FormInput,
    FormNumericalInput,
    FormProvider,
} from '@truststack/form-ui';
import { useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { buildYup } from 'schema-to-yup';

export type ExtensionFormContentBuilderProps = {
    readonly schema: ExtensionSchema;
    readonly onChange?: (values: any) => void;
};

export function ExtensionFormContentBuilder({
    schema,
    onChange,
}: ExtensionFormContentBuilderProps) {
    const yupSchema = useMemo(() => buildYup(schema), [schema]);

    const formMethods = useForm({
        resolver: yupResolver(yupSchema as any),
        mode: 'onChange',
        criteriaMode: 'all',
        reValidateMode: 'onChange',
    });

    useEffect(() => {
        const subscription = formMethods.watch((values) => {
            onChange?.(values);
        });

        return () => subscription.unsubscribe();
    }, [formMethods, onChange]);

    return (
        <FormProvider formMethods={formMethods} submitHandler={() => {}}>
            <YStack gap={4}>
                <Grid>
                    {Object.entries(schema.properties).map(([key, value]) => (
                        <Grid.Item
                            key={key}
                            exp={value.expanded}
                            compact={value.compact}
                        >
                            <FormField
                                property={{ key, value }}
                                required={schema.required}
                            />
                        </Grid.Item>
                    ))}
                </Grid>
            </YStack>
        </FormProvider>
    );
}

type FormFieldProps = {
    readonly property: {
        key: string;
        value: Property;
    };
    readonly required: string[];
};

function FormField({ property, required }: FormFieldProps) {
    const isRequired = useMemo(
        () => required.includes(property.key),
        [required, property.key]
    );

    switch (property.value.type) {
        case 'number':
            return (
                <FormNumericalInput
                    id={property.key}
                    key={property.key}
                    label={property.value.description}
                    required={isRequired}
                />
            );
        case 'string':
            return (
                <FormInput
                    id={property.key}
                    key={property.key}
                    label={property.value.description}
                    required={isRequired}
                />
            );
        case 'boolean':
            return (
                <FormCheckbox
                    id={property.key}
                    key={property.key}
                    label={property.value.description}
                    required={isRequired}
                />
            );
        default:
            return null;
    }
}

type GridValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type Property = {
    type: 'number' | 'string' | 'boolean';
    description?: string;
    expanded?: GridValue;
    compact?: GridValue;
};

type Properties = {
    [key: string]: Property;
};

type ExtensionSchema = {
    properties: Properties;
    required: string[];
};

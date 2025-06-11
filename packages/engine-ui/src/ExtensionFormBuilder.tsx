import { YStack, toCapitalCase } from '@truststack/ui';
import {
    FormInput,
    FormNumericalInput,
    FormProvider,
} from '@truststack/form-ui';
import { useMemo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { buildYup } from 'schema-to-yup';

export type ExtensionFormBuilderProps = {
    readonly schema: ExtensionSchema;
    readonly onChange?: (values: any) => void;
};

export function ExtensionFormBuilder({
    schema,
    onChange,
}: ExtensionFormBuilderProps) {
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
                {Object.entries(schema.properties).map(([key, value]) => (
                    <FormField
                        key={key}
                        property={{ key, value }}
                        required={schema.required}
                    />
                ))}
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
    const isRequired = required.includes(property.key);

    switch (property.value.type) {
        case 'number':
            return (
                <FormNumericalInput
                    id={property.key}
                    key={property.key}
                    label={toCapitalCase(property.key)}
                    required={isRequired}
                />
            );
        case 'string':
            return (
                <FormInput
                    id={property.key}
                    key={property.key}
                    label={toCapitalCase(property.key)}
                    required={isRequired}
                />
            );
        default:
            <></>;
    }
}

type Property = {
    type: 'number' | 'string';
};

type Properties = {
    [key: string]: Property;
};

type ExtensionSchema = {
    properties: Properties;
    required: string[];
};

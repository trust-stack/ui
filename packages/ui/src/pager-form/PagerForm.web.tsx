import { XStack, YStack } from 'tamagui';
import { FieldValues, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
import { useFormContext } from '../form/context';
import { Button } from '../Button';
import { Card, CardProps } from '../Card';
import { Title } from '../typography';
import { PageFormProps, PagerFormProps } from './types';

export function PagerForm<TFieldValues extends FieldValues>({
    forms,
    onSubmit,
    submitting,
}: PagerFormProps<TFieldValues>): JSX.Element {
    const { formState } = useFormContext<TFieldValues>();

    const disabledSubmit = submitting || !formState.isValid;

    return (
        <YStack gap={20} flexShrink={1}>
            {forms
                .filter((f) => !f.hidden)
                .map((f, index) => (
                    <PagerCard
                        width={'100%'}
                        key={`form-card-${index}`}
                        {...f}
                    />
                ))}

            <XStack jc="flex-end">
                <Button
                    variant="tonal-success"
                    onPress={onSubmit}
                    disabled={disabledSubmit}
                    loading={submitting}
                >
                    <Button.Spinner />
                    <Button.Text>Submit</Button.Text>
                </Button>
            </XStack>
        </YStack>
    );
}

function PagerCard<TFieldValues extends FieldValues>({
    id,
    title,
    content,
    ...props
}: PageFormProps<TFieldValues> & CardProps): JSX.Element {
    let error: boolean;

    const {
        formState: { errors },
        control,
        trigger,
    } = useFormContext<TFieldValues>();

    const watch = Array.isArray(id)
        ? useWatch({ control, name: id })
        : useWatch({ control, name: id });

    if (Array.isArray(id)) {
        error = !!id.find((i) => !!errors[i]);
    } else {
        error = !!errors[id];
    }

    useEffect(() => {
        trigger(id);
    }, [watch]);

    return (
        <Card
            borderColor={error ? '$warning' : '$success'}
            backgroundColor={'$surfaceContainerLowest'}
            {...props}
        >
            <Card.Header>
                <Title size="large">{title}</Title>
            </Card.Header>
            <Card.Body>
                {typeof content == 'function' ? content() : content}
            </Card.Body>
        </Card>
    );
}

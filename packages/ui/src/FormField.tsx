import {
    YStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Body } from './typography';

const FormFieldContext = createStyledContext<{
    error: boolean;
    disabled: boolean;
}>({
    error: false,
    disabled: false,
});

const FormFieldFrame = styled(YStack, {
    name: 'FormField',
    context: FormFieldContext,
    fg: 1,
    disabledStyle: {
        o: 0.4,
        pe: 'none',
    },
});

const FormFieldHelper = styled(Body, {
    name: 'FormHelper',
    context: FormFieldContext,
    size: 'small',
    col: '$onSurfaceVariant',
    variants: {
        error: {
            true: {
                col: '$error',
            },
        },
    },
});

const FormFieldLabel = styled(Body, {
    name: 'FormLabel',
    size: 'large',
    col: '$onSurfaceVariant',
    context: FormFieldContext,
    variants: {
        error: {
            true: {
                col: '$error' as any,
            },
        },
    },
});

export const FormField = withStaticProperties(FormFieldFrame, {
    Props: FormFieldContext.Provider,
    Helper: FormFieldHelper,
    Label: FormFieldLabel,
});

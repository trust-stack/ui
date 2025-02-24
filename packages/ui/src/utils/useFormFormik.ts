import { FormikHelpers, useFormik } from 'formik';
import { ObjectSchema, TypeOf } from 'yup';
import {
    getInputPropsFactory,
    getSelectInputPropsFactory,
    getSwitchPropsFactory,
    getTextInputPropsFactory,
    isDisabled,
    isDisabledFactory,
    setFieldFactory,
} from './formik';

export const useFormFormik = <VS extends ObjectSchema<{}>>(
    validationSchema: VS,
    onSubmit: (v: TypeOf<VS>, helpers?: FormikHelpers<VS>) => void,
    initialValues: Partial<TypeOf<VS>> = {},
    defaultValues: TypeOf<VS> = {}
) => {
    const formik = useFormik({
        validationSchema,
        onSubmit,
        initialValues: {
            ...defaultValues,
            ...initialValues,
        },
        enableReinitialize: true,
        validateOnMount: true,
    });

    type FormValues = TypeOf<VS>;

    return {
        formik,
        isValid: formik.isValid,
        submitForm: formik.submitForm,
        disabled: isDisabled(formik),
        isDisabled: isDisabledFactory<FormValues>(formik),
        getInputProps: getInputPropsFactory<FormValues>(formik),
        setField: setFieldFactory<FormValues>(formik),
        getSelectInputProps: getSelectInputPropsFactory<FormValues>(formik),
        getSwitchProps: getSwitchPropsFactory<FormValues>(formik),
        getTextInputProps: getTextInputPropsFactory<FormValues>(formik),
        values: formik.values,
    };
};

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
type FormContextProps<TFieldValues extends FieldValues> = ReturnType<typeof useForm<TFieldValues>> & {
    readonly submitHandler: SubmitHandler<TFieldValues>;
    readonly submitting?: boolean;
    readonly disabled?: boolean;
};
export declare const useFormContext: <TFieldValues extends FieldValues>() => FormContextProps<TFieldValues>;
type FormProviderProps<TFieldValues extends FieldValues> = {
    readonly children: React.ReactNode;
    readonly formMethods: ReturnType<typeof useForm<TFieldValues>>;
    readonly submitHandler?: SubmitHandler<TFieldValues>;
    readonly submitting?: boolean;
    readonly disabled?: boolean;
};
export declare function FormProvider<TFieldValues extends FieldValues>({ children, formMethods, submitHandler, submitting, disabled, }: FormProviderProps<TFieldValues>): JSX.Element;
export {};
//# sourceMappingURL=context.d.ts.map
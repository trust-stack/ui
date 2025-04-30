import { FieldValues, Path } from 'react-hook-form';
export type FormToggleProps<TFormFields extends FieldValues> = {
    readonly id: Path<TFormFields>;
    readonly options: {
        label: string;
        value: string;
    }[];
};
export declare function FormToggle<TFormFields extends FieldValues>({ id, options, }: FormToggleProps<TFormFields>): JSX.Element;
//# sourceMappingURL=FormToggle.d.ts.map
import { TextFieldProps } from '../form/TextField';
export type DatePickerProps = Partial<Pick<TextFieldProps, 'label' | 'disabled' | 'error' | 'loading' | 'supportingText'>> & {
    readonly value?: Date;
    readonly onChange: (date: Date) => void;
    readonly required?: boolean;
    readonly density?: '0' | '-1' | '-2' | '-3';
};
export declare function DatePicker({ value, onChange, required, ...props }: DatePickerProps): JSX.Element;
//# sourceMappingURL=DatePicker.d.ts.map
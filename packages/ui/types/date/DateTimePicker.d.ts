import { TextFieldProps } from '../form/TextField';
export type DateTimePickerProps = Partial<Pick<TextFieldProps, 'label' | 'disabled' | 'error' | 'loading' | 'supportingText' | 'variant'>> & {
    readonly value?: Date;
    readonly onChange: (date: Date) => void;
};
export declare function DateTimePicker({ value, onChange, ...props }: DateTimePickerProps): JSX.Element;
//# sourceMappingURL=DateTimePicker.d.ts.map
import { TextFieldProps } from "./TextField";
type DatePickerProps = Partial<Pick<TextFieldProps, "label" | "disabled" | "error" | "loading" | "supportingText" | "width">> & {
    readonly startDate?: Date;
    readonly endDate?: Date;
    readonly onChange: ({ startDate, endDate, }: {
        startDate: Date;
        endDate: Date;
    }) => void;
};
export declare function DateRangePicker({ startDate, endDate, onChange, ...props }: DatePickerProps): JSX.Element;
export {};
//# sourceMappingURL=DateRangePicker.d.ts.map
import { TextFieldProps } from "./TextField";
export type SelectProps<T = string> = {
    readonly options: {
        label: string;
        value: T;
    }[];
    readonly label?: string;
    readonly onValueChange?: (v: string) => void;
    readonly supportingText?: string;
    readonly variant?: "outlined" | "filled";
} & TextFieldProps;
export declare function Select({ options, label, onValueChange, disabled, value, supportingText, loading, ...props }: SelectProps): JSX.Element;
//# sourceMappingURL=Select.d.ts.map
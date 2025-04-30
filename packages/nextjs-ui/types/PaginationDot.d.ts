import { FieldValues, Path } from "react-hook-form";
export declare const DOT_SIZE = 20;
type PaginationDotProps<TFieldValues extends FieldValues> = {
    readonly completed?: boolean;
    readonly active: boolean;
    readonly onPress: VoidFunction;
    readonly id?: Path<TFieldValues> | Path<TFieldValues>[];
};
export declare function PaginationDot<TFieldValues extends FieldValues>({ completed, active, onPress, id, }: PaginationDotProps<TFieldValues>): JSX.Element;
export {};
//# sourceMappingURL=PaginationDot.d.ts.map
import { ReactNode } from "react";
import { FieldValues, Path } from "react-hook-form";
export type PagerFormProps<TFieldValues extends FieldValues> = {
    readonly forms: PageFormProps<TFieldValues>[];
    readonly onSubmit?: VoidFunction;
    readonly submitting?: boolean;
    readonly loading?: boolean;
    readonly onBack?: VoidFunction;
};
export type PageFormProps<TFieldValues extends FieldValues> = {
    title: string;
    content: ReactNode | (() => ReactNode);
    id?: Path<TFieldValues> | Path<TFieldValues>[];
    hidden?: boolean;
};
//# sourceMappingURL=PagerForm.types.d.ts.map
import { IconButtonProps } from "./IconButton";
export type DayProps = {
    readonly date: Date;
    readonly dayLabel: string;
} & Partial<IconButtonProps>;
export declare function Day({ dayLabel, date, ...props }: DayProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Day.d.ts.map
import {IconButtonProps} from "./IconButton";
export type MonthPickerProps = {
  readonly value: string;
  readonly year: number;
} & Partial<IconButtonProps>;
export declare const MONTH: string[];
export declare function MonthPicker({
  value,
  year,
  ...props
}: MonthPickerProps): JSX.Element;
//# sourceMappingURL=MonthPicker.d.ts.map

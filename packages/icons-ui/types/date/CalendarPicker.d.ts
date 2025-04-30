import {MonthType} from "@datepicker-react/hooks";
import {ViewProps} from "tamagui";
import {MonthProps} from "../Month";
export type CalendarPickerProps = {
  readonly activeMonths: MonthType[];
  readonly monthsCount?: number;
  readonly firstDayOfWeek: MonthProps["firstDayOfWeek"];
} & ViewProps;
export declare function CalendarPicker({
  activeMonths,
  monthsCount,
  firstDayOfWeek,
  ...props
}: CalendarPickerProps): JSX.Element;
//# sourceMappingURL=CalendarPicker.d.ts.map

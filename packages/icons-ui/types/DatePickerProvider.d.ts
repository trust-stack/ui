import { PropsWithChildren, ReactNode } from 'react';
interface DatepickerContext {
    rtl?: boolean;
    focusedDate: Date | null;
    goToPreviousMonths: () => void;
    goToPreviousMonthsByOneMonth: () => void;
    goToNextMonths: () => void;
    goToNextMonthsByOneMonth: () => void;
    goToPreviousYear: (numYears?: number) => void;
    goToNextYear: (numYears?: number) => void;
    onDateFocus(date: Date): void;
    onDateSelect(date: Date): void;
    onDateHover(date: Date): void;
    isDateFocused(date: Date): boolean;
    isDateSelected(date: Date): boolean;
    isDateHovered(date: Date): boolean;
    isDateBlocked(date: Date): boolean;
    isFirstOrLastSelectedDate(date: Date): boolean;
    onDayRender?(date: Date): ReactNode;
}
export declare const datepickerContextDefaultValue: {
    rtl: boolean;
    focusedDate: any;
    isDateFocused: () => boolean;
    isDateSelected: () => boolean;
    isDateHovered: () => boolean;
    isDateBlocked: () => boolean;
    isFirstOrLastSelectedDate: () => boolean;
    onDateFocus: () => void;
    onDateHover: () => void;
    onDateSelect: () => void;
    onDayRender: any;
    goToPreviousMonthsByOneMonth: () => void;
    goToPreviousMonths: () => void;
    goToNextMonthsByOneMonth: () => void;
    goToNextMonths: () => void;
    goToPreviousYear: () => void;
    goToNextYear: () => void;
};
declare const DatepickerContext: import("react").Context<DatepickerContext>;
export type DatepickerProviderProps = PropsWithChildren<DatepickerContext>;
export declare const DatepickerProvider: ({ children, ...value }: DatepickerProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useDatepickerContext: () => DatepickerContext;
export {};
//# sourceMappingURL=DatePickerProvider.d.ts.map
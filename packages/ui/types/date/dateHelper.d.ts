type MonthNamesProps = {
    options?: Intl.DateTimeFormatOptions;
    localeName?: string;
};
export declare const getLocaleDate: ({ localeName, options, date, }: MonthNamesProps & {
    date?: Date | null;
}) => string;
export declare const getLocaleDateTime: ({ localeName, options, date, }: MonthNamesProps & {
    date?: Date | null;
}) => string;
export declare const isDateValid: (date: Date) => boolean;
export {};
//# sourceMappingURL=dateHelper.d.ts.map
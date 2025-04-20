type MonthNamesProps = {
    options?: Intl.DateTimeFormatOptions;
    localeName?: string;
};

export const getLocaleDate = ({
    localeName = 'en-GB',
    options,
    date,
}: MonthNamesProps & { date?: Date | null }): string => {
    return isDateValid(date)
        ? new Intl.DateTimeFormat(
              localeName,
              options ?? {
                  month: '2-digit',
                  year: 'numeric',
                  day: '2-digit',
              }
          ).format(date)
        : '';
};

export const getLocaleDateTime = ({
    localeName = 'en-GB',
    options,
    date,
}: MonthNamesProps & { date?: Date | null }): string => {
    return isDateValid(date)
        ? new Intl.DateTimeFormat(
              localeName,
              options ?? {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false,
              }
          ).format(date)
        : '';
};

export const isDateValid = (date: Date): boolean => {
    return date && date instanceof Date && !isNaN(date?.valueOf());
};

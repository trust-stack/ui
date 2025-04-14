import { UseMonthProps, useMonth } from '@datepicker-react/hooks';
import { SizableText, Stack, XStack } from 'tamagui';
import { useMemo } from 'react';
import { Day } from './Day';

export type MonthProps = UseMonthProps;

export function Month({ year, ...props }: MonthProps) {
    const { days, weekdayLabels } = useMonth({
        ...props,
        year,
        dayLabelFormat: (date: Date) => {
            return new Intl.DateTimeFormat(undefined, {
                day: 'numeric',
            }).format(date);
        },

        weekdayLabelFormat: (date) => {
            return new Intl.DateTimeFormat(undefined, {
                weekday: 'narrow',
            }).format(date);
        },
    });

    const weeks = useMemo(() => splitIntoWeeks(days), [days]);

    return (
        <Stack maxWidth={'100%'} flexDirection="column" gap={12}>
            {/* WEEK DAY */}
            <XStack pb={16}>
                {weekdayLabels.map((dayLabel, index) => (
                    <SizableText
                        w={`14%`}
                        key={`day-label-${index}`}
                        ta={'center'}
                        col={'$onSurfaceVariant'}
                    >
                        {dayLabel}
                    </SizableText>
                ))}
            </XStack>

            {weeks.map((week, index) => (
                <XStack key={`week-${index}`}>
                    {week.map((day, index) => (
                        <Stack w={`14%`} key={`month-day-${index}`} ai="center">
                            {typeof day === 'object' && (
                                <Day
                                    dayLabel={day.dayLabel}
                                    date={day.date}
                                    key={day.date.toString()}
                                />
                            )}
                        </Stack>
                    ))}
                </XStack>
            ))}
        </Stack>
    );
}

function splitIntoWeeks<T>(array: T[]): T[][] {
    const result: T[][] = [];
    const weekLength = 7;

    for (let i = 0; i < array.length; i += weekLength) {
        const week = array.slice(i, i + weekLength);
        result.push(week);
    }

    return result;
}

import { MonthType } from '@datepicker-react/hooks';
import { View, ViewProps, XStack, YStack } from 'tamagui';
import { Month, MonthProps } from './Month';
import { MonthPickerButton } from './MonthPickerButton';
import { YearPickerButton } from './YearPickerButton';

export type CalendarPickerProps = {
    readonly activeMonths: MonthType[];
    readonly monthsCount?: number;
    readonly firstDayOfWeek: MonthProps['firstDayOfWeek'];
} & ViewProps;

export function CalendarPicker({
    activeMonths,
    monthsCount = 1,
    firstDayOfWeek,
    ...props
}: CalendarPickerProps): JSX.Element {
    return (
        <View width={'100%'} {...props}>
            <YStack>
                {activeMonths.map((month, i) => (
                    <View key={`calender-picker-${i}`}>
                        <XStack mt={8} mb={28}>
                            <MonthPickerButton
                                activeMonth={month}
                                monthsCount={monthsCount}
                                isFirst={monthsCount === 0 || i === 0}
                                isLast={
                                    monthsCount === 0 || i === monthsCount - 1
                                }
                            />

                            <YearPickerButton activeMonth={month} />
                        </XStack>

                        <Month
                            year={month.year}
                            month={month.month}
                            firstDayOfWeek={firstDayOfWeek}
                        />
                    </View>
                ))}
            </YStack>
        </View>
    );
}

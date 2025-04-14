import { MonthType } from '@datepicker-react/hooks';
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons';
import { Pressable } from 'react-native';
import { XStack } from 'tamagui';
import { Icon } from '../Icon';
import { useDatepickerContext } from './DatePickerProvider';
import { MONTH, MonthPicker } from './MonthPicker';

export type MonthPickerButtonProps = {
    readonly monthsCount: number;
    readonly activeMonth: MonthType;
    readonly isFirst: boolean;
    readonly isLast: boolean;
};

export function MonthPickerButton({
    monthsCount,
    activeMonth,
    isFirst,
    isLast,
}: MonthPickerButtonProps): JSX.Element {
    const {
        goToPreviousMonths,
        goToPreviousMonthsByOneMonth,
        goToNextMonthsByOneMonth,
        goToNextMonths,
    } = useDatepickerContext();

    return (
        <XStack
            width={'50%'}
            alignItems="center"
            justifyContent="space-between"
        >
            <Pressable
                onPress={
                    monthsCount > 1
                        ? goToPreviousMonths
                        : goToPreviousMonthsByOneMonth
                }
                disabled={!isFirst}
            >
                <Icon icon={ChevronLeft} />
            </Pressable>

            <MonthPicker
                value={MONTH[activeMonth.month]}
                year={activeMonth.year}
            />

            <Pressable
                onPress={
                    monthsCount > 1 ? goToNextMonths : goToNextMonthsByOneMonth
                }
                disabled={!isLast}
            >
                <Icon icon={ChevronRight} />
            </Pressable>
        </XStack>
    );
}

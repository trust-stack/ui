import { MonthType } from '@datepicker-react/hooks';
import { ChevronLeft, ChevronRight } from '@tamagui/lucide-icons';
import { Pressable } from 'react-native';
import { XStack } from 'tamagui';
import { Icon } from '../Icon';
import { useDatepickerContext } from './DatePickerProvider';
import { YearPicker } from './YearPicker';

export type YearPickerButtonProps = {
    readonly activeMonth: MonthType;
};

export function YearPickerButton({
    activeMonth,
}: YearPickerButtonProps): JSX.Element {
    const { goToPreviousYear, goToNextYear } = useDatepickerContext();

    return (
        <XStack
            width={'50%'}
            alignItems="center"
            justifyContent="space-between"
        >
            <Pressable onPress={() => goToPreviousYear(1)}>
                <Icon icon={ChevronLeft} />
            </Pressable>

            <YearPicker value={activeMonth.year} />

            <Pressable onPress={() => goToNextYear(1)}>
                <Icon icon={ChevronRight} />
            </Pressable>
        </XStack>
    );
}

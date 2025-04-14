import {
    OnDatesChangeProps,
    START_DATE,
    useDatepicker,
} from '@datepicker-react/hooks';
import { Calendar } from '@tamagui/lucide-icons';
import { useEffect, useState } from 'react';
import { Adapt } from 'tamagui';
import { Dialog } from '../Dialog';
import { Sheet, SheetContent } from '../Sheet';
import { TextField, TextFieldProps } from '../form/TextField';
import { CalendarPicker } from './CalendarPicker';
import { DatepickerProvider } from './DatePickerProvider';
import { getLocaleDate } from './dateHelper';

type DatePickerProps = Partial<
    Pick<
        TextFieldProps,
        'label' | 'disabled' | 'error' | 'loading' | 'supportingText' | 'width'
    >
> & {
    readonly startDate?: Date;
    readonly endDate?: Date;
    readonly onChange: ({
        startDate,
        endDate,
    }: {
        startDate: Date;
        endDate: Date;
    }) => void;
};

export function DateRangePicker({
    startDate,
    endDate,
    onChange,
    ...props
}: DatePickerProps): JSX.Element {
    const [state, setState] = useState<OnDatesChangeProps>({
        startDate: startDate,
        endDate: endDate,
        focusedInput: START_DATE,
    });

    const { activeMonths, firstDayOfWeek, ...context } = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput,
        onDatesChange: handleDateChange,
        numberOfMonths: 1,
    });

    function handleDateChange(data) {
        if (!data.focusedInput) {
            setState({ ...data, focusedInput: START_DATE });
        } else {
            setState(data);
        }
        if (typeof onChange === 'function') {
            onChange(data);
        }
    }

    const getInputValue = () => {
        if (!state.startDate && !state.endDate) return '';

        if (state.startDate && !state.endDate)
            return getLocaleDate({ date: state.startDate });

        return `${getLocaleDate({ date: state.startDate })}${
            state.endDate ? ' - ' + getLocaleDate({ date: state.endDate }) : ''
        }`;
    };

    useEffect(() => {
        setState({ ...state, startDate, endDate });
    }, [startDate, endDate]);

    return (
        <DatepickerProvider {...context}>
            <Dialog modal>
                <Dialog.Trigger
                    fg={1}
                    disabled={props.disabled}
                    padding={0}
                    bc="transparent"
                    bw={0}
                >
                    <TextField
                        {...props}
                        pointerEvents="none"
                        cursor="pointer"
                        value={getInputValue()}
                        // placeholder="DD/MM/YYYY"
                        trailingIcon={Calendar}
                    />
                </Dialog.Trigger>

                <Adapt when="sm" platform="touch">
                    <Sheet modal snapPoints={[80]} animation={'quick'}>
                        <Sheet.Overlay />
                        <Sheet.Handle />
                        <Sheet.Frame>
                            <SheetContent margin={'$spacing.compact_margin'}>
                                {/* We need to repropagate the context for this to work on Android */}
                                <DatepickerProvider {...context}>
                                    <Adapt.Contents />
                                </DatepickerProvider>
                            </SheetContent>
                        </Sheet.Frame>
                    </Sheet>
                </Adapt>

                <Dialog.Portal key={`date-time-picker-portal`}>
                    <Dialog.Overlay key={'date-time-picker-overlay'} />

                    <Dialog.Content
                        key={`date-time-picker-content`}
                        fullscreen={false}
                        backgroundColor={'$surfaceContainerLowest'}
                    >
                        <CalendarPicker
                            activeMonths={activeMonths}
                            firstDayOfWeek={firstDayOfWeek}
                        />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </DatepickerProvider>
    );
}

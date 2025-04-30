import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from "@datepicker-react/hooks";
import {Calendar} from "@truststack/icons-ui";
import {useEffect, useMemo, useState} from "react";
import {KeyboardAvoidingView} from "react-native";
import {Adapt, ScrollView, XStack, YStack} from "tamagui";
import {CalendarPicker} from "./CalendarPicker";
import {DatepickerProvider} from "./DatePickerProvider";
import {Dialog} from "./Dialog";
import {Sheet} from "./Sheet";
import {TextField, TextFieldProps} from "./TextField";
import {TimePicker} from "./TimePicker";
import {getLocaleDateTime, isDateValid} from "./dateHelper";

export type DateTimePickerProps = Partial<
  Pick<
    TextFieldProps,
    "label" | "disabled" | "error" | "loading" | "supportingText" | "variant"
  >
> & {
  readonly value?: Date;
  readonly onChange: (date: Date) => void;
};

export function DateTimePicker({
  value,
  onChange,
  ...props
}: DateTimePickerProps): JSX.Element {
  const [time, setTime] = useState<Date>(value);
  const {activeMonths, firstDayOfWeek, ...context} = useDatepicker({
    startDate: value,
    endDate: null,
    focusedInput: START_DATE,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  function handleDateChange(data: OnDatesChangeProps) {
    onChange && onChange(data.startDate);
  }

  const inputValue = useMemo(
    () => getLocaleDateTime({date: new Date(value)}),
    [value]
  );

  useEffect(() => {
    if (!value || !time) return;

    const year = value.getFullYear();
    const month = value.getMonth();
    const day = value.getDate();

    // Extract the time components from time
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const milliseconds = time.getMilliseconds();

    // Create a new date object with combined date and time components
    const newDate = new Date(
      year,
      month,
      day,
      hours,
      minutes,
      seconds,
      milliseconds
    );

    if (newDate.getTime() !== value.getTime()) {
      onChange && onChange(isDateValid(newDate) ? newDate : new Date());
    }
  }, [time]);

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
            value={inputValue}
            placeholder="DD/MM/YYYY"
            trailingIcon={Calendar}
          />
        </Dialog.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            modal
            dismissOnSnapToBottom
            snapPoints={[80]}
            moveOnKeyboardChange
            animation={"quick"}
          >
            <Sheet.Overlay />
            <Sheet.Handle />

            <Sheet.Frame p={16} pt={20}>
              {/* We need to repropagate the context for this to work on Android */}
              <DatepickerProvider {...context}>
                <Adapt.Contents />
              </DatepickerProvider>
            </Sheet.Frame>
          </Sheet>
        </Adapt>

        <Dialog.Portal key={`date-time-picker-portal`}>
          <Dialog.Overlay key={"date-time-picker-overlay"} />

          <Dialog.Content
            key={`date-time-picker-content`}
            fullscreen={false}
            backgroundColor={"$surfaceContainerLowest"}
          >
            {/* ScrollView helps the content render properly
                                when on-screen keyboard pops up on mobile */}
            <ScrollView>
              <YStack gap={16}>
                <CalendarPicker
                  col={"$onPrimaryContainer" as any}
                  activeMonths={activeMonths}
                  firstDayOfWeek={firstDayOfWeek}
                />

                <XStack justifyContent="center">
                  <KeyboardAvoidingView behavior="padding">
                    <TimePicker
                      value={value}
                      onChange={(time) => setTime(new Date(time || new Date()))}
                    />
                  </KeyboardAvoidingView>
                </XStack>
              </YStack>
            </ScrollView>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </DatepickerProvider>
  );
}

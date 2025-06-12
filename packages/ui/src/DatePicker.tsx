import {
  OnDatesChangeProps,
  START_DATE,
  useDatepicker,
} from "@datepicker-react/hooks";
import {Calendar} from "@truststack/icons-ui";
import {useState} from "react";
import {Adapt, View} from "tamagui";
import {Button} from "./Button";
import {CalendarPicker} from "./CalendarPicker";
import {DatepickerProvider} from "./DatePickerProvider";
import {Dialog} from "./Dialog";
import {Sheet, SheetContent} from "./Sheet";
import {TextField, TextFieldProps} from "./TextField";
import {getLocaleDate} from "./dateHelper";

export type DatePickerProps = Partial<
  Pick<
    TextFieldProps,
    "label" | "disabled" | "error" | "loading" | "supportingText"
  >
> & {
  readonly value?: Date;
  readonly onChange: (date: Date) => void;
  readonly required?: boolean;
  readonly density?: "0" | "-1" | "-2" | "-3";
};

export function DatePicker({
  value,
  onChange,
  required,
  ...props
}: DatePickerProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [state, setState] = useState<OnDatesChangeProps>({
    startDate: value,
    endDate: null,
    focusedInput: START_DATE,
  });

  const {activeMonths, firstDayOfWeek, ...context} = useDatepicker({
    startDate: state.startDate,
    endDate: null,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    numberOfMonths: 1,
  });

  function handleDateChange(data) {
    setState({...data, focusedInput: START_DATE});
  }

  const inputValue = getLocaleDate({date: value});
  const selectedDate = getLocaleDate({date: state.startDate});
  const label = required ? `${props.label} *` : props.label;

  return (
    <DatepickerProvider {...context}>
      <Dialog modal open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          fg={1}
          disabled={props.disabled}
          padding={0}
          bc="transparent"
          bw={0}
        >
          <TextField
            {...props}
            label={label}
            pointerEvents="none"
            placeholder="DD/MM/YYYY"
            cursor="pointer"
            value={inputValue || undefined}
            trailingIcon={Calendar}
            focusable={true}
          />
        </Dialog.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            modal
            snapPoints={[80]}
            animation={"quick"}
            dismissOnOverlayPress
          >
            <Sheet.Overlay />
            <Sheet.Handle />
            <Sheet.Frame>
              <SheetContent margin={"$spacing.compact_margin"}>
                {/* We need to repropagate the context for this to work on Android */}
                <DatepickerProvider {...context}>
                  <Adapt.Contents />
                </DatepickerProvider>
              </SheetContent>
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
            <CalendarPicker
              activeMonths={activeMonths}
              firstDayOfWeek={firstDayOfWeek}
            />
            <View marginTop={12} justifyContent="flex-end" flexDirection="row">
              <Button
                disabled={!state.startDate}
                onPress={() => {
                  onChange(state.startDate);
                  setOpen(false);
                }}
              >
                <Button.Icon Icon={Calendar} />
                <Button.Text>
                  {selectedDate ? `Confirm: ${selectedDate}` : "Select a date"}
                </Button.Text>
              </Button>
            </View>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </DatepickerProvider>
  );
}

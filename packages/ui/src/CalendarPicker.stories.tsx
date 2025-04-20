import {useDatepicker} from "@datepicker-react/hooks";
import {Meta} from "@storybook/react";
import {XStack} from "tamagui";
import {CalendarPicker} from "./CalendarPicker";
import {RenderStage} from "./storybook-utils";

export default {
  component: CalendarPicker,
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <RenderStage h={600}>
        <Story />
      </RenderStage>
    ),
  ],
} as Meta<typeof CalendarPicker>;

export const Picker = () => {
  const {activeMonths, firstDayOfWeek, ...context} = useDatepicker({
    startDate: null,
    endDate: null,
    onDatesChange: () => {},
    focusedInput: undefined,
    numberOfMonths: 1,
  });

  return (
    <XStack>
      <CalendarPicker
        activeMonths={activeMonths}
        monthsCount={1}
        firstDayOfWeek={firstDayOfWeek}
        {...context}
      />
    </XStack>
  );
};

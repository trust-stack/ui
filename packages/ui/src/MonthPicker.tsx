import {ChevronDown} from "@truststack/icons-ui";
import {useEffect, useState} from "react";
import {Pressable} from "react-native";
import {Adapt, Text, XStack, styled} from "tamagui";
import {useDatepickerContext} from "./DatePickerProvider";
import {Dialog} from "./Dialog";
import {Grid} from "./Grid";
import {Icon} from "./Icon";
import {IconButton, IconButtonProps} from "./IconButton";
import {Sheet, SheetContent} from "./Sheet";
import {Body} from "./typography";

export type MonthPickerProps = {
  readonly value: string;
  readonly year: number;
} & Partial<IconButtonProps>;

export const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function MonthPicker({
  value,
  year,
  ...props
}: MonthPickerProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMonth, setSelectedMonth] = useState<string>();
  const {onDateSelect} = useDatepickerContext();

  useEffect(() => {
    if (!selectedMonth) return;
    onDateSelect(new Date(year, MONTH.indexOf(selectedMonth)));
  }, [selectedMonth]);

  return (
    <Dialog allowFlip open={open} onOpenChange={setOpen}>
      <Pressable
        onPress={() => {
          setOpen(true);
        }}
        style={{flexGrow: 1}}
      >
        <XStack gap={4} alignItems="center" justifyContent="center">
          <Icon size={14} Icon={ChevronDown} />
          <Body textAlign="center">{value}</Body>
        </XStack>
      </Pressable>

      <Adapt when="sm" platform="touch">
        <Sheet
          modal
          snapPoints={[40]}
          dismissOnSnapToBottom
          moveOnKeyboardChange
        >
          <Sheet.Overlay />
          <Sheet.Handle />
          <Sheet.Frame>
            <SheetContent>
              <Adapt.Contents />
            </SheetContent>
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Dialog.Portal key="month-picker-portal">
        <Dialog.Overlay key="month-picker-overlay" />

        <Dialog.Content
          key="month-picker-content"
          width={360}
          marginTop={12}
          backgroundColor={"$surfaceContainerHigh"}
          borderRadius={"$shape.corner_l"}
          padding={"$spacing.margin_compact"}
          borderColor={"$color.outline"}
          borderWidth={"$border.outline"}
        >
          <Grid width={"100%"}>
            {MONTH.map((month, index) => (
              <Grid.Item compact={4} exp={4} key={`month-${index}`}>
                <MonthButton
                  onPress={() => {
                    setOpen(false);
                    setSelectedMonth(month);
                  }}
                  hoverStyle={{
                    col: "$onSurfaceVariant",
                  }}
                  col={"$onSurface"}
                  selected={month == value}
                  {...props}
                >
                  <MonthText>{month}</MonthText>
                </MonthButton>
              </Grid.Item>
            ))}
          </Grid>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

const MonthButton = styled(IconButton, {
  name: "MonthButton",
  bc: "transparent",
  m: 4,
  mb: 4,
  w: 100,
  hoverStyle: {
    col: "$onSurfaceVariant",
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "$outlineVariant",
      },
    },
  },
});

const MonthText = styled(Text, {
  name: "MonthText",
  bc: "transparent",
  variants: {
    selected: {
      true: {
        color: "$onTertiary",
      },
    },
  },
});

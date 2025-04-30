import {ChevronDown, ChevronLeft, ChevronRight} from "@truststack/icons-ui";
import {useState} from "react";
import {Pressable} from "react-native";
import {Adapt, Text, XStack, YStack, styled} from "tamagui";
import {useDatepickerContext} from "./DatePickerProvider";
import {Dialog} from "./Dialog";
import {Grid} from "./Grid";
import {Icon} from "./Icon";
import {IconButton, IconButtonProps} from "./IconButton";
import {Sheet, SheetContent} from "./Sheet";
import {Body} from "./typography";

export type YearPickerProps = {
  readonly value: number;
} & Partial<IconButtonProps>;

export function YearPicker({value, ...props}: YearPickerProps): JSX.Element {
  const [startYear, setStartYear] = useState(value - (value % 12));
  const [open, setOpen] = useState<boolean>(false);
  const {goToPreviousYear} = useDatepickerContext();

  const getYears = (start: number) => {
    return Array.from({length: 12}, (_, i) => start + i);
  };
  const nextYears = () => {
    setStartYear(startYear + 12);
  };
  const previousYears = () => {
    setStartYear(startYear - 12);
  };

  const years = getYears(startYear);
  const handelChange = (year: number) => {
    setOpen(false);
    goToPreviousYear(value - year);
  };

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
        <Sheet modal snapPoints={[40]}>
          <Sheet.Overlay />
          <Sheet.Handle />
          <Sheet.Frame>
            <SheetContent>
              <Adapt.Contents />
            </SheetContent>
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Dialog.Portal key="year-picker-portal">
        <Dialog.Overlay key="year-picker-overlay" />

        <Dialog.Content
          key="year-picker-content"
          width={360}
          marginTop={12}
          backgroundColor={"$surfaceContainerHigh"}
          borderRadius={"$shape.corner_l"}
          padding={"$spacing.margin_compact"}
          borderColor={"$color.outline"}
          borderWidth={"$border.outline"}
        >
          <YStack width={"100%"}>
            <XStack ai="center" justifyContent="center" width={"100%"}>
              <Pressable onPress={() => previousYears()}>
                <Icon icon={ChevronLeft} />
              </Pressable>

              <Body textAlign="center">{`${years[0]} - ${
                years[years.length - 1]
              }`}</Body>

              <Pressable onPress={() => nextYears()}>
                <Icon icon={ChevronRight} />
              </Pressable>
            </XStack>

            <Grid>
              {years.map((year, index) => (
                <Grid.Item
                  compact={4}
                  exp={4}
                  key={`year-${index}`}
                  ai="center"
                >
                  <YearButton
                    onPress={() => handelChange(year)}
                    hoverStyle={{
                      col: "$onSurfaceVariant",
                    }}
                    col={"$onSurface"}
                    selected={year == value}
                    {...props}
                  >
                    <YearText>{year}</YearText>
                  </YearButton>
                </Grid.Item>
              ))}
            </Grid>
          </YStack>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

const YearButton = styled(IconButton, {
  name: "YearButton",
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

const YearText = styled(Text, {
  name: "YearText",
  bc: "transparent",
  variants: {
    selected: {
      true: {
        color: "$onTertiary",
      },
    },
  },
});

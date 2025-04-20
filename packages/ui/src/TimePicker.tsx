import {useMemo} from "react";
import {Platform} from "react-native";
import {
  Input,
  ThemeableStack,
  XStack,
  XStackProps,
  YStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {isDateValid} from "./dateHelper";
import {Body, Display, Title} from "./typography";

type TimePickerProp = {
  readonly value: Date;
  readonly onChange: (value: Date) => void;
} & XStackProps;

export const TimePicker = ({value, onChange, ...props}: TimePickerProp) => {
  const handleHourChange = (input: string) => {
    // Remove non-numeric characters
    let sanitizedText = input.replace(/[^0-9]/g, "");

    // Reset to zero if "0" is entered
    if (sanitizedText.length >= 3) {
      sanitizedText = sanitizedText.slice(1, sanitizedText.length);
    }

    let numericValue = parseInt(sanitizedText, 10);
    const newDate = isDateValid(value) ? new Date(value) : new Date();

    // Reset to zero if "0" is entered
    if (
      sanitizedText.length == 3 &&
      sanitizedText.endsWith("0") &&
      !sanitizedText.startsWith("0")
    ) {
      numericValue = 0;
    } else if (numericValue > 24) {
      numericValue = 0;
    }

    newDate.setHours(numericValue || 0);
    onChange(newDate);
  };

  const handleMinuteChange = (input: string) => {
    // Remove non-numeric characters
    let sanitizedText = input.replace(/[^0-9]/g, "");

    // Reset to zero if "0" is entered
    if (sanitizedText.length >= 3) {
      sanitizedText = sanitizedText.slice(1, sanitizedText.length);
    }

    let numericValue = parseInt(sanitizedText, 10);
    const newDate = isDateValid(value) ? new Date(value) : new Date();

    // Reset to zero if "0" is entered
    if (
      sanitizedText.length == 3 &&
      sanitizedText.endsWith("0") &&
      !sanitizedText.startsWith("0")
    ) {
      numericValue = 0;
    } else if (numericValue > 59) {
      numericValue = 0;
    }

    newDate.setMinutes(numericValue);
    onChange(newDate);
  };

  const renderHour = useMemo(() => {
    const hour = value?.getHours() || 0;

    return hour < 10 ? `0${hour}` : `${hour}`;
  }, [value]);

  const renderMinute = useMemo(() => {
    const minute = value?.getMinutes() || 0;
    return minute < 10 ? `0${minute}` : `${minute}`;
  }, [value]);

  return (
    <YStack gap={12}>
      <XStack ai="center" gap={24} {...props}>
        <YStack gap={4}>
          <TimeInput
            variant="hour"
            value={renderHour}
            onChangeText={handleHourChange}
            keyboardType="numeric"
            {...(Platform.OS != "web"
              ? {
                  selection: {
                    start: 0,
                    end: 2,
                  },
                }
              : {})}
          />
        </YStack>

        <Display size="large" margin={-12} pb={4}>
          :
        </Display>

        <YStack gap={4}>
          <TimeInput
            variant="minute"
            value={renderMinute}
            onChangeText={handleMinuteChange}
            keyboardType="numeric"
            marginRight={-12}
            {...(Platform.OS != "web"
              ? {
                  selection: {
                    start: 0,
                    end: 2,
                  },
                }
              : {})}
          />
        </YStack>
      </XStack>

      <XStack gap={110}>
        <Body size="small">Hour</Body>
        <Body size="small">Minute</Body>
      </XStack>
    </YStack>
  );
};

const TimeInput = styled(Input, {
  name: "TimeInput",
  borderRadius: "$shape.corner_sm",
  height: 80,
  width: 96,
  focusStyle: {
    borderWidth: 0,
    outlineStyle: "none",
  },
  fos: 48,
  textAlign: "center",
  borderColor: "transparent",
  variants: {
    variant: {
      hour: {
        backgroundColor: "$primaryContainer",
        col: "$onPrimaryContainer",
        focusStyle: {
          borderWidth: 2,
          borderColor: "$primary",
        },
      },
      minute: {
        backgroundColor: "$surfaceContainerHighest",
        col: "$onSurface",
        focusStyle: {
          borderWidth: 2,
          borderColor: "$surfaceVariant",
        },
      },
    },
  } as const,
});

const Frame = styled(ThemeableStack, {
  name: "VerticalSegments",
  height: 80,
  maxHeight: 80,
  width: 52,
  maxWidth: 52,
  borderWidth: 1,
  borderColor: "$outline",
  borderRadius: "$shape.corner_m",
  flexDirection: "column",
  fg: 1,
  overflow: "hidden",
});

const ItemContext = createStyledContext({
  selected: false,
});

const Item = styled(ThemeableStack, {
  name: "VerticalSegmentsItem",
  context: ItemContext,
  justifyContent: "center",
  f: 1,
  alignItems: "center",
  variants: {
    selected: {
      true: {
        backgroundColor: "$tertiaryContainer" as any,
        hoverStyle: {
          backgroundColor: "$surfaceContainer",
        },
      },
      false: {
        hoverStyle: {
          backgroundColor: "$surfaceContainer",
        },
      },
    },
  } as const,
});

const Label = styled(Title, {
  size: "large",
  context: ItemContext,
  variants: {
    selected: {
      true: {
        col: "$onTertiaryContainer" as any,
      },
      false: {},
    },
  } as const,
});

const SegmentItem = withStaticProperties(Item, {
  Props: ItemContext.Provider,
  Label,
});

const VerticalSegment = withStaticProperties(Frame, {
  Item: SegmentItem,
});

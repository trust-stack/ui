import {ChevronDown} from "@truststack/icons-ui";
import {useMemo, useState} from "react";
import {Pressable} from "react-native";
import {Adapt, ScrollView, View} from "tamagui";
import {Divider} from "./Divider";
import {MenuItem} from "./Menu";
import {Popover} from "./Popover";
import {Sheet} from "./Sheet";
import {TextField, TextFieldProps} from "./TextField";
import {Body, Headline} from "./typography";

export type SelectProps<T = string> = {
  readonly options: {label: string; value: T}[];
  readonly label?: string;
  readonly onValueChange?: (v: string) => void;
  readonly supportingText?: string;
  // TODO: this doesn't do anything
  readonly variant?: "outlined" | "filled";
} & TextFieldProps;

export function Select({
  options = [],
  label,
  onValueChange = () => {},
  disabled,
  value,
  supportingText,
  loading,
  ...props
}: SelectProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  const render = useMemo(() => {
    return options?.find((o) => o.value == value)?.label;
  }, [value, options]);

  return (
    <Popover allowFlip open={open} onOpenChange={setOpen}>
      <Popover.Trigger disabled={disabled} f={1} cursor="pointer" asChild>
        <Pressable disabled={disabled} style={{flexGrow: 1}}>
          <TextField
            disabled={disabled}
            label={label}
            loading={loading}
            supportingText={supportingText}
            trailingIcon={ChevronDown}
            onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
            {...props}
            pointerEvents="none"
            cursor="pointer"
            value={render || ""}
          />
        </Pressable>
      </Popover.Trigger>

      <Adapt when="sm">
        <Sheet modal snapPoints={[80]} animation={"quick"} disableDrag>
          <Sheet.Overlay />
          <Sheet.Frame pb={16} backgroundColor={"$surfaceContainerLowest"}>
            <View margin={"$spacing.margin_compact"}>
              <Headline>{label}</Headline>
            </View>

            <Divider />

            {/* @ts-ignore */}
            <Adapt.Contents background={"$transparent"} />
          </Sheet.Frame>
        </Sheet>
      </Adapt>

      <Popover.Content
        minWidth={0}
        maxWidth={undefined}
        open={open}
        onOpenChange={setOpen}
        p={0}
        backgroundColor={"$surfaceContainerLowest"}
        width={width}
        maxHeight={300}
        overflow="hidden"
        borderRadius={"$shape.corner_l"}
        borderWidth={"$border.outline"}
        borderColor={"$outline"}
      >
        <ScrollView width={"100%"} showsVerticalScrollIndicator={false}>
          {!options?.length && <Body m={12}>No options</Body>}
          {options?.map((o) => (
            <Pressable
              key={`menu-item-${o.value}`}
              onPress={() => {
                setOpen(false);
                onValueChange(o.value);
              }}
              style={{
                width: "100%",
                justifyContent: "flex-start",
                flexDirection: "row",
                display: "flex",
              }}
            >
              <MenuItem selected={value == o.value}>
                <MenuItem.Label>{o.label}</MenuItem.Label>
                <MenuItem.Selected />
              </MenuItem>
            </Pressable>
          ))}
        </ScrollView>
      </Popover.Content>
    </Popover>
  );
}

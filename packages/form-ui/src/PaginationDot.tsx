import {useEffect} from "react";
import {FieldValues, Path, useFormState, useWatch} from "react-hook-form";
import {Pressable} from "react-native";
import {View, styled} from "tamagui";
import {useFormContext} from "./context";

export const DOT_SIZE = 20;

type PaginationDotProps<TFieldValues extends FieldValues> = {
  readonly completed?: boolean;
  readonly active: boolean;
  readonly onPress: VoidFunction;
  readonly id?: Path<TFieldValues> | Path<TFieldValues>[];
};

export function PaginationDot<TFieldValues extends FieldValues>({
  completed,
  active,
  onPress,
  id,
}: PaginationDotProps<TFieldValues>): JSX.Element {
  let error: boolean;

  const formMethods = useFormContext<TFieldValues>();

  const {errors} = useFormState({
    control: formMethods.control,
  });

  const watch = Array.isArray(id)
    ? useWatch({control: formMethods.control, name: id})
    : useWatch({control: formMethods.control, name: id});

  if (Array.isArray(id)) {
    error = !!id.find((i) => !!errors[i]) || completed;
  } else {
    error = !!errors[id] || completed;
  }

  useEffect(() => {
    formMethods.trigger(id);
  }, [watch]);

  return (
    <Pressable onPress={onPress}>
      <Dot
        animation="bouncy"
        scale={active ? 1.8 : 1}
        bg={error ? "$warning" : "$success"}
      />
    </Pressable>
  );
}

const Dot = styled(View, {
  name: "PaginationDot",
  w: DOT_SIZE,
  h: DOT_SIZE,
  br: 100,
});

import {Check} from "@truststack/icons-ui";
import {Pressable} from "react-native";
import {
  Checkbox as TCheckbox,
  View,
  XStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";
import {Body} from "./typography";

const CheckboxContext = createStyledContext({checked: false});

const CheckboxFrame = styled(View, {
  name: "Checkbox",
  context: CheckboxContext,
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$shape.corner_full",
  disabledStyle: {
    o: 0.4,
    pe: "none",
  },
});

const CheckboxContainer = styled(View, {
  name: "CheckboxContainer",
  context: CheckboxContext,
  width: 18,
  height: 18,
  disabledStyle: {
    o: 0.4,
    pe: "none",
  },
  borderColor: "$onSurfaceVariant",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 2,
  borderWidth: 2,
  variants: {
    checked: {
      true: {
        backgroundColor: "$primary",
        borderColor: "$primary",
      },
    },
  },
});

const C = withStaticProperties(CheckboxFrame, {
  Props: CheckboxContext.Provider,
  Indicator: TCheckbox.Indicator,
  Container: CheckboxContainer,
});

export type CheckboxProps = {
  readonly checked?: boolean;
  readonly onChange?: (c: boolean) => void;
};

export function Checkbox({checked, onChange}: CheckboxProps): JSX.Element {
  return (
    <Pressable onPress={() => onChange && onChange(!checked)}>
      <C checked={checked}>
        <C.Container>
          {checked ? <Icon size={18} col={"$onPrimary"} Icon={Check} /> : <></>}
        </C.Container>
      </C>
    </Pressable>
  );
}

type CheckboxLabelProps = {
  readonly label: string;
} & CheckboxProps;

export function CheckboxLabel({
  checked,
  onChange,
  label,
}: CheckboxLabelProps): JSX.Element {
  return (
    <Pressable
      onPress={() => onChange && onChange(!checked)}
      style={{width: "100%"}}
    >
      <XStack alignItems="center" gap={20}>
        <C checked={checked}>
          <C.Container borderRadius={10}>
            {checked ? (
              <Icon size={15} col={"$onPrimary"} Icon={Check} />
            ) : (
              <></>
            )}
          </C.Container>
        </C>
        <Body size="large">{label}</Body>
      </XStack>
    </Pressable>
  );
}

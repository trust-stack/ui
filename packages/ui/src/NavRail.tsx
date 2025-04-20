import type {IconProps} from "@tamagui/helpers-icon";
import {FunctionComponent} from "react";
import {Pressable} from "react-native";
import {
  GetProps,
  ThemeableStack,
  View,
  styled,
  withStaticProperties,
} from "tamagui";
import {NavItem} from "./NavItem";

export type NavRailProps = {
  readonly Icon?: React.ReactNode;
  readonly Fab?: React.ReactNode;
  readonly TrailItems?: React.ReactNode;
  readonly Items?: React.ReactNode;
} & Partial<GetProps<typeof Rail>>;

export function NavRail({
  Items,
  Fab,
  Icon,
  TrailItems,
  noIcon = false,
  ...props
}: NavRailProps): JSX.Element {
  return (
    <Rail {...props}>
      <View h={40} />
      {Fab}

      <View h={60} />

      {Items}

      <View fg={1} />

      {TrailItems}
    </Rail>
  );
}

const RailFrame = styled(ThemeableStack, {
  name: "NavigationRailContainer",
  bg: "$surface",
  br: null,
  w: "$size.nav_rail_width",
  h: "100%",
  fd: "column",
  ai: "center",
  gap: 12,
  pb: 24,
  variants: {
    outlined: {
      true: {
        borderRightWidth: "$border.outline",
        borderRightColor: "$outlineVariant",
      },
      false: {},
    },
  } as const,
  defaultVariants: {
    outlined: false,
  },
});

const Rail = withStaticProperties(RailFrame, {});

export type NavRailItemProps = {
  readonly label: string;
  readonly active?: boolean;
  readonly icon: FunctionComponent<IconProps>;
  readonly onPress?: VoidFunction;
};

export function NavRailItem({
  label,
  icon,
  active,
  onPress,
}: NavRailItemProps): JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <NavItem active={active}>
        <NavItem.Icon icon={icon} />
        <NavItem.Label>{label}</NavItem.Label>
      </NavItem>
    </Pressable>
  );
}

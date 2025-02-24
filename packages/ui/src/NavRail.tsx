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

type NavRailProps = {
  readonly children?: React.ReactNode;
  readonly Icon?: React.ReactNode;
  readonly Fab?: React.ReactNode;
  readonly trailItems?: React.ReactNode;
  readonly noIcon?: boolean;
  readonly hideThemeButton?: boolean;
} & Partial<GetProps<typeof Rail>>;

export function NavRail({
  children,
  Fab,
  Icon,
  trailItems,
  noIcon = false,
  hideThemeButton = false,
  ...props
}: NavRailProps): JSX.Element {
  return (
    <Rail {...props}>
      {!noIcon && Icon && <View pt={24}>{Icon}</View>}
      <View h={40} />
      {Fab}

      <View h={60} />

      {children}

      <View fg={1} />

      {trailItems}
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

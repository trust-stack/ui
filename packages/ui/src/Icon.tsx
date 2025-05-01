import {IconProps as TIconProps} from "@truststack/icons-ui";
import {FunctionComponent} from "react";
import {GetProps, TamaguiElement, View, ViewProps} from "tamagui";

type Props = {
  readonly Icon?: FunctionComponent<TIconProps>;
  readonly icon?: FunctionComponent<TIconProps>;
  readonly ContainerProps?: ViewProps;
} & Partial<Omit<TIconProps, "Icon" | "icon">>;

export const Icon = View.styleable<TamaguiElement, Props>(
  ({Icon, icon, display, ContainerProps = {}, ...props}, ref) => {
    let Render = Icon || icon;

    return (
      <View ref={ref} {...ContainerProps}>
        <Render {...props} />
      </View>
    );
  }
);

export type IconProps = GetProps<typeof Icon>;

import { IconProps as TIconProps } from "@truststack/icons-ui";
import { FunctionComponent } from "react";
import { GetProps, TamaguiElement, ViewProps } from "tamagui";
type Props = {
    readonly Icon?: FunctionComponent<TIconProps>;
    readonly icon?: FunctionComponent<TIconProps>;
    readonly ContainerProps?: ViewProps;
} & Partial<Omit<TIconProps, "Icon" | "icon">>;
export declare const Icon: import("tamagui").TamaguiComponent<Props, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & TamaguiElement, import("@tamagui/core").StackStyleBase, {}, {}>;
export type IconProps = GetProps<typeof Icon>;
export {};
//# sourceMappingURL=Icon.d.ts.map
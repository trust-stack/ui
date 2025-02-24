import {ComponentProps} from "react";
import {Dimensions, Pressable} from "react-native";
import {
  Dialog as TDialog,
  ThemeableStack,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Divider as TDivider} from "./Divider";
import {Icon as TIcon} from "./Icon";
import {Label as TLabel, Title} from "./typography";
import {rgbToRgba} from "./utils";

const NavDrawerContext = createStyledContext({
  variant: "standard",
});

const Frame = styled(View, {
  name: "NavDrawerFrame",
  context: NavDrawerContext,
  height: "100%",
  backgroundColor: "$surfaceContainerLow",
  borderTopRightRadius: "$shape.corner_l",
  borderBottomRightRadius: "$shape.corner_l",
  minWidth: 240,
  maxWidth: 360,
  paddingLeft: 12,
  paddingRight: 12,
  variants: {
    variant: {
      standard: {
        backgroundColor: "transparent",
      },
      outlined: {
        backgroundColor: "$surfaceContainerLowest",
        borderRightColor: "$outlineVariant",
        borderRightWidth: "$border.outline",
      },
    },
    shape: {
      none: {
        borderRadius: 0,
      },
    },
  } as const,
});

const Content = styled(ThemeableStack, {
  name: "NavDrawerContent",
  context: NavDrawerContext,
  minWidth: 240,
  maxWidth: 360,
  height: "100%",
});

const Headline = styled(Title, {
  name: "NavDrawerHeadline",
  size: "small",
  context: NavDrawerContext,
  height: 56,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingLeft: 16,
});

const Divider = styled(TDivider, {
  name: "NavDrawerDivider",
  context: NavDrawerContext,
  mt: 16,
  mb: 16,
});

const NavDrawerItemContext = createStyledContext({
  active: false,
});

const NavDrawerItemFrame = styled(ThemeableStack, {
  name: "NavDrawerItem",
  context: NavDrawerItemContext,
  flexDirection: "row",
  alignItems: "center",
  height: 56,
  width: "100%",
  paddingLeft: 16,
  borderRadius: "$shape.corner_xl",
  cursor: "pointer",
  variants: {
    active: {
      true: {
        backgroundColor: "$secondaryContainer",
      },
      false: {
        hoverStyle: {
          backgroundColor: rgbToRgba("$onSecondaryContainer", 0.08) as any,
        },
      },
    },
  } as const,
  defaultVariants: {
    active: false,
  },
});

type NavItemFramePressableProps = Omit<
  ComponentProps<typeof NavDrawerItemFrame>,
  "onPress"
> &
  Pick<ComponentProps<typeof Pressable>, "onPress">;

const NavItemFramePressable =
  NavDrawerItemFrame.styleable<NavItemFramePressableProps>(
    ({onPress, ...props}, ref) => {
      return (
        <Pressable disabled={props.disabled as boolean} onPress={onPress}>
          <NavDrawerItemFrame {...props} ref={ref} />
        </Pressable>
      );
    }
  );

const Icon = styled(TIcon, {
  name: "NavItemIcon",
  context: NavDrawerItemContext,
  size: 24,
  marginRight: 12,
  variants: {
    active: {
      true: {
        col: "$onSecondaryContainer" as any,
      },
      false: {
        col: "$onSurfaceVariant" as any,
      },
    },
  } as const,
});

const Label = styled(TLabel, {
  name: "NavDrawerLabel",
  context: NavDrawerItemContext,
  size: "large",
  col: "$onSurfaceVariant",
  variants: {
    active: {
      true: {
        col: "$onSecondaryContainer",
      },
    },
    trailing: {
      true: {
        marginLeft: "auto",
        marginRight: 24,
      },
    },
  } as const,
});

const Spacer = styled(View, {
  name: "NavDrawerSpacer",
  height: 56,
});

export const NavDrawerItem = withStaticProperties(NavItemFramePressable, {
  Props: NavDrawerItemContext.Provider,
  Label,
  Icon,
});

export const NavDrawer = withStaticProperties(Frame, {
  Props: NavDrawerContext.Provider,
  Content,
  Headline,
  Divider,
  Spacer,
});

const {height: HEIGHT} = Dimensions.get("window");

const ModelContent = styled(TDialog.Content, {
  name: "NavDrawerModelContent",
  elevate: true,
  height: HEIGHT,
  maxHeight: HEIGHT,
  animation: "medium",
  overflow: "hidden",
  enterStyle: {y: 0, opacity: 0},
  exitStyle: {y: 0, opacity: 0},
  padding: 0,
  borderRadius: 0,
});

export const NavDrawerModel = withStaticProperties(TDialog, {
  Overlay: TDialog.Overlay,
  Portal: TDialog.Portal,
  Content: ModelContent,
});

import {
  YStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";
import {Label} from "./typography";

const NavItemContext = createStyledContext({
  active: false,
});

const NavItemFrame = styled(YStack, {
  name: "NavItem",
  context: NavItemContext,
  fd: "column",
  ai: "center",
  jc: "center",
  gap: 4,
  cur: "pointer",
  variants: {
    active: {
      true: {},
      false: {},
    },
  },
});

const NavLabel = styled(Label, {
  name: "NavLabel",
  context: NavItemContext,
  size: "medium",
  numberOfLines: 1,
  adjustsFontSizeToFit: true,
  hoverStyle: {
    col: "$onSurface",
  },
  variants: {
    active: {
      true: {
        col: "$onSurface",
      },
      false: {
        col: "$onSurfaceVariant",
      },
    },
  } as const,
});

const NavIcon = styled(Icon, {
  name: "NavIcon",
  context: NavItemContext,
  width: 24,
  height: 24,
  col: "$onSurfaceVariant" as any,
  hoverStyle: {
    col: "$onSurface" as any,
  },
  ContainerProps: {
    borderRadius: "$shape.corner_full",
    height: 32,
    width: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    hoverStyle: {
      backgroundColor: "$onSurfaceOpacity",
    },
  },
  variants: {
    active: {
      true: {
        col: "$onSecondaryContainer" as any,
        ContainerProps: {
          borderRadius: "$shape.corner_full",
          height: 32,
          width: 56,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "$secondaryContainer",
        },
      },
      false: {
        col: "$onSurface" as any,
      },
    },
  },
});

export const NavItem = withStaticProperties(NavItemFrame, {
  Props: NavItemContext.Provider,
  Label: NavLabel,
  Icon: NavIcon,
});

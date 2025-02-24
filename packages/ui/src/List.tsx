import {FlatList} from "react-native";
import {
  Avatar,
  ThemeableStack,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";
import {Body} from "./typography";

type Lines = "one" | "two" | "three";

export const List = styled(FlatList, {
  variants: {
    fullWidth: {
      true: {
        marginLeft: -16,
        marginRight: -16,
      },
    },
  },
});

const ListContext = createStyledContext<{lines: Lines; focused?: boolean}>({
  lines: "one",
  focused: false,
});

const ListItemFrame = styled(ThemeableStack, {
  name: "ListFrame",
  context: ListContext,
  backgroundColor: "transparent",
  height: "$size.list_item_height",
  paddingLeft: 16,
  paddingRight: 16,
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  variants: {
    line: {
      one: {
        height: 56,
        px: 16,
        py: 8,
      },
      two: {
        height: 72,
        px: 16,
        py: 8,
      },
      three: {
        height: 88,
        px: 16,
        py: 12,
      },
    },
    focused: {
      true: {
        backgroundColor: "$tertiaryContainer",
      },
    },
    pressable: {
      true: {
        cursor: "pointer",
      },
    },
    severity: {
      error: {
        backgroundColor: "$errorContainer",
      },
      warning: {
        backgroundColor: "$warningContainer",
      },
      success: {
        backgroundColor: "$successContainer",
      },
    },
  } as const,
});

const Container = styled(ThemeableStack, {
  name: "ListContainer",
  context: ListContext,
  flexShrink: 1,
  flexDirection: "column",
});

const Headline = styled(Body, {
  size: "large",
  context: ListContext,
  textAlign: "left",
  hoverStyle: {
    color: "$onSurface",
  },
  variants: {
    severity: {
      error: {
        backgroundColor: "$onErrorContainer",
      },
      success: {
        backgroundColor: "$onSuccessContainer",
      },
      warning: {
        col: "$onWarningContainer" as any,
      },
    },
    focused: {
      true: {
        col: "$onTertiaryContainer" as any,
      },
    },
  },
});

const SupportingText = styled(Body, {
  size: "medium",
  color: "$onSurfaceVariant",
  context: ListContext,
  hoverStyle: {
    color: "$onSurface",
  },
  variants: {
    severity: {
      warning: {
        col: "$onWarningContainer" as any,
      },
      success: {
        col: "$onSuccessContainer" as any,
      },
    },
    focused: {
      true: {
        col: "$onTertiaryContainer" as any,
      },
    },
  },
});

const TrailingIcon = styled(Icon, {
  name: "ListItemTrailingIcon",
  context: ListContext,
  size: 24,
  col: "$onSurfaceVariant" as any,
  ContainerProps: {
    right: 0,
    marginLeft: "auto",
  },
  variants: {
    focused: {
      true: {
        col: "$onSurfaceVariant" as any,
      },
    },
    severity: {
      warning: {
        col: "$onWarningContainer" as any,
      },
      success: {
        col: "$onSuccessContainer" as any,
      },
    },
  } as const,
});

const TrailingItem = styled(ThemeableStack, {
  name: "ListItemTrailingItem",
  context: ListContext,
  right: 0,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  marginLeft: "auto",
  height: "100%",
});

const LeadingAvatar = styled(Avatar, {
  name: "ListItemLeadingAvatar",
  context: ListContext,
  size: 40,
});

const LeadingIcon = styled(Icon, {
  name: "ListItemLeadingIcon",
  context: ListContext,
  size: 24,
  ContainerProps: {
    left: 0,
    marginRight: 16,
  },
  col: "$onSurfaceVariant" as any,
  variants: {
    severity: {
      warning: {
        col: "$onWarningContainer" as any,
      },
    },
  },
});

const LeadingIconContainer = styled(View, {
  name: "ListItemLeadingIconContainer",
  context: ListContext,
  left: 0,
  marginRight: 16,
});

const LeadingImage = styled(View, {
  name: "ListItemLeadingImage",
  context: ListContext,
  width: 56,
  height: 56,
  left: 0,
  marginRight: 16,
});

const LeadingItem = styled(ThemeableStack, {
  name: "ListItemLeadingItem",
  context: ListContext,
  justifyContent: "center",
  alignItems: "center",
  width: 56,
  height: 56,
  left: 0,
  marginRight: 16,
});

export const ListItem = withStaticProperties(ListItemFrame, {
  props: ListContext.Provider,
  Container,
  Headline,
  LeadingAvatar,
  LeadingItem,
  LeadingIcon,
  LeadingIconContainer,
  LeadingImage,
  SupportingText,
  TrailingIcon,
  TrailingItem,
});

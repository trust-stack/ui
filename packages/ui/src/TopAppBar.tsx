import {
  ThemeableStack,
  View,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Icon} from "./Icon";
import {Body, Headline, Title} from "./typography";

const TopAppBarContext = createStyledContext({
  size: undefined,
  centered: false,
});

const Frame = styled(ThemeableStack, {
  name: "TopAppBar",
  context: TopAppBarContext,
  backgroundColor: "$surfaceContainer",
  flexDirection: "column",
  justifyContent: "flex-start",
  // On scroll?,
  shadowColor: "$shadow_opacity",
  shadowRadius: "$shadow.0",
  zIndex: 99999,
  width: "100%",
  variants: {
    size: {
      small: {
        height: 64,
      },
      medium: {
        height: 112,
        maxHeight: 122,
      },
      large: {
        minHeight: 152,
      },
    },
  },
});

const TopRail = styled(ThemeableStack, {
  name: "TopAppBarTopRail",
  context: TopAppBarContext,
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: 64,
  maxHeight: 64,
  flexShrink: 1,
});

const BottomRail = styled(ThemeableStack, {
  name: "TopAppBarBottomRail",
  context: TopAppBarContext,
  width: "100%",
  fg: 1,
  flexDirection: "row",
  alignItems: "flex-end",
});

const SmallHeadline = styled(Title, {
  name: "TopAppBarSmallHeadline",
  context: TopAppBarContext,
  size: "large",
  col: "$onSurface",
  marginLeft: 16,
  variants: {
    size: {
      small: {
        size: "large",
      },
    },
    centered: {
      true: {
        fg: 1,
        textAlign: "center",
      },
    },
  },
});

const MediumHeadline = styled(Headline, {
  name: "TopAppBarMediumHeadline",
  size: "small",
  col: "$onSurface",
  marginLeft: 16,
  marginBottom: 24,
});

const LargeHeadline = styled(Headline, {
  name: "TopAppBarLargeHeadline",
  size: "medium",
  col: "$onSurface",
  marginLeft: 16,
  marginBottom: 28,
});

const SupportingText = styled(Body, {
  name: "TopAppBarSupportingText",
  context: TopAppBarContext,
  marginLeft: 16,
  marginBottom: 28,
  flexWrap: "wrap",
});

const TrailIconContainer = styled(ThemeableStack, {
  name: "TopAppBarTrailIconContainer",
  context: TopAppBarContext,
  flexDirection: "row",
  fg: 1,
  justifyContent: "flex-end",
  marginRight: 16,
  variants: {
    centered: {
      true: {
        fg: 0,
      },
    },
  } as const,
});

const TrailItemsContainer = styled(ThemeableStack, {
  name: "TopAppBarTrailIconContainer",
  context: TopAppBarContext,
  flexDirection: "row",
  fg: 1,
  justifyContent: "flex-end",
  marginRight: 16,
});

const TrailingIcon = styled(Icon, {
  name: "TopAppBarTrailingIcon",
  context: TopAppBarContext,
  size: 24,
  ContainerProps: {
    width: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  col: "$onSurfaceVariant" as any,
});

const LeadingIcon = styled(Icon, {
  name: "TopAppBarLeadingIcon",
  context: TopAppBarContext,
  width: 24,
  height: 24,
  marginRight: 0,
  marginLeft: 16,
  col: "$onSurfaceVariant" as any,
});

// Used for custom, non tamagui SVG Icons
const LeadingIconContainer = styled(View, {
  name: "TopBarLeadingIconWrapper",
  context: TopAppBarContext,
  width: 24,
  maxWidth: 24,
  flexShrink: 1,
  height: 48,
  marginRight: 16,
  marginLeft: 16,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    centered: {
      true: {
        marginRight: 0,
      },
    },
  },
});

const LeadingItemsContainer = styled(ThemeableStack, {
  name: "TopBarLeadingIconWrapper",
  context: TopAppBarContext,
  height: 48,
  marginRight: 16,
  marginLeft: 16,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  variants: {
    centered: {
      true: {
        marginRight: 0,
      },
    },
  },
});

export const TopAppBar = withStaticProperties(Frame, {
  Props: TopAppBarContext.Provider,
  Headline: SmallHeadline,
  TopRail,
  SmallHeadline,
  MediumHeadline,
  LargeHeadline,
  TrailingIcon,
  LeadingIcon,
  BottomRail,
  TrailIconContainer,
  TrailItemsContainer,
  LeadingIconContainer,
  LeadingItemsContainer,
  SupportingText,
});

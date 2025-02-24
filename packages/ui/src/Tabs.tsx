import {useEffect, useState} from "react";
import {Pressable} from "react-native";
import {
  AnimatePresence,
  GetProps,
  View,
  XStack,
  YStack,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";
import {Title} from "./typography";

const Container = styled(XStack, {
  name: "TabsContainer",
  backgroundColor: "$surface",
  height: 48,
  width: "100%",
  variants: {
    outlined: {
      true: {
        borderBottomWidth: "$border.outline",
        borderBottomColor: "$outlineVariant",
      },
      false: {},
    },
  } as const,
  defaultVariants: {
    outlined: false,
  },
});

type TabItemProps = {
  readonly label: string;
  readonly active?: boolean;
};

export function TabItem({label, active = false}: TabItemProps): JSX.Element {
  return (
    <Tab active={active}>
      <Tab.Label>{label}</Tab.Label>
    </Tab>
  );
}

const ItemContext = createStyledContext({active: false});

const Item = styled(YStack, {
  name: "TabItem",
  context: ItemContext,
  alignContent: "center",
  justifyContent: "center",
  fg: 1,
  flexBasis: 1,
  cursor: "pointer",
  paddingLeft: 12,
  paddingRight: 12,
  borderRadius: "$shape.corner_m",
  minWidth: 88,
  variants: {
    active: {
      true: {
        hoverStyle: {
          backgroundColor: "$primaryContainer",
        },
      },
      false: {
        hoverStyle: {
          backgroundColor: "$onSurfaceOpacity",
        },
      },
    },
  },
});

const Label = styled(Title, {
  name: "TabLabel",
  context: ItemContext,
  textAlign: "center",
  size: "small",
  col: "$onPrimaryContainer",
  variants: {
    active: {
      true: {
        col: "$primary",
      },
    },
  } as const,
});

const Tab = withStaticProperties(Item, {
  Props: ItemContext.Provider,
  Label: Label,
});

export const TabsContainer = withStaticProperties(Container, {});

export type TabsProps<T extends string = string> = {
  readonly value: T;
  readonly onChange: (v: T) => void;
  readonly items: {label: string; value: T; icon?: React.ReactNode}[];
  readonly shiftLeft?: boolean;
} & GetProps<typeof TabsContainer>;

export function Tabs<T extends string = string>({
  value,
  onChange,
  items,
  shiftLeft,
  ...props
}: TabsProps<T>): JSX.Element {
  return (
    <TabsContainer {...props}>
      <AnimatePresence>
        {items?.map((item, index) => (
          <Pressable
            key={`tab-item-${item.value}`}
            onPress={() => onChange(item.value)}
            style={{
              flexBasis: shiftLeft ? undefined : 1,
              flexGrow: shiftLeft ? undefined : 1,
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <TabItem active={item.value == value} label={item.label} />

            {item.value == value && (
              <ActiveIndicator key={`indicator-${value}`} />
            )}
          </Pressable>
        ))}
      </AnimatePresence>
    </TabsContainer>
  );
}

export type TabsContentProps = {
  readonly value: string;
  readonly items: {
    value: string;
    content: React.ReactNode | (() => React.ReactNode);
  }[];
} & GetProps<typeof TabContent>;

export function TabsContent({
  value,
  items,
  ...props
}: TabsContentProps): JSX.Element {
  const [renderTab, setRenderTab] = useState<string>(value);

  useEffect(() => {
    setRenderTab(undefined);
    // Wait 400ms for 340ms animation to complete
    setTimeout(() => setRenderTab(value), 400);
  }, [value]);

  return (
    <AnimatePresence>
      {items?.map(
        (tab, index) =>
          renderTab == tab.value && (
            <TabContent key={`tab-content-${index}`} {...props}>
              {tab.content instanceof Function ? tab.content() : tab.content}
            </TabContent>
          )
      )}
    </AnimatePresence>
  );
}

const TabContent = styled(View, {
  name: "TabContent",
  animation: "lazy",
  enterStyle: {
    opacity: 0,
  },
  exitStyle: {
    opacity: 0,
  },
});

const ActiveIndicator = styled(View, {
  name: "ActiveIndicator",
  backgroundColor: "$primary",
  position: "absolute",
  height: 3,
  maxWidth: 48,
  width: "100%",
  borderTopRightRadius: 3,
  borderTopLeftRadius: 3,
  animation: "300ms",
  animateOnly: ["opacity", "scale"],
  bottom: 0,
  exitStyle: {
    opacity: 0,
    scale: 1,
  },
  enterStyle: {
    opacity: 0,
    scale: 0,
  },
});

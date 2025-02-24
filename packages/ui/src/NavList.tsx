import type {IconProps} from "@tamagui/helpers-icon";
import {Fragment, FunctionComponent} from "react";
import {Pressable} from "react-native";
import {H2, ScrollView, Stack, StackProps} from "tamagui";
import {ListItemIconLeft} from "./ListItem";

export type NavListProps = {
  readonly groups: {
    label?: string;
    items: {
      label: string;
      Icon: FunctionComponent<IconProps>;
      onPress: VoidFunction;
    }[];
  }[];
} & StackProps;

export function NavList({groups, ...props}: NavListProps): JSX.Element {
  return (
    <ScrollView>
      <Stack gap={"$2"} {...props}>
        {groups?.map((group, gi) => (
          <Fragment key={`nav-group-${gi}`}>
            {group?.label && (
              <H2 px={"$4"} fos={"$8"}>
                {group.label}
              </H2>
            )}
            {group.items.map((item, ii) => (
              <Pressable onPress={item.onPress} key={`nav-item-${gi}-${ii}`}>
                <ListItemIconLeft heading={item.label} icon={item.Icon} />
              </Pressable>
            ))}
          </Fragment>
        ))}
      </Stack>
    </ScrollView>
  );
}

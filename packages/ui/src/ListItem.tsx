import type { IconProps } from '@tamagui/helpers-icon';
import { ComponentProps, FunctionComponent } from 'react';
import { Pressable, SectionList as RNSectionList } from 'react-native';
import {
    Stack,
    Text,
    View,
    XStack,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Divider } from './Divider';
import { IconButton } from './IconButton';
import { Title } from './typography';

const ListFrame = styled(View, {
    name: 'ListFrame',
});

const SectionListFrame = styled(RNSectionList, {
    name: 'SectionList',
    stickySectionHeadersEnabled: true,
    showsVerticalScrollIndicator: false,
    ItemSeparatorComponent: Divider,
    SectionSeparatorComponent: Divider,
});

export const SectionList = withStaticProperties(SectionListFrame, {});

const ListSectionHeaderFrame = styled(Stack, {
    name: 'ListSectionHeader',
    px: '$spacing.margin_compact',
    py: 4,
    jc: 'center',
    backgroundColor: '$background',
});

const ListSectionHeaderHeading = styled(Title, {
    col: '$onSurface',
});

export const ListSectionHeader = withStaticProperties(ListSectionHeaderFrame, {
    Heading: ListSectionHeaderHeading,
});

const ListItemFrame = styled(XStack, {
    name: 'ListItem',
    fd: 'row',
    gap: '$2',
    bg: '$background',
    p: '$4',
    hoverStyle: {
        bg: '$secondaryContainer',
    },
});

const ListItemHeadline = styled(Title, {
    name: 'ListItemHeadline',
    col: '$onSurface',
});

const ListItemSupportingText = styled(Text, {
    name: 'ListItemSupportingText',
    col: '$onSurfaceVariant',
    fos: 14,
});

const ListItemTrailingText = styled(Text, {
    name: 'ListItemTrailingText',
    col: '$onSurfaceVariant',
});

const LICheckbox = styled(Checkbox, {
    name: 'ListItemCheckbox',
});

const Icon = ({ icon: Icon }: { icon: FunctionComponent<IconProps> }) => {
    return <Icon w={28} h={28} col={'$onSurfaceVariant'} />;
};

export const ListItem = withStaticProperties(ListItemFrame, {
    Headline: ListItemHeadline,
    SupportingText: ListItemSupportingText,
    Trail: ListItemTrailingText,
    Checkbox: LICheckbox,
    Icon: Icon,
    // Props: ListItemContext.Provider
});

export type ListItemProps = ComponentProps<typeof ListItem>;

// Variations
type ListItemIconProps = {
    readonly heading: string;
    readonly subtitle?: string | number;
    readonly icon?: FunctionComponent<IconProps>;
} & ListItemProps;

export type ListItemIconLeftProps = ListItemIconProps;

export function ListItemIconLeft({
    heading,
    subtitle,
    icon,
    ...props
}: ListItemIconLeftProps): JSX.Element {
    return (
        <ListItem {...props} gap={'$4'} ai={'center'}>
            {icon && (
                <View>
                    <ListItem.Icon icon={icon} />
                </View>
            )}

            <Stack jc="center">
                <ListItem.Headline>{heading}</ListItem.Headline>
                {subtitle && (
                    <ListItem.SupportingText>
                        {subtitle}
                    </ListItem.SupportingText>
                )}
            </Stack>
        </ListItem>
    );
}

export type ListItemIconRightProps = ListItemIconProps;

export function ListItemIconRight({
    heading,
    subtitle,
    icon,
    ...props
}: ListItemIconLeftProps): JSX.Element {
    return (
        <ListItem jc="space-between" {...props}>
            <View>
                <ListItem.Headline>{heading}</ListItem.Headline>
                <ListItem.SupportingText>{subtitle}</ListItem.SupportingText>
            </View>

            {icon && (
                <View>
                    <ListItem.Icon icon={icon} />
                </View>
            )}
        </ListItem>
    );
}

export type ListItemTrailProps = {
    readonly heading: string;
    readonly subtitle?: string;
    readonly trail: string;
} & ListItemProps;

export function ListItemTrail({
    heading,
    subtitle,
    trail,
    ...props
}: ListItemTrailProps): JSX.Element {
    return (
        <ListItem {...props}>
            <View>
                <ListItem.Headline>{heading}</ListItem.Headline>
                <ListItem.SupportingText>{subtitle}</ListItem.SupportingText>
            </View>

            <View>
                <ListItem.Trail>{trail}</ListItem.Trail>
            </View>
        </ListItem>
    );
}

export type ListItemCheckboxProps = {
    readonly heading: string;
    readonly subtitle?: string;
    readonly CheckboxProps?: CheckboxProps;
} & ListItemProps;

export function ListItemCheckbox({
    heading,
    subtitle,
    CheckboxProps = {},
    ...props
}: ListItemCheckboxProps): JSX.Element {
    return (
        <ListItem jc="space-between" {...props}>
            <View>
                <ListItem.Headline>{heading}</ListItem.Headline>
                <ListItem.SupportingText>{subtitle}</ListItem.SupportingText>
            </View>

            <View>
                <Checkbox {...CheckboxProps} />
            </View>
        </ListItem>
    );
}

type ListItemActionProps = {
    readonly heading: string | React.ReactNode;
    readonly subtitle: string;
    readonly icon: FunctionComponent<IconProps>;
    readonly onPress?: VoidFunction;
    readonly onAction?: VoidFunction;
} & ListItemProps;

function ListItemAction({
    heading,
    subtitle,
    icon,
    onPress,
    onAction,
    ...props
}: ListItemActionProps): JSX.Element {
    return (
        <Pressable onPress={onPress}>
            <ListItem jc={'space-between'} {...props}>
                <View>
                    <ListItem.Headline>{heading}</ListItem.Headline>
                    <ListItem.SupportingText>
                        {subtitle}
                    </ListItem.SupportingText>
                </View>

                <View>
                    <IconButton
                        variant="standard"
                        onPress={() => {
                            onAction && onAction();
                        }}
                    >
                        <IconButton.Icon icon={icon} />
                    </IconButton>
                </View>
            </ListItem>
        </Pressable>
    );
}

export const List = withStaticProperties(ListFrame, {
    ItemCheckbox: ListItemCheckbox,
    ItemTrail: ListItemTrail,
    ItemAction: ListItemAction,
    IconRight: ListItemIconRight,
    IconLeft: ListItemIconLeft,
});

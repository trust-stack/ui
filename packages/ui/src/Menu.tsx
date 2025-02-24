import { Check } from '@tamagui/lucide-icons';
import {
    Stack,
    ThemeableStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon } from './Icon';
import { Spinner } from './Spinner';
import { Label } from './typography';

const Frame = styled(ThemeableStack, {
    name: 'MenuFrame',
    shadowColor: '$shadow_opacity',
    shadowRadius: '$shadow.2',
    borderRadius: '$shape.corner_xs',
    '$platform-native': {
        backgroundColor: 'transparent',
    },
    '$platform-web': {
        backgroundColor: '$surfaceContainerLowest',
    },
    minWidth: 112,
    flexDirection: 'column',
    cursor: 'pointer',
    variants: {
        fluid: {
            true: {},
            false: {
                maxWidth: 280,
            },
        },
    } as const,
});

const ItemContext = createStyledContext({
    selected: false,
    variant: undefined,
    loading: false,
});

const ItemFrame = styled(Stack, {
    context: ItemContext,
    name: 'MenuItem',
    height: 48,
    width: '100%',
    minWidth: 112,
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    '$platform-native': {
        backgroundColor: 'transparent',
    },
    '$platform-web': {
        backgroundColor: '$surfaceContainerLowest',
    },
    hoverStyle: {
        backgroundColor: '$primaryContainer',
    },
    pos: 'relative',
    variants: {
        selected: {
            true: {
                backgroundColor: '$secondaryContainer',
            },
        },
        variant: {
            'filled-tonal': {
                backgroundColor: '$secondaryContainer',
            },
            'filled-error': {
                backgroundColor: '$errorContainer',
                '$platform-web': {
                    backgroundColor: '$errorContainer',
                },
            },
            'tonal-success': {
                bg: '$successContainer',
            },
        },
        loading: {
            true: {},
            false: {},
        },
    } as const,
});

const MenuLabel = styled(Label, {
    size: 'large',
    context: ItemContext,
    col: '$onSurface',
    px: 12,
    hoverStyle: {
        col: '$onSurface',
    },
    $compact: {
        size: 'large',
    },
    variants: {
        selected: {
            true: {
                col: '$onSecondaryContainer',
            },
        },
        variant: {
            'filled-tonal': {
                col: '$onSecondaryContainer',
            },
            'filled-error': {
                col: '$onErrorContainer',
            },
            'tonal-success': {
                col: '$onSuccessContainer',
            },
        },
    } as const,
});

const Selected = styled(Icon, {
    name: 'MenuSelected',
    context: ItemContext,
    Icon: Check,
    ContainerProps: {
        display: 'none',
        col: '$onSecondaryContainer' as any,
        width: 24,
        height: 24,
        top: 48 / 2 - 12,
        right: 8,
        pos: 'absolute',
    },
    variants: {
        selected: {
            true: {
                ContainerProps: {
                    display: 'block',
                    col: '$onSecondaryContainer' as any,
                    width: 24,
                    height: 24,
                    top: 48 / 2 - 12,
                    right: 8,
                    pos: 'absolute',
                },
            },
        },
    },
});

const MenuLeadingIcon = styled(Icon, {
    name: 'MenuIcon',
    context: ItemContext,
    size: 20,
    col: '$onSurfaceVariant' as any,
    ContainerProps: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
        marginRight: 6,
    },
    variants: {
        variant: {
            'filled-tonal': {
                col: '$onSecondaryContainer' as any,
            },
            'filled-error': {
                col: '$onErrorContainer' as any,
            },
            'tonal-success': {
                col: '$onSuccessContainer' as any,
            },
        },
    } as const,
});

const MenuSpinner = styled(Spinner, {
    name: 'MenuSpinner',
    context: ItemContext,
    marginRight: 12,
    variants: {
        loading: {
            false: {
                display: 'none',
            },
        },
        variant: {
            filled: {
                col: '$onPrimary' as any,
            },
            'filled-error': {
                col: '$onError' as any,
            },
        },
    } as const,
});

export const MenuItem = withStaticProperties(ItemFrame, {
    Props: ItemContext.Provider,
    Label: MenuLabel,
    LeadingIcon: MenuLeadingIcon,
    Selected,
    Spinner: MenuSpinner,
});

export const Menu = withStaticProperties(Frame, {});

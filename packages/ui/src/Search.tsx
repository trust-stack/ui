import { Search as SearchIcon } from '@tamagui/lucide-icons';
import {
    createStyledContext,
    GetProps,
    Input,
    InputProps,
    styled,
    ThemeableStack,
    withStaticProperties,
} from 'tamagui';
import { Icon } from './Icon';
import { Spinner } from './Spinner';

const SearchContext = createStyledContext();

const SearchFrame = styled(ThemeableStack, {
    name: 'Search',
    context: SearchContext,
    backgroundColor: '$surfaceContainerHigh',
    alignItems: 'center',
    brc: 'transparent',
    btc: 'transparent',
    bbc: 'transparent',
    blc: 'transparent',
    br: '$shape.corner_full',
    height: 56,
    minWidth: 360,
    maxWidth: 720,
    flexDirection: 'row',
    variants: {
        loading: {
            true: {},
            false: {},
        },
    } as const,
    defaultVariants: {
        loading: false,
    },
});

const StartAdornment = styled(Icon, {
    name: 'SearchStartAdornment',
    width: 24,
    height: 24,
    col: '$onSurface' as any,
    marginLeft: 16,
});

const SearchInput = styled(Input, {
    name: 'SearchInput',
    unstyled: true,
    col: '$onSurfaceVariant',
    placeholder: 'Search...',
    marginLeft: 16,
    marginRight: 16,
    flexGrow: 1,
});

const SearchSpinner = styled(Spinner, {
    name: 'SearchSpinner',
    context: SearchContext,
    size: 24,
    col: '$onSurface' as any,
    marginRight: 16,
    variants: {
        loading: {
            true: {},
            false: {
                display: 'none',
            },
        },
    } as const,
    defaultVariants: {
        loading: false,
    },
});

const EndAdornment = styled(Icon, {
    name: 'SearchEndAdornment',
    width: 24,
    height: 24,
    col: '$onSurface' as any,
    marginRight: 16,
});

export const Search = withStaticProperties(SearchFrame, {
    Props: SearchContext.Provider,
    StartAdornment,
    Input: SearchInput,
    EndAdornment,
    Spinner: SearchSpinner,
});

export type SearchBarProps = GetProps<typeof Search> & {
    readonly placeholder?: string;
} & Pick<InputProps, 'onChangeText' | 'value' | 'placeholder'>;

export function SearchBar({
    value,
    onChangeText,
    placeholder = 'Search...',
    ...props
}: SearchBarProps): JSX.Element {
    return (
        <Search {...props}>
            <Search.StartAdornment Icon={SearchIcon} />

            <Search.Input
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />

            <Search.Spinner />
        </Search>
    );
}

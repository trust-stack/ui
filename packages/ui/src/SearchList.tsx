import { Check } from '@tamagui/lucide-icons';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { View, YStack } from 'tamagui';
import { Divider } from './Divider';
import { ListItem } from './List';
import { ListFooter } from './ListFooter';
import { SearchBar } from './Search';
import { useDebounce } from './utils';

type SearchResult = {
    readonly label: string;
    readonly value: number;
};

export type SearchListProps = {
    readonly value?: string | number;
    readonly onChange: (v: string | number) => void;
    readonly placeholder?: string;
    readonly searchFunc: (s: string) => Promise<SearchResult[]>;
};

export function SearchList({
    value,
    onChange,
    searchFunc,
    placeholder = 'Search...',
}: SearchListProps): JSX.Element {
    const [searching, setSearching] = useState<boolean>(undefined);
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<SearchResult[]>([]);

    const debounce = useDebounce(search, 1000);

    useEffect(() => {
        if (!debounce?.length) return;
        setSearching(true);
        searchFunc(debounce)
            .then(setResults)
            .finally(() => setSearching(false));
    }, [debounce]);

    return (
        <YStack gap={12}>
            <View margin={'$spacing.margin_compact'}>
                <SearchBar
                    placeholder={placeholder}
                    value={search}
                    onChangeText={setSearch}
                />
            </View>

            <FlatList
                data={results}
                ItemSeparatorComponent={Divider}
                ListFooterComponent={
                    <ListFooter
                        loading={searching}
                        noResults={
                            !!search && searching === false && !results?.length
                        }
                    />
                }
                renderItem={({ item }) => (
                    <ListItem
                        pressable
                        line={'one'}
                        onPress={() => onChange(item.value)}
                    >
                        <ListItem.Container>
                            <ListItem.Headline
                                adjustsFontSizeToFit
                                numberOfLines={1}
                            >
                                {item.label}
                            </ListItem.Headline>
                        </ListItem.Container>
                        {item.value == value && (
                            <ListItem.TrailingIcon Icon={Check} />
                        )}
                    </ListItem>
                )}
            />
        </YStack>
    );
}

import { View, ViewProps } from 'tamagui';
import { Spinner } from './Spinner';
import { Body } from './typography';

type ListFooterProps = {
    readonly loading?: boolean;
    readonly noResults?: boolean;
    readonly noResultsText?: string;
} & Partial<ViewProps>;

export function ListFooter({
    loading,
    noResults,
    noResultsText,
    ...props
}: ListFooterProps): JSX.Element {
    if (!loading && !noResults) return <></>;

    return (
        <View {...props} padding={20}>
            {loading && <Spinner />}
            {noResults && (
                <Body ta={'center'}>
                    {noResultsText || 'No results found.'}
                </Body>
            )}
        </View>
    );
}

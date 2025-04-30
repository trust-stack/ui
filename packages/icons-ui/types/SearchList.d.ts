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
export declare function SearchList({ value, onChange, searchFunc, placeholder, }: SearchListProps): JSX.Element;
export {};
//# sourceMappingURL=SearchList.d.ts.map
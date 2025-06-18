export type ExtensionFormContentBuilderProps = {
    readonly schema: ExtensionSchema;
    readonly onChange?: (values: any) => void;
};
export declare function ExtensionFormContentBuilder({ schema, onChange, }: ExtensionFormContentBuilderProps): import("react/jsx-runtime").JSX.Element;
type GridValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Property = {
    type: 'number' | 'string' | 'boolean';
    description?: string;
    expanded?: GridValue;
    compact?: GridValue;
};
type Properties = {
    [key: string]: Property;
};
type ExtensionSchema = {
    properties: Properties;
    required: string[];
};
export {};
//# sourceMappingURL=ExtensionFormContentBuilder.d.ts.map
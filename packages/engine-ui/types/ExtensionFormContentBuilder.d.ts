export type ExtensionFormContentBuilderProps = {
    readonly schema: ExtensionSchema;
    readonly onChange?: (values: any) => void;
};
export declare function ExtensionFormContentBuilder({ schema, onChange, }: ExtensionFormContentBuilderProps): import("react/jsx-runtime").JSX.Element;
type Property = {
    type: 'number' | 'string' | 'boolean';
    description?: string;
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
export type ExtensionFormBuilderProps = {
    readonly schema: ExtensionSchema;
    readonly onChange?: (values: any) => void;
};
export declare function ExtensionFormBuilder({ schema, onChange, }: ExtensionFormBuilderProps): import("react/jsx-runtime").JSX.Element;
type Property = {
    type: 'number' | 'string';
};
type Properties = {
    [key: string]: Property;
};
type ExtensionSchema = {
    properties: Properties;
    required: string[];
};
export {};
//# sourceMappingURL=ExtensionFormBuilder.d.ts.map
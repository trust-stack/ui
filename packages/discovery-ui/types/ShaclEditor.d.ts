import { EditorProps } from "@monaco-editor/react";
type ShaclEditorProps = {
    readonly value: string;
    readonly onChange: (value: string) => void;
} & EditorProps;
export declare function ShaclEditor({ value, onChange, ...props }: ShaclEditorProps): JSX.Element;
export {};
//# sourceMappingURL=ShaclEditor.d.ts.map
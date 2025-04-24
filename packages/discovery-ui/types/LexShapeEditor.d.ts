import { EditorProps } from "@monaco-editor/react";
export type LexShapeEditorProps = EditorProps & {
    readonly value?: string;
    readonly onChange?: (value: string) => void;
};
export declare function LexShapeEditor({ value, onChange, ...props }: LexShapeEditorProps): JSX.Element;
//# sourceMappingURL=LexShapeEditor.d.ts.map
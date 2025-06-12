import { YStack } from "@truststack/ui";
import { Editor, EditorProps } from "@monaco-editor/react";
import { useRegisterLexShape } from "./lexshape-lang";

export type LexShapeEditorProps = EditorProps & {
  readonly value?: string;
  readonly onChange?: (value: string) => void;
};

export function LexShapeEditor({
  value,
  onChange,
  ...props
}: LexShapeEditorProps): JSX.Element {
  const register = useRegisterLexShape();
  return (
    <YStack overflow="hidden" flex={1}>
      <Editor
        defaultLanguage="lexshape"
        onMount={(_, monaco) => register(monaco)}
        theme="lexshapeTheme"
        {...props}
        value={value}
        onChange={onChange}
      />
    </YStack>
  );
}

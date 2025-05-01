import { YStack } from "@truststack/ui";
import { Editor, EditorProps } from "@monaco-editor/react";
import { useRegisterLexShape } from "./lexshape-lang";

export type LexShapeRendererProps = {
  readonly value: string;
};

export function LexShapeRenderer({
  value,
}: LexShapeRendererProps): JSX.Element {
  const register = useRegisterLexShape();
  return (
    <YStack overflow="hidden" flex={1}>
      <Editor
        defaultLanguage="lexshape"
        onMount={(_, monaco) => register(monaco)}
        theme="lexshapeTheme"
        value={value}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          lineNumbers: "off",
          folding: false,
          scrollBeyondLastLine: false,
          renderValidationDecorations: "off",
          domReadOnly: true,
          contextmenu: false,
        }}
      />
    </YStack>
  );
}

import { Editor } from "@monaco-editor/react";
import { View } from "tamagui";
import { registerShacl } from "./shacl-lang";

type ShaclRendererProps = {
  readonly value: string;
};

export function ShaclRenderer({ value }: ShaclRendererProps): JSX.Element {
  return (
    <View borderRadius={"$shape.corner_m"} flex={1}>
      <Editor
        defaultLanguage="shacl"
        onMount={(_, monaco) => registerShacl(monaco)}
        theme="vs-dark"
        value={value}
        options={{
          readOnly: true,
          minimap: { enabled: false },
          lineNumbers: "off",
          folding: false,
          scrollBeyondLastLine: false,
          renderValidationDecorations: "off",
        }}
      />
    </View>
  );
}

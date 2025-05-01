import {Editor, EditorProps} from "@monaco-editor/react";
import {View} from "@truststack/ui";
import {registerShacl} from "./shacl-lang";

type ShaclEditorProps = {
  readonly value: string;
  readonly onChange: (value: string) => void;
} & EditorProps;

export function ShaclEditor({
  value,
  onChange,
  ...props
}: ShaclEditorProps): JSX.Element {
  return (
    <View borderRadius={"$shape.corner_m"} flex={1}>
      <Editor
        defaultLanguage="shacl"
        onMount={(_, monaco) => registerShacl(monaco)}
        theme="vs-dark"
        defaultValue={value}
        onChange={onChange}
        {...props}
      />
    </View>
  );
}

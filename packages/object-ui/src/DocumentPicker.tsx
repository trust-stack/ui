import { UploadCloud } from "@tamagui/lucide-icons";
import { Button, ButtonProps } from "@truststack/ui";
import * as DocPicker from "expo-document-picker";

export type DocumentPickerProps = {
  readonly onSelect: (v: DocPicker.DocumentPickerAsset) => void;
  readonly type?: string[];
  readonly label?: string;
  readonly disabled?: boolean;
} & ButtonProps;

export function DocumentPicker({
  onSelect,
  label,
  type = [],
  disabled,
  ...props
}: DocumentPickerProps): JSX.Element {
  const handlePress = () => {
    if (disabled) return;

    DocPicker.getDocumentAsync({
      type,
    }).then((result) => {
      onSelect(result.assets[0]);
    });
  };

  return (
    <Button
      variant="tonal"
      onPress={handlePress}
      disabled={disabled}
      {...props}
    >
      <Button.Icon icon={UploadCloud} />
      <Button.Text>{label || "Upload file"}</Button.Text>
    </Button>
  );
}

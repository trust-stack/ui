import {UploadCloud, X} from "@truststack/icons-ui";
import {
  Button,
  ButtonProps,
  Card,
  IconButton,
  Stack,
  Text,
  YStack,
} from "@truststack/ui";
import * as DocPicker from "expo-document-picker";
import {Fragment} from "react";

export type DocumentsPickerProps = {
  readonly onSelect: (documents: DocPicker.DocumentPickerAsset[]) => void;
  readonly type?: string[];
  readonly label?: string;
  readonly disabled?: boolean;
  readonly documents?: DocPicker.DocumentPickerAsset[];
} & ButtonProps;

export function DocumentsPicker({
  onSelect,
  label,
  type = [],
  disabled,
  documents = [],
  ...props
}: DocumentsPickerProps): JSX.Element {
  const handlePress = async () => {
    if (disabled) return;

    try {
      const result = await DocPicker.getDocumentAsync({
        type,
        multiple: true,
      });

      if (result.assets) {
        onSelect([...documents, ...result.assets]);
      }
    } catch (error) {
      console.error("Error picking documents:", error);
    }
  };

  const removeDocument = (index: number) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    onSelect(newDocuments);
  };

  return (
    <Fragment>
      <YStack gap={12}>
        {documents.map((doc, index) => (
          <Card key={doc.uri} variant="outlined">
            <Card.Body>
              <Stack
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text>{doc.name}</Text>
                <IconButton
                  density="-2"
                  variant="filled-error"
                  onPress={() => removeDocument(index)}
                >
                  <IconButton.Icon icon={X} />
                </IconButton>
              </Stack>
            </Card.Body>
          </Card>
        ))}
        <Button
          variant="tonal"
          onPress={handlePress}
          disabled={disabled}
          {...props}
        >
          <Button.Icon icon={UploadCloud} />
          <Button.Text>{label || "Upload files"}</Button.Text>
        </Button>
      </YStack>
    </Fragment>
  );
}

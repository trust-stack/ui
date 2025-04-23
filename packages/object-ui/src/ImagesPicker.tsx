import {
  Adapt,
  Button,
  Card,
  Dialog,
  IconButton,
  Image,
  Sheet,
  Stack,
  Text,
  YStack,
} from "@truststack/ui";
import { Camera, GalleryHorizontal, ImagePlus, X } from "@tamagui/lucide-icons";
import * as Picker from "expo-image-picker";
import { Fragment, useState } from "react";
import { Alert, Platform, Pressable } from "react-native";

export type ImagesPickerProps = {
  readonly onChange: (images: { uri: string; mimeType: string }[]) => void;
  readonly images?: {
    uri: string;
    mimeType: string;
  }[];
};

export function ImagesPicker({
  onChange,
  images = [],
}: ImagesPickerProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const isMobile = Platform.OS !== "web";

  const closeModal = () => setOpen(false);

  const pickImage = async () => {
    const hasPermission = await requestMediaLibraryPermissions();
    if (!hasPermission) {
      Alert.alert(
        "Permission Required",
        "Please grant camera roll permissions to access your photos."
      );
      return;
    }

    const result = await Picker.launchImageLibraryAsync({
      mediaTypes: Picker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality,
      allowsMultipleSelection: true,
    });

    if (result.assets?.length) {
      const newImages = result.assets.map((asset) => ({
        uri: asset.uri,
        mimeType: asset.mimeType || "image/jpeg",
      }));
      onChange([...images, ...newImages]);
      closeModal();
    }
  };

  const takePhoto = async () => {
    const hasPermission = await requestCameraPermissions();
    if (!hasPermission) {
      Alert.alert(
        "Permission Required",
        "Please grant camera permissions to take photos."
      );
      return;
    }

    const result = await Picker.launchCameraAsync({
      quality,
    });

    if (result.assets?.length) {
      const mimeType = result.assets[0].mimeType || "image/jpeg";
      onChange([...images, { uri: result.assets[0].uri, mimeType }]);
      closeModal();
    }
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onChange(newImages);
  };

  const handlePress = () => {
    if (isMobile) {
      setOpen(true);
    } else {
      pickImage();
    }
  };

  return (
    <Fragment>
      <YStack gap={12}>
        {images.map((image, index) => (
          <Pressable key={image.uri}>
            <Card variant="outlined" w={"100%"}>
              <Card.Body>
                <Image
                  source={{
                    uri: image.uri,
                    width: 200,
                    height: 300,
                  }}
                  alt={"image"}
                  resizeMode="cover"
                  alignSelf="center"
                />
              </Card.Body>
              <Card.Actions display="flex" flexDirection="row">
                <IconButton
                  density="-2"
                  variant="filled-error"
                  onPress={() => removeImage(index)}
                >
                  <IconButton.Icon icon={X} />
                </IconButton>
              </Card.Actions>
            </Card>
          </Pressable>
        ))}
        <Pressable>
          <Card variant="filled" onPress={handlePress} w={"100%"}>
            <Card.Body>
              <YStack alignItems="center" justifyContent="center">
                <ImagePlus />
                <Text fontSize={14}>+ Add Photos</Text>
              </YStack>
            </Card.Body>
          </Card>
        </Pressable>
      </YStack>

      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <Adapt>
          <Sheet modal open={open} onOpenChange={setOpen} snapPoints={[60]}>
            <Sheet.Handle />
            <Sheet.Overlay />
            <Sheet.Frame padding="$spacing.compact_margin">
              <Adapt.Contents />
            </Sheet.Frame>
          </Sheet>
        </Adapt>

        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                <Dialog.Headline>Images Upload</Dialog.Headline>
              </Dialog.Title>
            </Dialog.Header>

            <Stack gap={"$4"}>
              <Button w={"100%"} variant="tonal" onPress={takePhoto}>
                <Button.Text>Take Photo</Button.Text>
                <Button.Icon icon={Camera} />
              </Button>

              <Button w={"100%"} variant="tonal" onPress={pickImage}>
                <Button.Text>Pick from Gallery</Button.Text>
                <Button.Icon icon={GalleryHorizontal} />
              </Button>

              <Button w={"100%"} variant="outlined" onPress={closeModal}>
                <Button.Text>Close</Button.Text>
                <Button.Icon icon={X} />
              </Button>
            </Stack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </Fragment>
  );
}

const quality = 0.5;

const requestMediaLibraryPermissions = async () => {
  if (Platform.OS === "web") return true;
  const { status } = await Picker.requestMediaLibraryPermissionsAsync();
  return status === "granted";
};

const requestCameraPermissions = async () => {
  if (Platform.OS === "web") return true;
  const { status } = await Picker.requestCameraPermissionsAsync();
  return status === "granted";
};

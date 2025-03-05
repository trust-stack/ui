import {View} from "@tamagui/core";
import {Html5Qrcode} from "html5-qrcode";
import {useEffect} from "react";

export type BarcodeScannerProps = {
  readonly onScan: (code: string) => void;
  readonly onError: (error: string) => void;
};

export function BarcodeScanner({
  onScan,
  onError,
}: BarcodeScannerProps): JSX.Element {
  useEffect(() => {
    Html5Qrcode.getCameras().then((devices) => {
      if (devices && devices.length) {
        const html5QrCode = new Html5Qrcode("qr-code-region");
        html5QrCode.start(
          devices[0].id,
          {
            fps: 10,
            qrbox: 250,
          },
          (decodedText) => {
            onScan(decodedText);
          },
          (errorMessage) => {}
        );

        // Cleanup on unmount
        return () => {
          html5QrCode.stop().catch(console.error);
        };
      }
    });
  }, []);

  return (
    <View
      minWidth={300}
      width={300}
      borderRadius={"$shape.corner_m"}
      overflow="hidden"
      position="relative"
    >
      <View id="qr-code-region" />
      <View
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width={200}
        height={200}
        borderRadius={"$shape.corner_m"}
        borderWidth={2}
        borderColor="$surface"
        style={{
          boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
        }}
      />
    </View>
  );
}

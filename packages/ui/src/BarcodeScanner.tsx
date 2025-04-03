import {View, ViewProps} from "@tamagui/core";
import {Html5Qrcode} from "html5-qrcode";
import {useEffect} from "react";

export type BarcodeScannerProps = {
  readonly onScan: (code: string) => void;
  readonly onError?: (error: string) => void;
} & ViewProps;

export function BarcodeScanner({
  onScan,
  onError,
  ...props
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
      {...props}
    >
      <View id="qr-code-region" />
    </View>
  );
}

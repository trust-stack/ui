import {Html5Qrcode} from "html5-qrcode";
import {useEffect, useRef} from "react";
import {View, ViewProps, styled} from "tamagui";

export type BarcodeScannerProps = {
  readonly onScan: (code: string) => void;
  readonly onError?: (error: string) => void;
} & ViewProps;

const ScanRegion = styled(View, {
  position: "relative",
  minWidth: 300,
  width: 300,
  borderRadius: "$shape.corner_m",
  overflow: "hidden",
});

const TargetBox = styled(View, {
  position: "absolute",
  borderColor: "#00ff00",
  borderWidth: 2,
  width: 250,
  height: 250,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  pointerEvents: "none",
});

const VideoRegion = styled(View, {
  width: "100%",
  height: "100%",
});

export function BarcodeScanner({
  onScan,
  onError,
  ...props
}: BarcodeScannerProps): JSX.Element {
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
  const regionId = "qr-code-region";

  useEffect(() => {
    let mounted = true;

    const initializeScanner = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (!mounted || !devices?.length) return;

        // Initialize scanner only if not already initialized
        if (!html5QrCodeRef.current) {
          html5QrCodeRef.current = new Html5Qrcode(regionId);
        }

        const html5QrCode = html5QrCodeRef.current;
        await html5QrCode.start(
          {facingMode: "environment"},
          {
            fps: 10,
            qrbox: {width: 250, height: 250},
            aspectRatio: 1,
          },
          (decodedText) => {
            onScan(decodedText);
          },
          (errorMessage) => {}
        );
      } catch (err) {
        if (onError) {
          onError(err instanceof Error ? err.message : String(err));
        }
        console.error("Error initializing scanner:", err);
      }
    };

    initializeScanner();

    return () => {
      mounted = false;
      if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
        html5QrCodeRef.current
          .stop()
          .then(() => {
            html5QrCodeRef.current?.clear();
          })
          .catch((err) => {
            console.error("Failed to clear scanner:", err);
          });
      }
    };
  }, [onScan, onError]);

  return (
    <ScanRegion {...props}>
      <VideoRegion id={regionId} />
      <TargetBox />
    </ScanRegion>
  );
}

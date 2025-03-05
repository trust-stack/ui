import {View, ViewProps} from "@tamagui/core";
import {WebView} from "react-native-webview";
import {BarcodeScannerProps} from "./BarcodeScanner";

export function BarcodeScanner({
  onScan,
  onError,
  ...props
}: BarcodeScannerProps & Partial<ViewProps>): JSX.Element {
  const onMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.type === "scanSuccess") {
      onScan(data.payload);
    } else if (data.type === "scanError") {
      onError(data.payload);
    }
  };

  return (
    <View
      minWidth={300}
      width={300}
      borderRadius={"$shape.corner_m"}
      overflow="hidden"
      position="relative"
      {...props}
    >
      <WebView
        style={{
          width: "100%",
          height: "100%",
        }}
        source={{html: Doc}}
        onMessage={onMessage}
        mediaPlaybackRequiresUserAction={false}
      />
    </View>
  );
}

const Doc = `
<!DOCTYPE html>
<html>
<head>
    <title>QR Code Scanner</title>
    <script src="https://unpkg.com/html5-qrcode"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
        
        #qr-reader {
            width: 100%;
            height: 100%;
        }
        
        .scanner-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 250px;
            height: 250px;
            border: 2px solid #ffffff;
            border-radius: 20px;
            box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
            pointer-events: none;
        }
    </style>
</head>
<body>
    <div id="qr-reader"></div>
    <div class="scanner-overlay"></div>

    <script>
        function onScanSuccess(decodedText) {
            // Send the scanned code back to React Native
            try {
                // For iOS
                window.webkit.messageHandlers.jsMessageHandler.postMessage(decodedText);
            } catch (e) {
                try {
                    // For Android
                    window.ReactNativeWebView.postMessage(decodedText);
                } catch (e) {
                    console.error('Failed to send message to React Native:', e);
                }
            }
        }

        function onScanError(error) {

        }

        // Initialize QR scanner
        window.addEventListener('load', function() {
            const html5QrCode = new Html5Qrcode("qr-reader");
            
            Html5Qrcode.getCameras().then(devices => {
                if (devices && devices.length) {
                    html5QrCode.start(
                        devices[0].id,
                        {
                            fps: 10,
                            qrbox: 250
                        },
                        onScanSuccess,
                        onScanError
                    );
                }
            }).catch(err => {
                console.error('Error getting cameras:', err);
            });
        });
    </script>
</body>
</html>
`;

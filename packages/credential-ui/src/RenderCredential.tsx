import {View, ViewProps} from "@truststack/ui";
import {Platform} from "react-native";
import {WebView} from "react-native-webview";

export type RenderCredentialProps = {
  readonly render: string;
} & ViewProps;

export function RenderCredential({render, ...props}: RenderCredentialProps) {
  if (Platform.OS === "web") {
    // For web, we use an iframe to ensure proper JavaScript execution
    return (
      <View {...props}>
        <iframe
          srcDoc={render}
          style={{border: "none", width: "100%", height: "100%"}}
          sandbox="allow-scripts allow-same-origin"
        />
      </View>
    );
  }

  return (
    <View {...props}>
      <WebView
        source={{html: render}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
      />
    </View>
  );
}

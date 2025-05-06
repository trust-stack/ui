import {View, ViewProps} from "@truststack/ui";
import {Platform} from "react-native";
import {WebView} from "react-native-webview";

export type RenderCredentialProps = {
  readonly render: string;
} & ViewProps;

export function RenderCredential({render, ...props}: RenderCredentialProps) {
  if (Platform.OS === "web") {
    return (
      <View {...props}>
        <View dangerouslySetInnerHTML={{__html: render}} />
      </View>
    );
  }

  return (
    <View {...props}>
      <WebView source={{html: render}} />
    </View>
  );
}

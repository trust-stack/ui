import ReactQRCode from "react-qr-code";
import {View, ViewProps} from "tamagui";

export type QrCodeProps = {
  readonly value: string;
  readonly size?: number;
} & ViewProps;

export function QrCode({
  value,
  size = 256,
  ...props
}: QrCodeProps): JSX.Element {
  return (
    <View
      background={"$surfaceContainerLowest"}
      borderRadius={"$shape.corner_m"}
      width={size}
      height={size}
      overflow="hidden"
      {...props}
    >
      <View borderRadius={"$shape.corner_m"} overflow="hidden" padding={2}>
        <ReactQRCode
          size={size}
          style={{height: "auto", maxWidth: "100%", width: "100%"}}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </View>
    </View>
  );
}

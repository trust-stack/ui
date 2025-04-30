import { ViewProps } from "@tamagui/core";
export type BarcodeScannerProps = {
    readonly onScan: (code: string) => void;
    readonly onError?: (error: string) => void;
} & ViewProps;
export declare function BarcodeScanner({ onScan, onError, ...props }: BarcodeScannerProps): JSX.Element;
//# sourceMappingURL=BarcodeScanner.d.ts.map
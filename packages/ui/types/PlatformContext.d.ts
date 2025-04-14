import { Platform } from 'react-native';
type PlatformProviderProps = {
    readonly children: React.ReactNode;
    readonly platform?: Platform['OS'];
};
export declare function PlatformProvider({ children, platform, }: PlatformProviderProps): JSX.Element;
export declare const usePlatform: () => "web" | "android" | "ios" | "windows" | "macos";
export {};
//# sourceMappingURL=PlatformContext.d.ts.map
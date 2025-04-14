import { createContext, useContext } from 'react';
import { Platform } from 'react-native';

const PlatformContext = createContext({
    platform: Platform.OS,
});

type PlatformProviderProps = {
    readonly children: React.ReactNode;
    readonly platform?: Platform['OS'];
};

// This wrapper exits so that we can "mock" the platform is various tests and storybook.
export function PlatformProvider({
    children,
    platform,
}: PlatformProviderProps): JSX.Element {
    return (
        <PlatformContext.Provider value={{ platform: platform || Platform.OS }}>
            {children}
        </PlatformContext.Provider>
    );
}

export const usePlatform = () => useContext(PlatformContext).platform;

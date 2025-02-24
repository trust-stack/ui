import React from 'react';
import { usePlatform } from './PlatformContext';

export type RenderNativeProps = {
    readonly children: React.ReactNode;
};

export function RenderNative({ children }: RenderNativeProps): JSX.Element {
    const platform = usePlatform();
    if (platform !== 'web') {
        return <>{children}</>;
    }

    return undefined;
}

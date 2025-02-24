import React from 'react';
import { usePlatform } from './PlatformContext';

export type RenderWebProps = {
    readonly children: React.ReactNode;
};

export function RenderWeb({ children }: RenderWebProps): JSX.Element {
    const platform = usePlatform();
    if (platform === 'web') {
        return <>{children}</>;
    }

    return undefined;
}

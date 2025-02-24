import { GetThemeValueForKey } from '@tamagui/core';
import React, { useEffect, useState } from 'react';
import { OpaqueColorValue } from 'react-native';
import { View } from 'tamagui';
import { Spinner } from './Spinner';

export type IFrameWrapperProps = React.HTMLProps<HTMLIFrameElement> & {
    readonly src: string;
    readonly overlayColor?:
        | OpaqueColorValue
        | 'unset'
        | GetThemeValueForKey<'backgroundColor'>;
};

export function IFrameWrapper({
    src,
    overlayColor,
    ...iframeProps
}: IFrameWrapperProps): JSX.Element {
    const [loading, setLoading] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [src]);

    useEffect(() => {
        if (!loading) {
            const timeoutId = setTimeout(() => setOverlayVisible(false), 600);
            return () => clearTimeout(timeoutId);
        } else {
            setOverlayVisible(true);
        }
    }, [loading]);

    return (
        <View flex={1} flexShrink={0} overflow="hidden" position="relative">
            {overlayVisible && (
                <View
                    style={{
                        transition: 'opacity 0.6s ease-out',
                    }}
                    backgroundColor={overlayColor}
                    position={'absolute'}
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    justifyContent={'center'}
                    alignItems={'center'}
                    zIndex={1}
                    opacity={loading ? 1 : 0}
                >
                    <View
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <Spinner size="large" margin={8} />
                    </View>
                </View>
            )}
            <iframe
                src={src}
                onLoad={() => setLoading(false)}
                style={{
                    ...iframeProps.style,
                }}
                {...iframeProps}
            />
        </View>
    );
}

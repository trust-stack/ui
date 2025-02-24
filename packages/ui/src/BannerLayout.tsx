import React from 'react';
import { View, YStack } from 'tamagui';

export type BannerLayoutProps = {
    readonly BannerContent: React.ReactNode;
    readonly children: React.ReactNode;
};

export function BannerLayout({
    BannerContent,
    children,
}: BannerLayoutProps): JSX.Element {
    return (
        <YStack
            backgroundColor={'$surfaceContainerLowest'}
            style={{ minHeight: '100vh' }}
            alignItems="center"
        >
            <YStack
                alignItems="center"
                fg={1}
                width={'100%'}
                justifyContent="flex-start"
            >
                <View
                    height={200}
                    backgroundColor={'$surface'}
                    width={'100%'}
                    overflow="hidden"
                    alignItems="center"
                    justifyContent="center"
                    marginBottom={'$spacing.exp_margin'}
                >
                    {BannerContent}
                </View>

                {children}
            </YStack>

            {/* <View marginTop={'auto'}>
                <ProvenanceLogo width={220} height={180} />
            </View> */}
        </YStack>
    );
}

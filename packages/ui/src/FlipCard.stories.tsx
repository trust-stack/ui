import { Meta } from '@storybook/react';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { View } from 'tamagui';
import { FlipCard } from './FlipCard';
import { Headline } from './typography';

export default {
    component: FlipCard,
} as Meta;

export const Flip = () => {
    const isFlipped = useSharedValue<boolean>(true);

    return (
        <TouchableOpacity onPress={() => (isFlipped.value = !isFlipped.value)}>
            <FlipCard
                width={400}
                height={400}
                isFlipped={isFlipped}
                RegularContent={
                    <View
                        width={'100%'}
                        height={'100%'}
                        backgroundColor={'$primaryContainer'}
                        borderRadius={'$shape.corner_m'}
                        overflow="hidden"
                        padding={20}
                    >
                        <Headline>Regular Content</Headline>
                    </View>
                }
                FlippedContent={
                    <View
                        width={'100%'}
                        height={'100%'}
                        backgroundColor={'$secondaryContainer'}
                        borderRadius={'$shape.corner_m'}
                        overflow="hidden"
                        padding={20}
                    >
                        <Headline>Flipped Content</Headline>
                    </View>
                }
            />
        </TouchableOpacity>
    );
};

import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    SharedValue,
    interpolate,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { View, ViewProps } from 'tamagui';

export type FlipCardProps = {
    readonly RegularContent: React.ReactNode;
    readonly FlippedContent: React.ReactNode;
    readonly isFlipped: SharedValue<boolean>;
    readonly duration?: number;
    readonly flipDirection?: 'x' | 'y';
} & Partial<ViewProps>;

export function FlipCard({
    RegularContent,
    FlippedContent,
    isFlipped,
    duration = 500,
    flipDirection = 'y',
    ...props
}: FlipCardProps): JSX.Element {
    const isDirectionX = flipDirection === 'x';

    const regularCardAnimatedStyle = useAnimatedStyle(() => {
        const spinValue = interpolate(
            Number(isFlipped.value),
            [0, 1],
            [0, 180]
        );
        const rotateValue = withTiming(`${spinValue}deg`, { duration });

        return {
            transform: [
                isDirectionX
                    ? { rotateX: rotateValue }
                    : { rotateY: rotateValue },
            ],
        };
    }, [isFlipped]);

    const flippedCardAnimatedStyle = useAnimatedStyle(() => {
        const spinValue = interpolate(
            Number(isFlipped.value),
            [0, 1],
            [180, 360]
        );
        const rotateValue = withTiming(`${spinValue}deg`, { duration });

        return {
            transform: [
                isDirectionX
                    ? { rotateX: rotateValue }
                    : { rotateY: rotateValue },
            ],
        };
    }, [isFlipped]);

    return (
        <View {...props}>
            <Animated.View style={[style.regular, flippedCardAnimatedStyle]}>
                {RegularContent}
            </Animated.View>
            <Animated.View style={[style.flipped, regularCardAnimatedStyle]}>
                {FlippedContent}
            </Animated.View>
        </View>
    );
}

const style = StyleSheet.create({
    regular: {
        position: 'absolute',
        backfaceVisibility: 'hidden',
        zIndex: 1,
        width: '100%',
        height: '100%',
    },
    flipped: {
        backfaceVisibility: 'hidden',
        zIndex: 2,
        width: '100%',
        height: '100%',
    },
});

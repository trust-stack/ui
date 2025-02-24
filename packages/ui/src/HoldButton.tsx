import { useEffect, useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import { Spinner, Text, useTheme } from 'tamagui';

const ACTION_TIMER = 1000;

export type HoldButtonProps = {
    readonly text?: React.ReactNode;
    readonly onComplete?: VoidFunction;
    readonly loading?: boolean;
    readonly testID?: string;
};

export function HoldButton({
    text = 'Hold to Delete',
    onComplete,
    loading,
    testID,
}: HoldButtonProps): JSX.Element {
    const [value, setValue] = useState(0);

    const theme = useTheme();

    const pressAction = useRef(new Animated.Value(0)).current;

    const animatedActionComplete = () => onComplete && onComplete();

    useEffect(() => {
        pressAction?.addListener((v) => setValue(v.value));
    }, [pressAction]);

    const handlePressIn = () => {
        Animated.timing(pressAction, {
            duration: ACTION_TIMER,
            toValue: 1,
            useNativeDriver: false,
        }).start(animatedActionComplete);
    };

    const handlePressOut = () => {
        Animated.timing(pressAction, {
            duration: value * ACTION_TIMER,
            toValue: 0,
            useNativeDriver: false,
        }).start();
    };

    const bgColor = pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [theme.errorContainer.val, theme.successContainer.val],
    });

    return (
        <TouchableWithoutFeedback
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Animated.View
                testID={testID}
                style={{
                    backgroundColor: bgColor,
                    borderRadius: 10,
                    padding: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 20,
                }}
            >
                <Text fow={'bold'}>{text}</Text>
                {loading && <Spinner />}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

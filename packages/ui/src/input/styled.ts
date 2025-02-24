import { Select, styled } from 'tamagui';

const Trigger = styled(Select.Trigger, {
    name: 'SelectTrigger',
    height: 56,
    maxHeight: 56,
    borderRadius: '$shape.corner_xs',
    borderWidth: 1,
    borderColor: '$outline',
    disabledStyle: {
        o: 0.38,
        pointerEvents: 'none',
    },
    hoverStyle: {
        borderColor: '$onSurface',
    },
});

import { Pressable } from 'react-native';
import {
    ThemeableStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';

const SwitchContext = createStyledContext({
    active: false,
});

const SwitchFrame = styled(ThemeableStack, {
    name: 'Switch',
    context: SwitchContext,
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 32,
    borderRadius: '$shape.corner_full',
    cursor: 'pointer',
    animateOnly: ['borderColor', 'borderWidth'],
    animation: '100ms',
    variants: {
        active: {
            true: {
                backgroundColor: '$primary',
            },
            false: {
                backgroundColor: '$surfaceContainerHighest',
                borderColor: '$outline',
                borderWidth: '$border.outline',
            },
        },
    } as const,
});

const SwitchThumb = styled(ThemeableStack, {
    name: 'SwitchThumb',
    context: SwitchContext,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '$shape.corner_full',
    animateOnly: ['width', 'height', 'left'],
    position: 'absolute',
    animation: '100ms',
    variants: {
        active: {
            true: {
                left: 52 - 28, // Position when active
                width: 24,
                height: 24,
                backgroundColor: '$onPrimary',
            },
            false: {
                width: 16,
                height: 16,
                left: 2, // Position when inactive
                backgroundColor: '$outline', //
            },
        },
    } as const,
});

const SwitchComposed = withStaticProperties(SwitchFrame, {
    Props: SwitchContext.Provider,
    Thumb: SwitchThumb,
});

export type SwitchProps = {
    readonly active: boolean;
    readonly onChange: (v: boolean) => void;
};

export function Switch({ active, onChange }: SwitchProps): JSX.Element {
    return (
        <Pressable onPress={() => onChange(!active)}>
            <SwitchComposed active={active}>
                <SwitchComposed.Thumb />
            </SwitchComposed>
        </Pressable>
    );
}

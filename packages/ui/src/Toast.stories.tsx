import { Meta } from '@storybook/react';
import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { YStack } from 'tamagui';
import { Button } from './Button';
import { Toast } from './Toast';
import { RenderStage, RenderVariants } from './storybook-utils';
import { useToast } from './useToast';

export default {
    component: Toast,
    decorators: [
        (Story) => (
            <ToastProvider>
                <ToastViewport />
                <Toast />
                <Story />
            </ToastProvider>
        ),
    ],
} as Meta<typeof Toast>;

export const Variants = () => {
    const toast = useToast();

    return (
        <YStack gap={'$4'}>
            <RenderStage>
                <RenderVariants title={'Toasts'}>
                    <Button
                        onPress={() => {
                            toast.success(`I am a success toast`);
                        }}
                    >
                        <Button.Text>Show success</Button.Text>
                    </Button>

                    <Button
                        onPress={() => {
                            toast.warning(`I am a warning toast`);
                        }}
                    >
                        <Button.Text>Show warning</Button.Text>
                    </Button>

                    <Button
                        onPress={() => {
                            toast.info(`I am a info toast`);
                        }}
                    >
                        <Button.Text>Show info</Button.Text>
                    </Button>

                    <Button
                        onPress={() => {
                            toast.error(`I am a error toast`);
                        }}
                    >
                        <Button.Text>Show error</Button.Text>
                    </Button>
                </RenderVariants>
            </RenderStage>
        </YStack>
    );
};

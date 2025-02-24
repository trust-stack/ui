import { Toast as TToast, useToastState } from '@tamagui/toast';
import {
    ThemeableStack,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Label } from './typography';

export type Severity = 'info' | 'success' | 'warning' | 'error';

export const ToastContext = createStyledContext<{ severity: Severity }>({
    severity: 'info',
});

const Frame = styled(ThemeableStack, {
    name: 'ToastFrame',
    context: ToastContext,
    height: 48,
    borderRadius: '$shape.corner_extra_small',
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: 220,
    flexShrink: 1,
    variants: {
        severity: {
            info: {
                backgroundColor: '$infoContainer',
            },
            success: {
                backgroundColor: '$successContainer',
            },
            warning: {
                backgroundColor: '$warningContainer',
            },
            error: {
                backgroundColor: '$errorContainer',
            },
        },
    } as const,
});

const Message = styled(Label, {
    name: 'ToastMessage',
    size: 'large',
    context: ToastContext,
    paddingLeft: 16,
    paddingRight: 16,
    variants: {
        severity: {
            info: {
                col: '$onInfoContainer',
            },
            success: {
                col: '$onSuccessContainer',
            },
            warning: {
                col: '$onWarningContainer',
            },
            error: {
                col: '$onErrorContainer',
            },
        },
    },
});

const ToastFrame = withStaticProperties(Frame, {
    Props: ToastContext.Provider,
    Message,
});

export function Toast(): JSX.Element {
    const currentToast = useToastState();

    if (!currentToast || currentToast.isHandledNatively) return null;

    return (
        <TToast
            key={currentToast?.id}
            duration={currentToast?.duration}
            enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
            exitStyle={{ opacity: 0, scale: 1, y: -20 }}
            y={0}
            opacity={1}
            scale={1}
            animation="100ms"
            viewportName={currentToast?.viewportName}
        >
            <ToastFrame
                severity={currentToast?.severity}
                justifyContent="center"
            >
                <ToastFrame.Message textAlign="center">
                    {currentToast?.title}
                </ToastFrame.Message>
            </ToastFrame>
        </TToast>
    );
}

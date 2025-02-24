import { useToastController } from '@tamagui/toast';

export function useToast() {
    const toast = useToastController();

    const show = (message: string, severity: string) => {
        toast.show(message, { severity });
    };

    return {
        success: (message: string) => show(message, 'success'),
        error: (message: string) => show(message, 'error'),
        info: (message: string) => show(message, 'info'),
        warning: (message: string) => show(message, 'warning'),
    };
}

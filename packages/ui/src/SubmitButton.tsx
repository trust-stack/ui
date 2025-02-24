import { Send } from '@tamagui/lucide-icons';
import { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';

export type SubmitButtonProps = ButtonProps & {
    readonly loading?: boolean;
};

export const SubmitButton = forwardRef<any, SubmitButtonProps>(
    ({ loading = false, ...props }, ref) => {
        return (
            <Button variant="tonal" ref={ref} {...props}>
                <Button.Text>{loading ? 'Submitting' : 'Submit'}</Button.Text>
                {!loading && <Button.Icon Icon={Send} />}
                {loading && <Button.Spinner />}
            </Button>
        );
    }
);

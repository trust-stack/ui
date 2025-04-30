import { ComponentProps, createContext, useContext } from 'react';
import { Pressable, Text } from 'react-native';
import { tv } from 'tailwind-variants';

// Create context for button props
const ButtonContext = createContext<{
    variant?: ButtonVariant;
    density?: ButtonDensity;
    loading?: boolean;
}>({});

type ButtonVariant =
    | 'elevated'
    | 'filled'
    | 'filled-error'
    | 'filled-tonal'
    | 'outlined'
    | 'text'
    | 'tonal'
    | 'tonal-info'
    | 'tonal-success'
    | 'tonal-warning'
    | 'warning';

type ButtonDensity = '0' | '-1' | '-2' | '-3';

// Base button styles
const button = tv({
    base: [
        'px-4',
        'items-center',
        'self-start',
        'flex-row',
        'justify-center',
        'rounded-full',
        'gap-2',
        'bg-blue-500',
    ],
    variants: {
        variant: {
            filled: 'bg-primary active:opacity-80',
            outlined:
                'border border-outline bg-transparent active:bg-primary/10',
            'filled-tonal': 'bg-secondary-container active:opacity-80',
            'filled-error': 'bg-error-container active:bg-error',
            tonal: 'bg-secondary-container',
            'tonal-success': 'bg-success-container active:bg-success',
            'tonal-warning': 'bg-warning-container active:bg-warning',
            'tonal-info': 'bg-info-container active:bg-info',
            elevated: 'bg-surface-container-low shadow-sm bg-blue-500',
            text: 'bg-transparent active:bg-primary/10',
            warning: 'bg-warning active:bg-warning-container',
        },
        density: {
            '0': 'h-10',
            '-1': 'h-9',
            '-2': 'h-8',
            '-3': 'h-7',
        },
        disabled: {
            true: 'opacity-40',
        },
    },
    defaultVariants: {
        variant: 'filled',
        density: '0',
    },
});

// Text styles for button
const buttonText = tv({
    base: 'text-base bg-blue-500',
    variants: {
        variant: {
            filled: 'text-on-primary',
            outlined: 'text-primary',
            'filled-tonal': 'text-on-secondary-container',
            'filled-error': 'text-on-error-container',
            tonal: 'text-on-secondary-container',
            'tonal-success': 'text-on-success-container hover:text-on-success',
            'tonal-warning': 'text-on-warning-container hover:text-on-warning',
            'tonal-info': 'text-on-info-container group-hover:text-on-info',
            elevated: 'text-primary',
            text: 'text-primary bg-blue-500',
            warning: 'text-on-warning hover:text-on-warning-container',
        },
    },
});

// Icon styles for button
// const buttonIcon = tv({
//     base: 'w-[18px] h-[18px]',
//     variants: {
//         variant: {
//             filled: 'text-on-primary',
//             outlined: 'text-primary',
//             'filled-tonal': 'text-on-secondary-container',
//             'filled-error': 'text-on-error-container',
//             tonal: 'text-on-secondary-container',
//             'tonal-success': 'text-on-success-container',
//             'tonal-warning': 'text-on-warning-container',
//             'tonal-info': 'text-on-info-container group-hover:text-on-info',
//             elevated: 'text-primary',
//             warning: 'text-on-warning hover:text-on-warning-container',
//         },
//     },
// });

const ButtonText = ({
    children,
    className,
    ...props
}: ComponentProps<typeof Text>) => {
    const { variant } = useContext(ButtonContext);
    return (
        <Text className={buttonText({ variant, className })} {...props}>
            {children}
        </Text>
    );
};

// const ButtonIcon = ({ className, ...props }) => {
//     const { variant } = useContext(ButtonContext);
//     return <View className={buttonIcon({ variant, className })} {...props} />;
// };

interface ButtonProps extends ComponentProps<typeof Pressable> {
    variant?: ButtonVariant;
    density?: ButtonDensity;
    loading?: boolean;
    className?: string;
}

// TODO: Add Icon, Spinner
export const Button = Object.assign(
    ({
        children,
        variant = 'filled',
        density = '0',
        loading,
        disabled,
        className,
        ...props
    }: ButtonProps) => {
        return (
            <ButtonContext.Provider value={{ variant, loading, density }}>
                <Pressable
                    disabled={disabled || loading}
                    className={button({
                        variant,
                        density,
                        disabled: disabled || loading,
                        className,
                    })}
                    {...props}
                >
                    {children}
                </Pressable>
            </ButtonContext.Provider>
        );
    },
    {
        Text: ButtonText,
        // Icon: ButtonIcon,
    }
);

export type { ButtonProps };

import { ChevronDown } from '@tamagui/lucide-icons';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { TextInput } from 'react-native';
import {
    GetProps,
    View,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { Body } from '../typography';

type InputContext = {
    readonly focused?: boolean;
    readonly error?: boolean;
    readonly disabled?: boolean;
    readonly loading?: boolean;
};

type FocusContext = {
    readonly focused: boolean;
    readonly hasValue: boolean;
    readonly setHasValue: (v: boolean) => void;
};

const FocusContext = createContext<FocusContext>({
    focused: false,
    hasValue: false,
    setHasValue: () => {},
});

const StyledContext = createStyledContext<InputContext>({
    focused: false,
    error: false,
    disabled: false,
    loading: false,
});

const Container = styled(View, {
    name: 'Text',
    context: StyledContext,
    height: 56,
    minWidth: 200,
    maxWidth: 350,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    pos: 'relative',
    disabledStyle: {
        o: 0.4,
        pointerEvents: 'none',
    },
    marginTop: 12,
    hoverStyle: {
        brc: '$onSurface',
        btc: '$onSurface',
        bbc: '$onSurface',
        blc: '$onSurface',
    },
    variants: {
        error: {
            true: {
                brc: '$error',
                btc: '$error',
                bbc: '$error',
                blc: '$error',
                hoverStyle: {
                    brc: '$onErrorContainer',
                    btc: '$onErrorContainer',
                    bbc: '$onErrorContainer',
                    blc: '$onErrorContainer',
                },
                focusStyle: {
                    brc: '$error',
                    btc: '$error',
                    bbc: '$error',
                    blc: '$error',
                },
            },
        },
        disabled: {
            true: {
                brc: '$onSurface',
                btc: '$onSurface',
                bbc: '$onSurface',
                blc: '$onSurface',
                pointerEvents: 'none',
            },
        },
        focused: {
            true: {
                brc: '$primary',
                btc: '$primary',
                bbc: '$primary',
                blc: '$primary',
                borderWidth: 2,
            },
        },
        variant: {
            outlined: {
                bc: 'transparent',
                brc: '$outline',
                btc: '$outline',
                bbc: '$outline',
                blc: '$outline',
                borderWidth: 1,
                borderRadius: '$shape.corner_xs',
                focusStyle: {
                    bw: '$0.5',
                },
            },
        },
    } as const,
    defaultVariants: {
        variant: 'outlined',
    },
});

const Frame = styled(View, {
    name: 'InputFrame',
    context: StyledContext,
});

const FameHOC = Frame.styleable((props, ref) => {
    // State managed within the component
    const [focused, setFocused] = useState<boolean>(false);
    const [hasValue, setHasValue] = useState<boolean>(false);

    const value = useMemo(
        () => ({ focused, hasValue, setHasValue }),
        [focused, hasValue]
    );

    return (
        <FocusContext.Provider value={value}>
            <Frame
                ref={ref}
                {...(props as any)}
                hasValue={hasValue}
                focused={focused}
                onFocus={() => {
                    setFocused(true);
                }}
                onBlur={() => {
                    setFocused(false);
                }}
            />
        </FocusContext.Provider>
    );
});

const Label = styled(Body, {
    name: 'InputLabel',
    context: StyledContext,
    size: 'large',
    col: '$onSurfaceVariant',
    pointerEvents: 'none',
    hoverStyle: {
        col: '$onSurface',
    },
    focusable: true,
    left: 16,
    top: 56 / 2 - 12,
    pos: 'absolute',
    animateOnly: ['top', 'left', 'px', 'fontSize', 'fow'],
    animation: 'medium',
    variants: {
        error: {
            true: {
                col: 'red',
                hoverStyle: {
                    col: '$onErrorContainer',
                },
            },
        },
        disabled: {
            true: {
                opacity: 0.38,
            },
        },
        focused: {
            true: {
                col: '$primary',
                size: 'medium',
                top: -20,
                left: -1,
            },
        },
        hasValue: {
            true: {
                col: '$primary',
                size: 'medium',
                top: -20,
                left: -1,
            },
        },
    } as const,
});

const LabelHOC = Label.styleable((props, ref) => {
    const { focused, hasValue } = useContext(FocusContext);
    const { error } = useContext(StyledContext) as any;

    return (
        <Label
            ref={ref}
            {...props}
            focused={focused}
            hasValue={hasValue}
            error={error}
        />
    );
});

const InputText = styled(TextInput, {
    name: 'InputText',
    context: StyledContext,
    paddingLeft: 16,
    fg: 1,
    variants: {
        error: {
            true: {
                col: '$error' as any,
            },
        },
    },
});

const InputTextHOC = InputText.styleable((props, ref) => {
    const { setHasValue } = useContext(FocusContext);

    useEffect(() => {
        setHasValue(!!props.value || !!props.placeHolder);
    }, [props.value, props.placeHolder]);

    return <InputText {...props} ref={ref} />;
});

const SupportingText = styled(Body, {
    name: 'InputSupportingText',
    context: StyledContext,
    size: 'small',
    col: '$onSurfaceVariant',
    marginLeft: 16,
    marginTop: 4,
    hoverStyle: {
        col: '$onSurfaceVariant',
    },
    variants: {
        disabled: {
            true: {
                opacity: 0.38,
                col: '$onSurface',
            },
        },
        error: {
            true: {
                col: '$error',
                hoverStyle: {
                    col: '$error',
                },
            },
        },
        focused: {
            true: {
                col: '$onSurfaceVariant',
            },
        },
    } as const,
});

const SupportTextHOC = SupportingText.styleable((props, ref) => {
    const { focused } = useContext(FocusContext);

    return <SupportingText {...props} ref={ref} focused={focused} />;
});

const InputSpinner = styled(Spinner, {
    name: 'InputSpinner',
    context: StyledContext,
    height: 24,
    marginLeft: 16,
    marginRight: 12,
    display: 'none',
    variants: {
        loading: {
            true: {
                display: 'block',
            },
        },
    } as const,
});

const InputCaret = styled(ChevronDown, {
    name: 'InputCaret',
    context: StyledContext,
    height: 24,
    animateOnly: ['transform'],
    animation: 'medium',
    variants: {
        focused: {
            true: {
                transform: 'rotate(180deg)',
            },
        },
    } as const,
});

const HOCInputCaret = InputCaret.styleable((props, ref) => {
    const { focused } = useContext(FocusContext);

    return (
        <View marginLeft={16} marginRight={12}>
            <InputCaret {...props} ref={ref} focused={focused} />
        </View>
    );
});

const TrailingIcon = styled(Icon, {
    name: 'InputTrailingIcon',
    context: StyledContext,
    marginLeft: 16,
    marginRight: 12,
    variants: {
        loading: {
            true: {
                display: 'none',
            },
        },
        error: {
            true: {
                col: '$error' as any,
            },
        },
    },
});

export const Input = withStaticProperties(FameHOC, {
    Props: StyledContext.Provider,
    Text: InputTextHOC,
    TrailingIcon,
    Container,
    Label: LabelHOC,
    SupportingText: SupportTextHOC,
    Spinner: InputSpinner,
    InputCaret: HOCInputCaret,
});

export type InputProps = GetProps<typeof Input>;

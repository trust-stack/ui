import { ChevronDown, Info } from '@tamagui/lucide-icons';
import {
    createContext,
    forwardRef,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { TextInputProps } from 'react-native';
import {
    GetProps,
    Input as TInput,
    View,
    createStyledContext,
    styled,
    withStaticProperties,
} from 'tamagui';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { CompactTooltip } from '../Tooltip';
import { Body } from '../typography';

type InputContext = {
    readonly focused?: boolean;
    readonly error?: boolean;
    readonly disabled?: boolean;
    readonly loading?: boolean;
    readonly fluid?: boolean;
    readonly density?: '0' | '-1' | '-2' | '-3';
    readonly bare?: true;
    readonly focusable?: boolean;
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
    fluid: true,
    density: '0',
    focusable: true,
});

const Container = styled(View, {
    name: 'Text',
    context: StyledContext,
    minHeight: 56,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 16,
    marginBottom: 16,
    cursor: 'pointer',
    disabledStyle: {
        o: 0.4,
    },
    group: 'input',
    hoverStyle: {
        brc: '$onSurface',
        btc: '$onSurface',
        bbc: '$onSurface',
        blc: '$onSurface',
    },
    variants: {
        fluid: {
            true: {
                maxWidth: undefined,
                minWidth: undefined,
            },
            false: {
                maxWidth: 350,
                minWidth: 200,
            },
        },
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
            false: {},
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
        density: {
            '0': {
                minHeight: 56,
                marginTop: 16,
                marginBottom: 16,
            },
            '-1': {
                minHeight: 52,
                marginTop: 12,
                marginBottom: 12,
            },
            '-2': {
                minHeight: 48,
                marginTop: 8,
                marginBottom: 8,
            },
            '-3': {
                minHeight: 40,
                marginTop: 4,
                marginBottom: 4,
            },
        },
        // No supporting text or label, remove padding
        bare: {
            true: {
                marginTop: 0,
                marginBottom: 0,
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
    variants: {
        loading: {
            true: {},
            false: {},
        },
        density: {
            '0': {},
            '-1': {},
            '-2': {},
            '-3': {},
        },
    } as const,
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
    focusable: false,
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
            false: {},
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
    const { error, focusable } = useContext(StyledContext) as any;

    return (
        <Label
            ref={ref}
            {...props}
            focused={focusable && focused} // respect focusable prop
            hasValue={hasValue}
            error={Boolean(error)}
        />
    );
});

const InputText = styled(TInput, {
    name: 'InputText',
    context: StyledContext,
    padding: 16,
    minWidth: 0,
    fg: 1,
    flexBasis: 0,
    focusStyle: {
        borderWidth: 0,
        outlineStyle: 'none',
    },
    backgroundColor: 'transparent',
    color: '$onSurface',
    placeholderTextColor: '$onSurface',
    variants: {
        error: {
            true: {
                col: '$error' as any,
            },
            false: {},
        },
        density: {
            '0': {},
            '-1': {
                padding: 12,
            },
            '-2': {
                padding: 8,
            },
            '-3': {
                padding: 4,
            },
        },
    } as const,
});

const InputTextHOC = InputText.styleable(({ multiline, ...props }, ref) => {
    let minHeight = 48;
    let maxHeight = 96;

    const context = useContext(StyledContext.context);

    if (context.density === '-1') {
        minHeight = 44;
        maxHeight = 92;
    } else if (context.density === '-2') {
        minHeight = 40;
        maxHeight = 88;
    } else if (context.density === '-3') {
        minHeight = 36;
        maxHeight = 84;
    }

    const [inputHeight, setInputHeight] = useState(minHeight);
    const { setHasValue } = useContext(FocusContext);

    useEffect(() => {
        if (props.value == '') {
            setHasValue(false);
            return;
        }

        setHasValue(props.value == 0 || !!props.value || !!props.placeHolder);
    }, [props.value, props.placeHolder, ref]);

    const onContentSizeChange: TextInputProps['onContentSizeChange'] = (
        event
    ) => {
        if (!multiline) return;
        setInputHeight(event.nativeEvent.contentSize.height);
    };

    return context.focusable ? (
        <InputText
            {...props}
            ref={ref}
            value={props.value == null ? '' : props.value}
            placeholder={props.value}
            minHeight={minHeight}
            maxHeight={maxHeight}
            height={Math.max(minHeight, inputHeight)}
            onContentSizeChange={onContentSizeChange}
            editable={context.focusable}
            borderWidth={0.5}
            borderColor="transparent"
        />
    ) : (
        <View
            f={1}
            minHeight={minHeight}
            maxHeight={maxHeight}
            height={Math.max(minHeight, inputHeight)}
            ai="flex-start"
            jc="center"
            p={16}
        >
            <Body>{props.value}</Body>
        </View>
    );
});

const SupportingText = styled(Body, {
    name: 'InputSupportingText',
    context: StyledContext,
    size: 'small',
    col: '$onSurfaceVariant',
    left: 16,
    bottom: 0,
    pos: 'absolute',
    hoverStyle: {
        col: '$onSurfaceVariant',
    },
    textOverflow: 'ellipsis',
    numberOfLines: 1,
    ellipse: true,
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
            false: {},
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
        density: {
            '0': {},
            '-1': {
                height: 20,
                marginLeft: 12,
                marginRight: 8,
            },
            '-2': {
                height: 16,
                marginLeft: 8,
                marginRight: 4,
            },
            '-3': {
                height: 12,
                marginLeft: 4,
                marginRight: 2,
            },
        },
    } as const,
});

const InputCaret = styled(ChevronDown, {
    name: 'InputCaret',
    context: StyledContext,
    size: 24,
    animateOnly: ['transform'],
    animation: 'medium',
    variants: {
        focused: {
            true: {
                transform: 'rotate(180deg)',
            },
        },
        density: {
            '0': {},
            '-1': {
                size: 20,
            },
            '-2': {
                size: 16,
            },
            '-3': {
                size: 12,
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
    marginRight: 12,
    col: '$onSurfaceVariant' as any,
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
            false: {},
        },
        density: {
            '0': {},
            '-1': {
                marginRight: 8,
            },
            '-2': {
                marginRight: 6,
            },
            '-3': {
                marginRight: 4,
            },
        },
    },
});

const InputAdornment = styled(Body, {
    name: 'InputSpinner',
    context: StyledContext,
    marginRight: 12,
    col: '$onSurfaceVariant',
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
            false: {},
        },
        focused: {
            true: {
                col: '$onSurfaceVariant',
            },
        },
        density: {
            '0': {},
            '-1': {
                marginRight: 8,
            },
            '-2': {
                marginRight: 6,
            },
            '-3': {
                marginRight: 4,
            },
        },
    } as const,
});

type TooltipProps = {
    label: string;
};

const Tooltip = forwardRef<any, TooltipProps>(({ label }, ref) => {
    const { focused } = useContext(FocusContext);

    return (
        <View mr={'$shape.corner_m'} ref={ref}>
            <CompactTooltip label={label}>
                <Icon
                    Icon={Info}
                    color={focused ? '$primary' : '$onSurfaceVariant'}
                />
            </CompactTooltip>
        </View>
    );
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
    Adornment: InputAdornment,
    Tooltip,
});

export type InputProps = GetProps<typeof Input>;

import { ChevronLeft, ChevronRight, Upload } from '@tamagui/lucide-icons';
import { useEffect, useMemo, useRef, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { Animated, Dimensions, Pressable, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, XStack, useWindowDimensions } from 'tamagui';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Spinner } from '../Spinner';
import { useFormContext } from '../form/context';
import { CompactScreen } from '../CompactScreen';
import { BottomAppBar } from '../BottomAppBar';
import { TopAppBar } from '../TopAppBar';
import { PaginationDot } from './PaginationDot';
import { PagerFormProps } from './types';

const WIDTH = Dimensions.get('window').width;

export function PagerForm<TFieldValues extends FieldValues>({
    forms: FORMS,
    onSubmit,
    submitting,
    loading,
    onBack,
}: PagerFormProps<TFieldValues>): JSX.Element {
    const [width, setWidth] = useState<number>(WIDTH);
    const [page, setPage] = useState<number>(0);
    const scrollRef = useRef<ScrollView>();
    const scrollOffsetX = useRef(new Animated.Value(0)).current;
    const { formState, trigger } = useFormContext<TFieldValues>();
    const windowDimensions = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const forms = useMemo(() => FORMS.filter((f) => !f.hidden), [FORMS]);

    const onPage = (index: number) => {
        if (scrollRef.current)
            scrollRef.current.scrollTo({
                y: 0,
                x: windowDimensions.width * index,
            });
    };

    const onNext = () => {
        setPage(page + 1);
    };

    const onPrev = () => setPage(page - 1);

    const disablePrev = page == 0;
    const disableNext = page == forms.length + 1 || loading;
    const isSubmit = page == forms.length - 1;
    const disabledSubmit = !formState.isValid || submitting;

    useEffect(() => {
        onPage(page);
    }, [page]);

    useEffect(() => {
        trigger();
    }, []);

    return (
        <CompactScreen onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
            <CompactScreen.Header>
                <TopAppBar backgroundColor={'$surfaceContainerLowest'}>
                    <TopAppBar.TopRail>
                        <Pressable onPress={onBack}>
                            <TopAppBar.LeadingIcon icon={ChevronLeft} />
                        </Pressable>

                        <Ticker
                            forms={forms}
                            animatedValue={scrollOffsetX}
                            width={width}
                        />

                        <TopAppBar.TrailItemsContainer>
                            {(loading || submitting) && <Spinner />}
                        </TopAppBar.TrailItemsContainer>
                    </TopAppBar.TopRail>
                </TopAppBar>
            </CompactScreen.Header>
            <CompactScreen.Content backgroundColor={'$surfaceContainerLowest'}>
                <Animated.ScrollView
                    horizontal
                    pagingEnabled
                    scrollEnabled={false}
                    scrollEventThrottle={16}
                    ref={scrollRef}
                    style={{ width: '100%', flexGrow: 1 }}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollOffsetX,
                                    },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                >
                    {forms.map((form, index) => (
                        // TODO: https://github.com/APSL/react-native-keyboard-aware-scroll-view
                        <KeyboardAwareScrollView
                            key={`sub-form-${index}`}
                            style={{ width }}
                            showsVerticalScrollIndicator={false}
                        >
                            <View padding={'$spacing.margin_compact'}>
                                {typeof form.content == 'function'
                                    ? form.content()
                                    : form.content}
                            </View>
                        </KeyboardAwareScrollView>
                    ))}
                </Animated.ScrollView>
            </CompactScreen.Content>
            <CompactScreen.Footer>
                <BottomAppBar
                    paddingBottom={insets.bottom}
                    height={80 + insets.bottom}
                    justifyContent="flex-start"
                    alignContent="center"
                >
                    <IconButton
                        variant="filled"
                        onPress={onPrev}
                        disabled={disablePrev}
                    >
                        <IconButton.Icon icon={ChevronLeft} />
                    </IconButton>

                    <XStack ai={'center'} f={1} gap={22} pl={22}>
                        {forms.map((f, index) => (
                            <PaginationDot
                                key={`pagination-dot-${index}`}
                                onPress={() => setPage(index)}
                                active={page == index}
                                id={f.id}
                            />
                        ))}
                    </XStack>

                    <View>
                        <Button
                            variant="filled"
                            onPress={isSubmit ? onSubmit : onNext}
                            loading={submitting || loading}
                            disabled={isSubmit ? disabledSubmit : disableNext}
                        >
                            <Button.Spinner />
                            <Button.Text>
                                {isSubmit ? 'Submit' : 'Next'}
                            </Button.Text>
                            <Button.Icon
                                Icon={isSubmit ? Upload : ChevronRight}
                            />
                        </Button>
                    </View>
                </BottomAppBar>
            </CompactScreen.Footer>
        </CompactScreen>
    );
}

const TICKER_HEIGHT = 56;

type PagerSubForm = {
    readonly title: string;
};

type TickerProps = {
    readonly animatedValue: Animated.Value;
    readonly forms: PagerSubForm[];
    readonly width: number;
};

function Ticker({ animatedValue, forms, width }: TickerProps): JSX.Element {
    const inputRange = [0, forms.length * width];
    const translateY = animatedValue.interpolate({
        inputRange,
        outputRange: [0, forms.length * -TICKER_HEIGHT],
    });

    return (
        <View
            maxHeight={TICKER_HEIGHT}
            height={TICKER_HEIGHT}
            overflow="hidden"
            flexShrink={1}
        >
            <Animated.View style={{ transform: [{ translateY }] }}>
                {forms.map(({ title }, index) => {
                    return (
                        <TopAppBar.SmallHeadline
                            adjustsFontSizeToFit
                            key={index}
                            pt={TICKER_HEIGHT / 4}
                            pb={TICKER_HEIGHT / 4}
                        >
                            {title}
                        </TopAppBar.SmallHeadline>
                    );
                })}
            </Animated.View>
        </View>
    );
}

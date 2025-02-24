import { AnimatePresence } from '@tamagui/animate-presence';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';
import { useEffect, useState } from 'react';
import { Image, Text, View, XStack, YStack, styled } from 'tamagui';
import { IconButton } from './IconButton';
import { getImageAspectRatio } from './utils';

export type ImageCarouselProps = {
    readonly images: { src: string; label?: string }[];
    readonly height?: number;
};

export function ImageCarousel({
    images = [],
    height = 300,
}: ImageCarouselProps): JSX.Element {
    const [[page, going], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);
    const paginate = (going: number) => {
        setPage([page + going, going]);
    };

    if (!images.length) return <></>;

    return (
        <XStack
            overflow="hidden"
            backgroundColor={'$surfaceContainerLowest'}
            position="relative"
            height={height}
            width="100%"
            alignItems="center"
            borderRadius={'$shape.corner_m'}
        >
            <AnimatePresence initial={false} custom={{ going }}>
                <GalleryItem key={page} animation="slow" going={going}>
                    <RenderImage
                        src={images[imageIndex].src}
                        label={images[imageIndex].label}
                        height={height}
                    />
                </GalleryItem>
            </AnimatePresence>

            <IconButton
                accessibilityLabel="Carousel left"
                position="absolute"
                density="-1"
                variant="filled-tonal"
                left={'$spacing.compact_margin'}
                bottom={'$spacing.compact_margin'}
                onPress={() => paginate(-1)}
                zi={100}
            >
                <IconButton.Icon Icon={ArrowLeft} />
            </IconButton>

            <IconButton
                accessibilityLabel="Carousel left"
                position="absolute"
                variant="filled-tonal"
                density="-1"
                right={'$spacing.compact_margin'}
                bottom={'$spacing.compact_margin'}
                onPress={() => paginate(1)}
                zi={100}
            >
                <IconButton.Icon Icon={ArrowRight} />
            </IconButton>
        </XStack>
    );
}

export type RenderImageProps = {
    readonly src: string;
    readonly label?: string;
    readonly height?: number;
};

export function RenderImage({
    src,
    label,
    height,
}: RenderImageProps): JSX.Element {
    const [imageAspectRatio, setImageAspectRatio] = useState(1);

    useEffect(() => {
        if (!src) return;

        getImageAspectRatio(src)
            .then((ratio) => {
                setImageAspectRatio(ratio);
            })
            .catch(() => null);
    }, [src]);

    return (
        <View position="relative">
            <Image
                alignSelf="center"
                source={{
                    uri: src,
                    width: height * imageAspectRatio,
                    height,
                }}
            />
            {label && (
                <Text
                    position="absolute"
                    textAlign="center"
                    bottom={0}
                    left={0}
                    right={0}
                    color={'white'}
                    fontWeight={'bold'}
                    textShadowColor={'black'}
                    textShadowOffset={{ width: 1, height: 1 }}
                    textShadowRadius={4}
                >
                    {label}
                </Text>
            )}
        </View>
    );
}

const GalleryItem = styled(YStack, {
    zIndex: 1,
    x: 0,
    opacity: 1,
    fullscreen: true,
    variants: {
        // 1 = right, 0 = nowhere, -1 = left
        going: {
            ':number': (going) => ({
                enterStyle: {
                    x: going > 0 ? 1000 : -1000,
                    opacity: 0,
                },
                exitStyle: {
                    zIndex: 0,
                    x: going < 0 ? 1000 : -1000,
                    opacity: 0,
                },
            }),
        },
    } as const,
});

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

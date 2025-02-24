import * as d3 from 'd3-shape';
import { isEqual } from 'lodash';
import { useState } from 'react';
import { LayoutRectangle } from 'react-native';
import { G, Path, Svg } from 'react-native-svg';
import { View, ViewProps, XStack, YStack } from 'tamagui';
import { Chip } from './Chip';
import { Body, Title } from './typography';

export type PieChartProps = {
    readonly data: DataItem[];
    readonly title?: string | number;
    readonly subtitle?: string;
    readonly radius?: number;
    readonly hideLegend?: boolean;
} & ViewProps;

export function PieChart({
    data,
    title,
    subtitle,
    radius: inputRadius,
    hideLegend,
    ...props
}: PieChartProps): JSX.Element {
    const [layout, setLayout] = useState<LayoutRectangle>();
    const radius = inputRadius || Math.min(layout?.width, layout?.height) / 2;

    const pie = d3.pie<DataItem>().value((v) => v.value)(data);

    const arc = d3
        .arc<d3.PieArcDatum<DataItem>>()
        .innerRadius(radius * 0.6)
        .outerRadius(radius);

    const maxWidth = radius;

    const fillColors = getRandomFillColors(pie?.length);

    return (
        <YStack gap={20} height={'100%'}>
            <View
                flexGrow={1}
                onLayout={(e) => {
                    if (isEqual(layout, e.nativeEvent.layout)) return;
                    setLayout(e.nativeEvent.layout);
                }}
                position="relative"
            >
                <Svg width={'100%'} height={'100%'}>
                    <G
                        transform={`translate(${layout?.width / 2}, ${
                            layout?.height / 2
                        })`}
                    >
                        {/* TODO: Add mouse hover */}
                        {pie.map((slice, index) => (
                            <Path
                                key={`slice-${index}`}
                                d={arc(slice)}
                                stroke={'white'}
                                fill={slice.data.fill || fillColors[index]}
                            />
                        ))}
                    </G>
                </Svg>

                <YStack
                    position="absolute"
                    justifyContent="center"
                    top={0}
                    bottom={0}
                    left={'50%'}
                    transform="translate(-50%, 0)"
                    width={maxWidth}
                >
                    {!!title?.toString() && (
                        <Title
                            textAlign="center"
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            size="large"
                        >
                            {title}
                        </Title>
                    )}
                    {!!subtitle && <Body textAlign="center">{subtitle}</Body>}
                </YStack>
            </View>
            {!hideLegend && (
                <XStack
                    justifyContent="center"
                    alignItems="center"
                    alignContent="center"
                    gap={12}
                    flexWrap="wrap"
                >
                    {pie.map((p, index) => (
                        <Chip
                            variant="filter"
                            backgroundColor={p.data.fill || fillColors[index]}
                            density={'-2'}
                        >
                            <Chip.Text>{p.data.label}</Chip.Text>
                        </Chip>
                    ))}
                </XStack>
            )}
        </YStack>
    );
}

type DataItem = {
    value: number;
    label: string;
    fill?: string;
    stroke?: string;
};
const getRandomFillColors = (numColors = 1) => {
    const colors: string[] = [];
    const step = 360 / numColors; // Divide the hue spectrum evenly

    for (let i = 0; i < numColors; i++) {
        const hue = i * step; // Evenly space hues around the color wheel
        const saturation = Math.floor(Math.random() * 10) + 80; // High saturation for vibrant colors
        const lightness = Math.floor(Math.random() * 10) + 70; // Keep lightness in the middle range
        colors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }

    return colors;
};

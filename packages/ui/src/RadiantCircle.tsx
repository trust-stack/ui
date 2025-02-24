import { useEffect, useState } from 'react';
import { Stack } from 'tamagui';
import { rgbToRgba } from './utils';

export type RadiantCircleProps = {
    readonly size?: 's' | 'm' | 'l';
};

export function RadiantCircle({ size = 'm' }: RadiantCircleProps): JSX.Element {
    const multiple = size === 's' ? 0.5 : size === 'm' ? 1 : 1.5;

    const [scales, setScales] = useState([1, 1.2, 1.4]);

    useEffect(() => {
        const interval = setInterval(() => {
            setScales((prevScales) =>
                prevScales.map((scale) => (scale >= 1.5 ? 1 : scale + 0.1))
            );
        }, 200); // Adjust interval for speed of expansion

        return () => clearInterval(interval);
    }, []);

    return (
        <Stack
            position="relative"
            width={10 * multiple}
            height={10 * multiple}
            alignItems="center"
            justifyContent="center"
            scale={multiple}
        >
            {/* Inner Circle */}
            <Stack
                position="absolute"
                margin={'auto'}
                width={10}
                height={10}
                borderRadius={5}
                backgroundColor={rgbToRgba('$success', 0.8)} // Slightly darker green core
            />

            {/* First Glow Layer */}
            <Stack
                width={15}
                height={15}
                borderRadius={7.5}
                backgroundColor={rgbToRgba('$success', 0.4)} // Reduced opacity for softer glow
                position="absolute"
                margin={'auto'}
                scale={scales[0]}
                opacity={scales[0] > 1.2 ? 0.5 : 0}
                style={{
                    transition:
                        'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}
            />

            {/* Second Glow Layer */}
            <Stack
                width={20}
                height={20}
                borderRadius={10}
                backgroundColor={rgbToRgba('$success', 0.19)} // Further reduced opacity
                position="absolute"
                margin={'auto'}
                scale={scales[1]}
                opacity={scales[1] > 1.3 ? 0.3 : 0}
                style={{
                    transition:
                        'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}
            />

            {/* Third Glow Layer */}
            <Stack
                width={25}
                height={25}
                borderRadius={12.5}
                backgroundColor={rgbToRgba('$success', 0.2)} // Very faint outer glow
                position="absolute"
                margin={'auto'}
                scale={scales[2]}
                opacity={scales[2] > 1.4 ? 0.2 : 0}
                style={{
                    transition:
                        'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
                }}
            />
        </Stack>
    );
}

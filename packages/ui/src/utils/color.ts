import { OpaqueColorValue } from 'react-native';
import { Token, getTokens } from 'tamagui';

export function rgbToRgba(token: Token, opacity: number = 1): OpaqueColorValue {
    const tokens = getTokens();

    let val = tokens.color[token as any].val;

    if (val.startsWith('#')) {
        val = hexToRgb(val);
    }

    // Extract the RGB values from the input string
    const match = val.match(/\d+/g);

    if (!match) {
        throw new Error('Invalid RGB format');
    }

    // Parse the RGB values
    const red = parseInt(match[0], 10);
    const green = parseInt(match[1], 10);
    const blue = parseInt(match[2], 10);

    // Validate the opacity value
    if (opacity < 0 || opacity > 1) {
        throw new Error('Opacity must be a value between 0 and 1');
    }

    // Return the RGBA format string
    return `rgba(${red}, ${green}, ${blue}, ${opacity})` as any as OpaqueColorValue;
}

export function convertRgbToRgba(rgb: string, opacity: number = 1): string {
    // Extract the RGB values using a regular expression
    const rgbValues = rgb.match(/\d+/g);

    if (rgbValues && rgbValues.length === 3) {
        const [r, g, b] = rgbValues.map(Number);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else {
        return rgb;
    }
}

export function rgbToHex(rgb: string): string {
    // Use a regular expression to extract the RGB values (handles both 'rgb(10 10 10)' and 'rgb(10, 10, 10)' formats)
    const result = rgb.match(/\d+/g);

    if (!result || result.length !== 3) {
        throw new Error('Invalid RGB format');
    }

    // Convert the RGB values to hex
    const hex = result
        .map((value) => {
            const hexValue = parseInt(value).toString(16);
            return hexValue.padStart(2, '0'); // Ensure each hex value is 2 digits
        })
        .join('');

    return `#${hex}`;
}

export function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return `rgb(${parseInt(result[1], 16)}, ${parseInt(
        result[2],
        16
    )}, ${parseInt(result[3], 16)})`;
}

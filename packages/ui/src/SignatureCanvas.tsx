import RSignatureCanvas from 'react-signature-canvas';
import { View } from 'tamagui';
import { RefreshCcw } from '@tamagui/lucide-icons';
import { useRef } from 'react';
import { IconButton } from './IconButton';
import { CompactTooltip } from './Tooltip';

export type SignatureCanvasProps = {
    readonly width: number;
    readonly height: number;
    readonly onChange: (signatureURL: string) => void;
};

export function SignatureCanvas({
    width,
    height,
    onChange,
}: SignatureCanvasProps): JSX.Element {
    const ref = useRef<RSignatureCanvas>();

    const onEnd = () => {
        if (!ref?.current) return;
        onChange(ref.current.getTrimmedCanvas().toDataURL('image/png'));
    };

    const onClear = () => {
        if (!ref?.current) return;
        ref.current.clear();
        onChange(null);
    };

    return (
        <View
            position="relative"
            alignSelf="center"
            mt={10}
            mb={10}
            width={width}
            borderWidth={1}
            borderRadius="$shape.corner_xs"
            borderColor={'$surfaceContainerHighest'}
        >
            <IconButton
                variant="standard"
                position="absolute"
                bottom={5}
                right={5}
                onPress={onClear}
            >
                <CompactTooltip label="Clear">
                    <IconButton.Icon Icon={RefreshCcw} />
                </CompactTooltip>
            </IconButton>
            <RSignatureCanvas
                ref={ref}
                penColor="black"
                canvasProps={{
                    width,
                    height,
                    className: 'sigCanvas',
                    style: { backgroundColor: 'white' },
                }}
                onEnd={onEnd}
            />
        </View>
    );
}

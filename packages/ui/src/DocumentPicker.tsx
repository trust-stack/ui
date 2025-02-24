import { UploadCloud } from '@tamagui/lucide-icons';
import * as DocPicker from 'expo-document-picker';
import { GetProps, ThemeableStack, styled } from 'tamagui';
import { Body } from './typography';

export type DocumentPickerProps = {
    readonly onSelect: (v: DocPicker.DocumentPickerAsset) => void;
    readonly type?: string[];
    readonly label?: string;
    readonly disabled?: boolean;
} & GetProps<typeof Picker>;

export function DocumentPicker({
    onSelect,
    label,
    type = [],
    disabled,
    ...props
}: DocumentPickerProps): JSX.Element {
    const handlePress = () => {
        DocPicker.getDocumentAsync({
            type,
        }).then((result) => {
            onSelect(result.assets[0]);
        });
    };

    return (
        <Picker
            disabled={disabled}
            onPress={() => !disabled && handlePress()}
            {...props}
        >
            <UploadCloud />
            <Body>{label || 'Upload file'}</Body>
        </Picker>
    );
}

const Picker = styled(ThemeableStack, {
    name: 'DocumentPicker',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '$shape.corner_full',
    borderWidth: '$border.outline',
    borderColor: '$outline',
    cursor: 'pointer',
    minHeight: 120,
    width: 240,
    hoverStyle: {
        shadowColor: '$shadow_opacity',
        shadowRadius: '$shadow.2',
    },
    disabledStyle: {
        cursor: 'not-allowed',
        opacity: 0.4,
    },
});

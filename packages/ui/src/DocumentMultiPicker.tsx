import { Trash, UploadCloud } from '@tamagui/lucide-icons';
import * as DocPicker from 'expo-document-picker';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Pressable } from 'react-native';
import {
    GetProps,
    ScrollView,
    ThemeableStack,
    View,
    XStack,
    YStack,
    styled,
} from 'tamagui';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { renderFileSize } from './render';
import { Body } from './typography';

export type DocumentMultiPickerProps = {
    readonly onSelect: (v: DocPicker.DocumentPickerAsset[]) => void;
    readonly type?: string[];
    readonly label?: string;
    readonly disabled?: boolean;
} & GetProps<typeof Picker>;

export type DocumentMultiPickerRef = {
    clear: () => void;
};

export const DocumentMultiPicker = forwardRef<
    DocumentMultiPickerRef,
    DocumentMultiPickerProps
>(({ onSelect, label, type = [], disabled, ...props }, ref) => {
    const [documents, setDocuments] = useState<DocPicker.DocumentPickerAsset[]>(
        []
    );
    const handlePress = () => {
        DocPicker.getDocumentAsync({
            type,
            multiple: true,
        }).then((result) => {
            setDocuments([...documents, ...result.assets]);
        });
    };

    const handleRemove = (index: number) => {
        setDocuments(documents.filter((_, i) => i !== index));
    };

    useEffect(() => {
        onSelect && onSelect(documents);
    }, [documents]);

    useImperativeHandle(ref, () => ({
        clear: () => setDocuments([]),
    }));

    return (
        <Picker
            disabled={disabled}
            onPress={() => !disabled && handlePress()}
            gap={20}
            {...props}
        >
            <View
                flex={1}
                flexGrow={1}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={8}
            >
                <Icon Icon={UploadCloud} />
                <Body size="large">{label || 'Upload files'}</Body>
            </View>

            <ScrollView flexGrow={1} flex={1} width={'100%'}>
                <YStack width={'100%'} gap={4}>
                    {!documents?.length && (
                        <Body textAlign="center">No files selected.</Body>
                    )}
                    {documents?.map((document, index) => (
                        <XStack
                            key={`document-upload-${index}`}
                            py={4}
                            px={12}
                            gap={12}
                            flexGrow={1}
                            width={'100%'}
                            backgroundColor={'$primaryContainer'}
                            borderRadius={'$shape.corner_m'}
                            alignItems="center"
                        >
                            <Body fontWeight={'bold'}>{document.name}</Body>
                            <View flexGrow={1} />

                            <Body>{renderFileSize(document.size)}</Body>

                            <Pressable onPress={() => handleRemove(index)}>
                                <IconButton density="-3" variant="outlined">
                                    <IconButton.Icon Icon={Trash} />
                                </IconButton>
                            </Pressable>
                        </XStack>
                    ))}
                </YStack>
            </ScrollView>
        </Picker>
    );
});

const Picker = styled(ThemeableStack, {
    name: 'DocumentPicker',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '$shape.corner_full',
    borderWidth: '$border.outline',
    borderColor: '$outline',
    cursor: 'pointer',
    minHeight: 200,
    width: 400,
    padding: '$spacing.compact_margin',
    hoverStyle: {
        shadowColor: '$shadow_opacity',
        shadowRadius: '$shadow.2',
    },
    disabledStyle: {
        cursor: 'not-allowed',
        opacity: 0.4,
    },
});

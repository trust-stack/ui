export type ImagesPickerProps = {
    readonly onChange: (images: {
        uri: string;
        mimeType: string;
    }[]) => void;
    readonly images?: {
        uri: string;
        mimeType: string;
    }[];
};
export declare function ImagesPicker({ onChange, images, }: ImagesPickerProps): JSX.Element;
//# sourceMappingURL=ImagesPicker.d.ts.map
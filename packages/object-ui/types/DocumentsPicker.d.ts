import { ButtonProps } from "@truststack/ui";
import * as DocPicker from "expo-document-picker";
export type DocumentsPickerProps = {
    readonly onSelect: (documents: DocPicker.DocumentPickerAsset[]) => void;
    readonly type?: string[];
    readonly label?: string;
    readonly disabled?: boolean;
    readonly documents?: DocPicker.DocumentPickerAsset[];
} & ButtonProps;
export declare function DocumentsPicker({ onSelect, label, type, disabled, documents, ...props }: DocumentsPickerProps): JSX.Element;
//# sourceMappingURL=DocumentsPicker.d.ts.map
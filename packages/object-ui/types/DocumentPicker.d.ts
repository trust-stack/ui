import { ButtonProps } from "@truststack/ui";
import * as DocPicker from "expo-document-picker";
export type DocumentPickerProps = {
    readonly onSelect: (v: DocPicker.DocumentPickerAsset) => void;
    readonly type?: string[];
    readonly label?: string;
    readonly disabled?: boolean;
} & ButtonProps;
export declare function DocumentPicker({ onSelect, label, type, disabled, ...props }: DocumentPickerProps): JSX.Element;
//# sourceMappingURL=DocumentPicker.d.ts.map
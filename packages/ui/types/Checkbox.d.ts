export type CheckboxProps = {
    readonly checked?: boolean;
    readonly onChange?: (c: boolean) => void;
};
export declare function Checkbox({ checked, onChange }: CheckboxProps): JSX.Element;
type CheckboxLabelProps = {
    readonly label: string;
} & CheckboxProps;
export declare function CheckboxLabel({ checked, onChange, label, }: CheckboxLabelProps): JSX.Element;
export {};
//# sourceMappingURL=Checkbox.d.ts.map
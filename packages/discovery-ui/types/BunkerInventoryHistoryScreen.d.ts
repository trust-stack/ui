import { ScreenHeader as TScreenHeader } from "@truststack/schema";
type InventoryHistory = {
    batch: string;
    supplier: string;
    policies: string[];
    s3: number;
    compliant: boolean;
    date: Date;
};
type Data = {
    readonly header: TScreenHeader;
    readonly inventoryHistory: InventoryHistory[];
};
export type BunkerInventoryHistoryScreenProps = {
    readonly data: Data;
};
export declare function BunkerInventoryHistoryScreen({ data, }: BunkerInventoryHistoryScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BunkerInventoryHistoryScreen.d.ts.map
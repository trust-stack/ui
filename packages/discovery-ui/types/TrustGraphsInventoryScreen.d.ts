import { ScreenHeader as TScreenHeader } from "@truststack/schema";
type InventoryHistory = {
    batch: string;
    supplier: string;
    policies: string[];
    s3: number;
    compliant: boolean;
    declaration: string;
    date: Date;
};
type Data = {
    readonly header: TScreenHeader;
    readonly inventoryHistory: InventoryHistory[];
};
export type TrustGraphsInventoryScreen = {
    readonly data: Data;
};
export declare function TrustGraphsInventoryScreen({ data }: TrustGraphsInventoryScreen): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TrustGraphsInventoryScreen.d.ts.map
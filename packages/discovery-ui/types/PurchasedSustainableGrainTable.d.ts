export type PurchasedSustainableGrain = {
    batch: string;
    supplier: string;
    policies: string[];
    s3: number;
    compliant: boolean;
    declaration: string;
    date: Date;
};
export type PurchasedSustainableGrainTableProps = {
    readonly purchasedSustainableGrains: PurchasedSustainableGrain[];
};
export declare function PurchasedSustainableGrainTable({ purchasedSustainableGrains, }: PurchasedSustainableGrainTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=PurchasedSustainableGrainTable.d.ts.map
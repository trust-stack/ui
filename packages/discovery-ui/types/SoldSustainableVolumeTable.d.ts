export type SoldSustainableVolume = {
    contractNumber: string;
    buyer: string;
    quantity: number;
    unit: string;
    country: string;
};
export type SoldSustainableVolumeTableProps = {
    readonly soldSustainableVolume: SoldSustainableVolume[];
};
export declare function SoldSustainableVolumeTable({ soldSustainableVolume, }: SoldSustainableVolumeTableProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SoldSustainableVolumeTable.d.ts.map
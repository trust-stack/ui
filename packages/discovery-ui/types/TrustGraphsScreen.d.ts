import { ScreenHeader as TScreenHeader } from "@truststack/schema";
type TrustGraph = {
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
    readonly trustGraphs: TrustGraph[];
};
export type TrustGraphScreenProps = {
    readonly data: Data;
};
export declare function TrustGraphsScreen({ data }: TrustGraphScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TrustGraphsScreen.d.ts.map
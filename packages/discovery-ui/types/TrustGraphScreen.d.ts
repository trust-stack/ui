import { TrustGraphScreen as TTrustGraphScreen } from "@truststack/schema";
import { PolicyResultItemProps } from "./PolicyResultItem";
type TrustGraphSummery = {
    readonly batchNumber: string;
    readonly supplier: string;
    readonly date: string;
};
type Data = TrustGraphSummery & TTrustGraphScreen & {
    readonly policyResults: (PolicyResultItemProps & {
        renderLexShape?: string;
    })[];
};
export type TrustGraphScreenProps = {
    readonly data: Data;
};
export declare function TrustGraphScreen({ data }: TrustGraphScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TrustGraphScreen.d.ts.map
import { TrustGraphScreen as TTrustGraphScreen } from "@truststack/schema";
import { PolicyResultItemProps } from "./PolicyResultItem";
type Data = TTrustGraphScreen & {
    readonly policyResults: PolicyResultItemProps[];
};
export type TrustGraphScreenProps = {
    readonly data: Data;
};
export declare function TrustGraphScreen({ data }: TrustGraphScreenProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TrustGraphScreen.d.ts.map
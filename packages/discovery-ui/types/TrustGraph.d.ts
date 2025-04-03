import { TrustGraph as TTrustGraph } from "@truststack/schema";
import { ViewProps } from "@truststack/ui";
import { TrustGraphNode } from "./TrustGraphNode";
export type TrustGraphProps = {
    readonly data: TTrustGraph;
} & ViewProps;
export declare function TrustGraph({ data, ...props }: TrustGraphProps): JSX.Element;
export declare const nodeTypes: {
    trustGraphNode: typeof TrustGraphNode;
};
//# sourceMappingURL=TrustGraph.d.ts.map
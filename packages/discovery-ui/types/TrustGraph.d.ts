import { TrustGraph as TTrustGraph } from "@truststack/schema";
import { TrustGraphNode } from "./TrustGraphNode";
export type TrustGraphProps = {
    readonly graph: TTrustGraph;
};
export declare function TrustGraph({ graph }: TrustGraphProps): JSX.Element;
export declare const nodeTypes: {
    trustGraphNode: typeof TrustGraphNode;
};
//# sourceMappingURL=TrustGraph.d.ts.map
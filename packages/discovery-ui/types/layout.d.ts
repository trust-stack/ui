import { Edge, Node } from "react-flow-renderer";
type LayoutElementProps = {
    readonly nodeWidth: number;
    readonly nodeHeight: number;
    readonly centerX?: number;
    readonly centerY?: number;
    readonly forceStrength?: number;
};
export declare const layoutElements: (nodes: Node[], edges: Edge[], { nodeWidth, nodeHeight, centerX, centerY, forceStrength, }: LayoutElementProps) => {
    nodes: Node[];
    edges: Edge[];
};
export {};
//# sourceMappingURL=layout.d.ts.map
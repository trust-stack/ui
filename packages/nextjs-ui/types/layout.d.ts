import { Edge, Node } from "react-flow-renderer";
type LayoutElementProps = {
    readonly nodeWidth: number;
    readonly nodeHeight: number;
    readonly direction?: "LEFT" | "RIGHT";
};
export declare const layoutElements: (nodes: Node[], edges: Edge[], { nodeWidth, nodeHeight, direction }: LayoutElementProps) => Promise<{
    nodes: Node[];
    edges: Edge[];
}>;
export {};
//# sourceMappingURL=layout.d.ts.map
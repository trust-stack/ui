import {Edge, Node} from "react-flow-renderer";

type LayoutElementProps = {
  readonly nodeWidth: number;
  readonly nodeHeight: number;
  readonly direction?: "LEFT" | "RIGHT";
};

export const layoutElements = async (
  nodes: Node[],
  edges: Edge[],
  {nodeWidth, nodeHeight, direction = "RIGHT"}: LayoutElementProps
): Promise<{
  nodes: Node[];
  edges: Edge[];
}> => {
  const ELK = (await import("elkjs/lib/elk.bundled.js")).default;
  const elk = new ELK();

  const options = {
    "elk.algorithm": "layered",
    "elk.layered.spacing.nodeNodeBetweenLayers": "200",
    "elk.spacing.nodeNode": "100",
    "elk.direction": direction,
  };

  const graph = {
    id: "root",
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition: direction == "RIGHT" ? "left" : "right",
      sourcePosition: direction == "RIGHT" ? "right" : "left",
      width: nodeWidth,
      height: nodeHeight,
    })),
    edges: edges,
  };

  return elk.layout(graph as any).then((layoutGraph) => {
    return {
      nodes: layoutGraph?.children?.map((node) => ({
        ...node,
        position: {x: node.x, y: node.y},
      })) as Node[],
      edges: layoutGraph?.edges as any as Edge[],
    };
  });
};

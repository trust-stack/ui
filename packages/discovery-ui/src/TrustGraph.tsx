import {Minus, Plus, Square} from "@tamagui/lucide-icons";
import {TrustGraph as TTrustGraph} from "@truststack/schema";
import {IconButton, View, XStack} from "@truststack/ui";
import {useEffect} from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Edge,
  Node,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "react-flow-renderer";
import {NODE_HEIGHT, NODE_WIDTH, TrustGraphNode} from "./TrustGraphNode";
import {layoutElements} from "./layout";

export type TrustGraphProps = {
  readonly graph: TTrustGraph;
};

export function TrustGraph({graph}: TrustGraphProps): JSX.Element {
  const [nodes, setNodes] = useNodesState([]);
  const [edges, setEdges] = useEdgesState([]);

  useEffect(() => {
    if (!graph) return;
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    graph.nodes?.forEach((node) => {
      nodes.push({
        id: "node-" + node.id,
        data: node,
        type: "trustGraphNode",
        position: {x: 0, y: 0},
        style: {width: NODE_WIDTH, height: NODE_HEIGHT},
      });
    });

    layoutElements(nodes, edges, {
      nodeWidth: NODE_WIDTH,
      nodeHeight: NODE_HEIGHT,
      direction: "LEFT",
    }).then(({nodes, edges}) => {
      setNodes(nodes);
      // setEdges(edges);
    });
  }, [graph]);

  if (!graph?.nodes?.length) return <></>;

  return (
    <ReactFlowProvider>
      <View position="relative" width={"100%"} height={"100%"}>
        <View
          zIndex={12}
          position="absolute"
          top={"$spacing.compact_margin"}
          right={"$spacing.compact_margin"}
        >
          <Controls />
        </View>

        <ReactFlow
          minZoom={0.001}
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
        >
          <Background variant={BackgroundVariant.Lines} />
        </ReactFlow>
      </View>
    </ReactFlowProvider>
  );
}

function Controls(): JSX.Element {
  const {zoomIn, zoomOut, fitView} = useReactFlow();

  return (
    <XStack gap={8}>
      <IconButton variant="filled-tonal" onPress={zoomOut} density="-1">
        <IconButton.Icon Icon={Minus} />
      </IconButton>

      <IconButton variant="filled-tonal" onPress={fitView} density="-1">
        <IconButton.Icon Icon={Square} />
      </IconButton>

      <IconButton variant="filled-tonal" onPress={zoomIn} density="-1">
        <IconButton.Icon Icon={Plus} />
      </IconButton>
    </XStack>
  );
}

export const nodeTypes = {
  trustGraphNode: TrustGraphNode,
};

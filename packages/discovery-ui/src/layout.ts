import * as d3 from "d3-force";
import {Edge, Node, Position} from "react-flow-renderer";

interface SimNode extends d3.SimulationNodeDatum {
  id: string;
  x?: number;
  y?: number;
}

type LayoutElementProps = {
  readonly nodeWidth: number;
  readonly nodeHeight: number;
  readonly centerX?: number;
  readonly centerY?: number;
  readonly forceStrength?: number;
};

export const layoutElements = (
  nodes: Node[],
  edges: Edge[],
  {
    nodeWidth,
    nodeHeight,
    centerX = window.innerWidth / 2,
    centerY = window.innerHeight / 2,
    forceStrength = 100,
  }: LayoutElementProps
): {
  nodes: Node[];
  edges: Edge[];
} => {
  // Convert nodes to simulation nodes
  const simNodes: SimNode[] = nodes.map((node) => ({
    ...node,
    id: node.id,
  }));

  // Convert edges to simulation links
  const simLinks = edges.map((edge) => ({
    source: edge.source,
    target: edge.target,
  }));

  // Calculate the ideal spacing between nodes based on the number of nodes
  const spacing = Math.max(
    Math.min(
      Math.sqrt((window.innerWidth * window.innerHeight) / nodes.length) * 0.8,
      300
    ),
    200
  );

  // Create a force simulation
  const simulation = d3
    .forceSimulation(simNodes)
    // Repulsion between nodes
    .force(
      "charge",
      d3
        .forceManyBody()
        .strength(-forceStrength)
        .distanceMin(nodeWidth) // Minimum distance for charge effect
        .distanceMax(spacing * 2) // Maximum distance for charge effect
    )
    // Center the graph
    .force("center", d3.forceCenter(centerX, centerY))
    // Prevent node overlap
    .force(
      "collision",
      d3
        .forceCollide()
        .radius(Math.max(nodeWidth, nodeHeight) / 1.5)
        .strength(0.9) // Increased collision strength
    )
    // Edge forces
    .force(
      "link",
      d3
        .forceLink(simLinks)
        .id((d: SimNode) => d.id)
        .distance(spacing) // Dynamic spacing based on graph size
        .strength(1) // Maximum strength for edge forces
    )
    // X-axis positioning force to spread nodes horizontally
    .force("x", d3.forceX(centerX).strength(0.05))
    // Y-axis positioning force to spread nodes vertically
    .force("y", d3.forceY(centerY).strength(0.05));

  // Run the simulation with more iterations for better convergence
  for (let i = 0; i < 500; ++i) {
    simulation.tick();
    // Gradually cool down the simulation
    if (i > 300) {
      simulation.alpha(0.1);
    }
  }

  // Apply the calculated positions to the nodes
  const positionedNodes = nodes.map((node, i) => ({
    ...node,
    position: {
      x: (simNodes[i].x || 0) - nodeWidth / 2,
      y: (simNodes[i].y || 0) - nodeHeight / 2,
    },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    width: nodeWidth,
    height: nodeHeight,
  }));

  simulation.stop();

  return {
    nodes: positionedNodes,
    edges: edges,
  };
};

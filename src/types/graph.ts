
export interface Edge {
    targetNode: { name: string };
    weight: number;

}

export interface Node {
    name: string;
    edges: Edge[];
}

export interface Graph {
    graphNodes: Node[];
}

export interface ShortestPathResponse {
    nodeNames: string[];
    distance: number;
}

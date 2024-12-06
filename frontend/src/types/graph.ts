export interface Position {
    x: number;
    y: number;
}

export interface GraphNode {
    id: number;
    term: string;
    category: string;
    definition: string;
    position: Position;
}

export interface GraphEdge {
    source: number;
    target: number;
    description: string;
}

export interface SemanticGraph {
    nodes: GraphNode[];
    edges: GraphEdge[];
}

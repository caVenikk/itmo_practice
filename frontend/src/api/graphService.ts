import { API_PATHS } from "@/constants/paths";
import { api } from "./config";
import type { SemanticGraph } from "@/types/graph";

export const graphService = {
    async getSemanticGraph(): Promise<SemanticGraph> {
        return await api.get(API_PATHS.SEMANTIC_GRAPH.BASE).json();
    },

    async getNodes(): Promise<SemanticGraph["nodes"]> {
        return await api.get(API_PATHS.SEMANTIC_GRAPH.GET_NODES).json();
    },
};

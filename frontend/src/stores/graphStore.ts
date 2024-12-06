import { defineStore } from "pinia";
import { ref } from "vue";
import type { GraphNode, GraphEdge } from "@/types/graph";
import { graphService } from "@/api/graphService";

export const useGraphStore = defineStore("graph", () => {
    const nodes = ref<GraphNode[]>([]);
    const edges = ref<GraphEdge[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    async function fetchSemanticGraph() {
        try {
            loading.value = true;
            const graph = await graphService.getSemanticGraph();
            nodes.value = graph.nodes;
            edges.value = graph.edges;
        } catch (e) {
            error.value = "Failed to fetch semantic graph";
            console.error(e);
        } finally {
            loading.value = false;
        }
    }

    return {
        nodes,
        edges,
        loading,
        error,
        fetchSemanticGraph,
    };
});

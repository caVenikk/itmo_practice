<template>
    <div class="semantic-graph-page">
        <h1 class="semantic-graph-page__title">Семантический граф</h1>
        <Spinner v-if="loading" class="semantic-graph-page__loading" />
        <div v-else-if="error" class="semantic-graph-page__error">
            {{ error }}
        </div>
        <SemanticGraph v-else :nodes="nodes" :edges="edges" />
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import SemanticGraph from "@/components/SemanticGraph.vue";
    import Spinner from "@/components/ui/Spinner.vue";
    import { useGraphStore } from "@/stores/graphStore";

    const store = useGraphStore();
    const { nodes, edges, loading, error } = storeToRefs(store);

    onMounted(async () => {
        await store.fetchSemanticGraph();
    });
</script>

<style scoped>
    .semantic-graph-page {
        padding: 20px;
    }

    .semantic-graph-page__title {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: bold;
    }

    .semantic-graph-page__loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
    }

    .semantic-graph-page__error {
        color: #dc3545;
        text-align: center;
        padding: 20px;
    }
</style>

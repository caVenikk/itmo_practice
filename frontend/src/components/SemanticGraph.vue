<template>
    <div class="semantic-graph">
        <VueFlow
            v-model="elements"
            :default-viewport="{ zoom: 1 / 3, x: 170, y: 360 }"
            :min-zoom="0.2"
            :max-zoom="4"
            class="semantic-graph__flow"
        >
            <template #node-custom="nodeProps">
                <div
                    :class="[
                        'semantic-graph__node',
                        `semantic-graph__node--${getCategoryKey(nodeProps.data.category)}`,
                    ]"
                >
                    <div class="semantic-graph__node-header">
                        {{ nodeProps.data.term }}
                    </div>
                    <div class="semantic-graph__node-category">
                        {{ nodeProps.data.category }}
                    </div>
                    <div class="semantic-graph__node-definition">
                        {{ nodeProps.data.definition }}
                    </div>
                </div>
            </template>
            <Background :pattern-color="'#aaa'" :gap="8" />
            <Controls />
            <MiniMap />
            <Panel position="top-left" class="semantic-graph__legend">
                <div class="semantic-graph__legend-title">Категории</div>
                <div
                    v-for="category in categories"
                    :key="category"
                    :class="['semantic-graph__legend-item', `semantic-graph__legend-item--${getCategoryKey(category)}`]"
                >
                    {{ category }}
                </div>
            </Panel>
        </VueFlow>
    </div>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import { VueFlow, Panel } from "@vue-flow/core";
    import { MiniMap } from "@vue-flow/minimap";
    import { Controls } from "@vue-flow/controls";
    import { Background } from "@vue-flow/background";
    import "@vue-flow/core/dist/style.css";
    import "@vue-flow/core/dist/theme-default.css";
    import "@vue-flow/controls/dist/style.css";
    import type { GraphNode, GraphEdge } from "@/types/graph";

    const props = defineProps<{
        nodes: GraphNode[];
        edges: GraphEdge[];
    }>();

    const categoryMap: Record<string, string> = {
        Основное: "main",
        Методология: "methodology",
        Система: "system",
        Типизация: "typing",
        Интерфейсы: "interfaces",
        Безопасность: "security",
        Инструменты: "tools",
        Стандарты: "standards",
        Оптимизация: "optimization",
        Фреймворки: "frameworks",
    };

    const getCategoryKey = (category: string): string => {
        return categoryMap[category] || category.toLowerCase().replace(/\s+/g, "-");
    };

    const categories = computed(() => {
        return [...new Set(props.nodes.map((node) => node.category))];
    });

    const elements = computed(() => {
        const nodes = props.nodes.map((node) => ({
            id: node.id.toString(),
            position: node.position,
            data: {
                term: node.term,
                category: node.category,
                definition: node.definition,
            },
            type: "custom",
        }));

        const edges = props.edges.map((edge) => ({
            id: `${edge.source}-${edge.target}`,
            source: edge.source.toString(),
            target: edge.target.toString(),
            label: edge.description,
        }));

        return [...nodes, ...edges];
    });
</script>

<style lang="scss" scoped>
    $colors: (
        main: #e3f2fd,
        methodology: #f3e5f5,
        system: #e8f5e9,
        typing: #fff3e0,
        interfaces: #fce4ec,
        security: #e0f7fa,
        tools: #f1f8e9,
        standards: #e8eaf6,
        optimization: #e1f5fe,
        frameworks: #e0f2f1,
    );

    .semantic-graph {
        width: 100%;
        height: 800px;
        background: #f8f9fa;

        &__flow {
            width: 100%;
            height: 100%;
        }

        &__node {
            padding: 10px;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            width: 200px;
            font-size: 12px;

            &-header {
                font-weight: bold;
                margin-bottom: 4px;
            }

            &-category {
                font-size: 10px;
                color: #666;
                margin-bottom: 4px;
            }

            &-definition {
                font-size: 11px;
                line-height: 1.3;
            }

            // Generate node color variants using the colors map
            @each $category, $color in $colors {
                &--#{$category} {
                    background-color: $color;
                }
            }
        }

        &__legend {
            background: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            &-title {
                font-weight: bold;
                margin-bottom: 8px;
            }

            &-item {
                padding: 4px 8px;
                margin-bottom: 4px;
                border-radius: 4px;
                font-size: 12px;

                // Generate legend item color variants using the colors map
                @each $category, $color in $colors {
                    &--#{$category} {
                        background-color: $color;
                    }
                }
            }
        }
    }
</style>

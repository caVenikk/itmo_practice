<template>
    <div class="glossary-list">
        <GlossaryCard v-for="item in items" :key="item.term" :term="item.term" :definition="item.definition" />
    </div>
</template>

<script setup lang="ts">
    import GlossaryCard from "./GlossaryCard.vue";

    interface GlossaryItem {
        term: string;
        definition: string;
    }

    defineProps<{
        items: GlossaryItem[];
    }>();
</script>

<style scoped lang="scss">
    .glossary-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        padding: 2rem;
        max-width: 1400px;
        margin: 0 auto;
        width: 100%;
        box-sizing: border-box;

        @media (max-width: 640px) {
            grid-template-columns: 1fr;
            padding: 1rem;
            gap: 1rem;
        }
    }
</style>

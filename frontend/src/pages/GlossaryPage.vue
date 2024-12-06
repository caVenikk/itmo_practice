<template>
    <div class="glossary-page">
        <h1 class="glossary-page__title">Глоссарий</h1>
        <Spinner v-if="loading" class="glossary-page__loading" />
        <div v-else-if="error" class="glossary-page__error">
            {{ error }}
        </div>
        <GlossaryList v-else :items="terms" />
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from "vue";
    import { storeToRefs } from "pinia";
    import GlossaryList from "@/components/GlossaryList.vue";
    import Spinner from "@/components/ui/Spinner.vue";
    import { useGlossaryStore } from "@/stores/glossaryStore";

    const store = useGlossaryStore();
    const { terms, loading, error } = storeToRefs(store);

    onMounted(async () => {
        await store.fetchAllTerms();
    });
</script>

<style scoped lang="scss">
    .glossary-page {
        min-height: 100vh;
        background-color: #f7fafc;

        &__title {
            text-align: center;
            color: #2d3748;
            font-size: 2.5rem;
            padding: 2rem 1rem;
            margin: 0;

            @media (max-width: 640px) {
                font-size: 2rem;
                padding: 1.5rem 1rem;
            }
        }

        &__loading {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
        }

        &__error {
            text-align: center;
            padding: 2rem;
            color: #e53e3e;
            font-size: 1.2rem;
        }
    }
</style>

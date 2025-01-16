<template>
    <div class="glossary-card" :class="{ 'core-term': core }" @click="navigateToSource">
        <h3 class="glossary-card__title">{{ term }}</h3>
        <p class="glossary-card__definition">{{ definition }}</p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        term: string;
        definition: string;
        source: string | null;
        core: boolean | null;
    }>();

    const navigateToSource = () => {
        if (props.source) {
            window.open(props.source, "_blank");
        }
    };
</script>

<style scoped lang="scss">
    .glossary-card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 1.5rem;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        cursor: pointer;

        &.core-term {
            border-color: #ffc2c2;
            background-color: #fff8f8;
        }

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        &__title {
            margin: 0 0 1rem 0;
            color: #2d3748;
            font-size: 1.25rem;
            font-weight: 600;
            line-height: 1.4;
        }

        &__definition {
            margin: 0;
            color: #4a5568;
            line-height: 1.6;
            flex-grow: 1;
        }

        @media (max-width: 640px) {
            padding: 1.25rem;

            &__title {
                font-size: 1.1rem;
                margin-bottom: 0.75rem;
            }
        }
    }
</style>

<script setup lang="ts">
    import { APP_ROUTES } from "./constants/paths";
</script>

<template>
    <nav class="nav">
        <router-link :to="APP_ROUTES.GLOSSARY" class="nav__link"> Глоссарий </router-link>
        <router-link :to="APP_ROUTES.SEMANTIC_GRAPH" class="nav__link"> Семантический граф </router-link>
    </nav>
    <router-view></router-view>
</template>

<style scoped lang="scss">
    .app {
        min-height: 100vh;
        background-color: #f7fafc;
    }

    .nav {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        padding: 1rem 2rem;
        position: sticky;
        top: 0;
        z-index: 10;

        &__link {
            color: #2d3748;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;

            &:hover {
                background-color: #f1f5f9;
                color: #1a202c;
            }

            &.router-link-active {
                background-color: #e2e8f0;
                color: #1a202c;
            }
        }

        @media (max-width: 640px) {
            padding: 0.75rem 1rem;

            &__link {
                font-size: 1rem;
                padding: 0.4rem 0.8rem;
            }
        }
    }
</style>

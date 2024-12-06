<template>
    <main class="not-found">
        <h1 class="not-found__title">404</h1>
        <p class="not-found__text">Страница не найдена</p>
        <p class="not-found__description"> Возможно, страница была удалена или её никогда не существовало </p>
        <router-link :to="APP_ROUTES.GLOSSARY" class="not-found__link"> Вернуться на главную </router-link>
    </main>
</template>

<script setup lang="ts">
    import { APP_ROUTES } from "@/constants/paths";
</script>

<style scoped lang="scss">
    .not-found {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 4rem);
        padding: 2rem;
        text-align: center;

        &__title {
            font-size: 6rem;
            font-weight: 700;
            margin: 0;
            color: var(--color-primary);
        }

        &__text {
            font-size: 2rem;
            margin: 1rem 0;
        }

        &__description {
            font-size: 1.2rem;
            color: var(--color-text-secondary);
            margin-bottom: 2rem;
        }

        &__link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background-color: var(--color-primary);
            color: white;
            text-decoration: none;
            border-radius: 0.5rem;
            transition: background-color 0.2s;

            &:hover {
                background-color: var(--color-primary-dark);
            }
        }
    }
</style>

<script setup lang="ts">
    import { APP_ROUTES } from "@/constants/paths";
    import { GITHUB_LINK } from "@/constants/links";
    import Icon from "./ui/Icon.vue";
</script>

<template>
    <nav class="nav">
        <div class="nav__links">
            <router-link :to="APP_ROUTES.GLOSSARY" class="nav__link">Глоссарий</router-link>
            <router-link :to="APP_ROUTES.SEMANTIC_GRAPH" class="nav__link">Семантический граф</router-link>
        </div>
        <div class="nav__right">
            <img src="@/assets/itmo.png" alt="ITMO Logo" class="nav__logo" />
            <a :href="GITHUB_LINK" class="nav__github" target="_blank">
                <Icon type="github" />
                <span>Новиков Никита</span>
            </a>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    .nav {
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        padding: 1rem 2rem;
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__links {
            display: flex;
            gap: 1rem;
        }

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

        &__right {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }

        &__logo {
            height: 2rem;
            width: auto;
        }

        &__github {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: #2d3748;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            border: 1px solid #e2e8f0;

            &:hover {
                background-color: #f1f5f9;
                border-color: #cbd5e0;
                transform: translateY(-1px);
            }
        }

        @media (max-width: 640px) {
            padding: 0.75rem 1rem;
            flex-direction: column;
            gap: 0.75rem;

            &__link {
                font-size: 1rem;
                padding: 0.4rem 0.8rem;
            }

            &__right {
                width: 100%;
                justify-content: center;
            }

            &__logo {
                height: 1.5rem;
            }
        }
    }
</style>

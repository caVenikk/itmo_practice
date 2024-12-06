import { createRouter, createWebHistory } from "vue-router";
import GlossaryPage from "@/pages/GlossaryPage.vue";
import SemanticGraphPage from "@/pages/SemanticGraphPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import { APP_ROUTES } from "@/constants/paths";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: APP_ROUTES.GLOSSARY,
            name: "glossary",
            component: GlossaryPage,
        },
        {
            path: APP_ROUTES.SEMANTIC_GRAPH,
            name: "semantic-graph",
            component: SemanticGraphPage,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFoundPage,
        },
    ],
});

export default router;

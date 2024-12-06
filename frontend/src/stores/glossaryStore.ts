import { defineStore } from "pinia";
import { ref } from "vue";
import type { GlossaryItem } from "@/types/glossary";
import { glossaryService } from "@/api/glossaryService";

export const useGlossaryStore = defineStore("glossary", () => {
    const terms = ref<GlossaryItem[]>([]);
    const currentTerm = ref<GlossaryItem | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    async function fetchAllTerms() {
        try {
            loading.value = true;
            terms.value = await glossaryService.getAllTerms();
        } catch (e) {
            error.value = "Failed to fetch glossary terms";
            console.error("Error details:", e);
        } finally {
            loading.value = false;
        }
    }

    async function fetchTerm(term: string) {
        try {
            loading.value = true;
            currentTerm.value = await glossaryService.getTerm(term);
        } catch (e) {
            error.value = "Failed to fetch term";
            console.error(e);
        } finally {
            loading.value = false;
        }
    }

    async function searchTerms(query: string) {
        try {
            loading.value = true;
            terms.value = await glossaryService.searchTerms(query);
        } catch (e) {
            error.value = "Failed to search terms";
            console.error(e);
        } finally {
            loading.value = false;
        }
    }

    async function downloadGlossary(format: "json" | "csv") {
        try {
            const blob = await glossaryService.downloadGlossary(format);
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `glossary.${format}`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        } catch (e) {
            error.value = "Failed to download glossary";
            console.error(e);
        }
    }

    return {
        terms,
        currentTerm,
        loading,
        error,
        fetchAllTerms,
        fetchTerm,
        searchTerms,
        downloadGlossary,
    };
});

import { api } from "./config";
import type { GlossaryItem } from "@/types/glossary";
import { API_PATHS } from "@/constants/paths";

export const glossaryService = {
    async getAllTerms(): Promise<GlossaryItem[]> {
        return await api.get(API_PATHS.GLOSSARY.BASE).json();
    },

    async getTerm(term: string): Promise<GlossaryItem> {
        return await api.get(API_PATHS.GLOSSARY.GET_BY_TERM(term)).json();
    },

    async searchTerms(query: string): Promise<GlossaryItem[]> {
        return await api.get(API_PATHS.GLOSSARY.SEARCH(query)).json();
    },

    async downloadGlossary(format: "json" | "csv"): Promise<Blob> {
        return await api.get(API_PATHS.GLOSSARY.DOWNLOAD(format)).blob();
    },
};

export interface GlossaryItem {
    id: number;
    term: string;
    definition: string;
    source: string | null;
    core: boolean | null;
}

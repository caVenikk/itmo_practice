export const APP_ROUTES = {
    GLOSSARY: "/",
    SEMANTIC_GRAPH: "/graph",
} as const;

export const API_PATHS = {
    GLOSSARY: {
        BASE: "glossary/",
        GET_BY_TERM: (term: string) => `glossary/${term}`,
        SEARCH: (query: string) => `glossary/search/${query}`,
        DOWNLOAD: (format: "json" | "csv") => `glossary/download?format=${format}`,
    },
    SEMANTIC_GRAPH: {
        BASE: "semantic-graph/",
        GET_NODES: "semantic-graph/nodes",
        GET_EDGES: "semantic-graph/edges",
        GET_NODE_BY_ID: (id: number) => `semantic-graph/node/${id}`,
        GET_NODE_BY_TERM: (term: string) => `semantic-graph/node/term/${term}`,
        GET_NODE_CONNECTIONS: (id: number) => `semantic-graph/node/${id}/connections`,
        SEARCH: (query: string, category: string | null = null) =>
            `semantic-graph/search/?query=${query}${category !== null ? `&category=${category}` : ""}`,
    },
} as const;

export const ASSETS_PATHS = {
    IMAGES: "/assets/images",
    ICONS: "/assets/icons",
} as const;

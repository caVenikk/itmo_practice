import ky from "ky";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const api = ky.create({
    prefixUrl: API_URL,
    retry: 0,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
    },
});

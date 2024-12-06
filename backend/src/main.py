from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import glossary_router
from .routers import semantic_graph_router

app = FastAPI(title="Glossary API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(glossary_router)
app.include_router(semantic_graph_router)

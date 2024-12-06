from fastapi import APIRouter, HTTPException
from typing import Dict, List, Optional

from ..data.semantic_graph import SEMANTIC_GRAPH

router = APIRouter(
    prefix="/semantic-graph",
    tags=["semantic-graph"],
    responses={404: {"description": "Not found"}},
)


@router.get("/")
async def get_semantic_graph() -> Dict:
    """
    Получить полный семантический граф с узлами и связями.
    """
    return SEMANTIC_GRAPH


@router.get("/nodes")
async def get_nodes() -> List[Dict]:
    """
    Получить все узлы семантического графа.
    """
    return SEMANTIC_GRAPH["nodes"]


@router.get("/edges")
async def get_edges() -> List[Dict]:
    """
    Получить все связи семантического графа.
    """
    return SEMANTIC_GRAPH["edges"]


@router.get("/node/{node_id}")
async def get_node(node_id: int) -> Dict:
    """
    Получить конкретный узел по его ID.
    """
    for node in SEMANTIC_GRAPH["nodes"]:
        if node["id"] == node_id:
            return node
    raise HTTPException(status_code=404, detail="Node not found")


@router.get("/node/term/{term}")
async def get_node_by_term(term: str) -> Dict:
    """
    Получить узел по его термину.
    """
    for node in SEMANTIC_GRAPH["nodes"]:
        if node["term"].lower() == term.lower():
            return node
    raise HTTPException(status_code=404, detail="Node not found")


@router.get("/node/{node_id}/connections")
async def get_node_connections(node_id: int) -> Dict[str, List[Dict]]:
    """
    Получить все связи конкретного узла (входящие и исходящие).
    """
    incoming = []
    outgoing = []

    for edge in SEMANTIC_GRAPH["edges"]:
        if edge["source"] == node_id:
            # Добавляем информацию о целевом узле
            target_node = next((node for node in SEMANTIC_GRAPH["nodes"] if node["id"] == edge["target"]), None)
            if target_node:
                outgoing.append({"edge": edge, "node": target_node})
        elif edge["target"] == node_id:
            # Добавляем информацию об исходном узле
            source_node = next((node for node in SEMANTIC_GRAPH["nodes"] if node["id"] == edge["source"]), None)
            if source_node:
                incoming.append({"edge": edge, "node": source_node})

    return {"incoming": incoming, "outgoing": outgoing}


@router.get("/search")
async def search_nodes(query: str, category: Optional[str] = None) -> List[Dict]:
    """
    Поиск узлов по тексту в термине или определении, с опциональной фильтрацией по категории.
    """
    query = query.lower()
    results = []

    for node in SEMANTIC_GRAPH["nodes"]:
        if query in node["term"].lower() or query in node["definition"].lower():
            if category is None or node["category"].lower() == category.lower():
                results.append(node)

    return results

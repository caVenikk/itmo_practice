from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
import json
import csv
from tempfile import NamedTemporaryFile
from typing import List, Literal

from ..models import GlossaryTerm
from ..data import GLOSSARY_DATA

router = APIRouter(prefix="/glossary", tags=["glossary"])


@router.get("/", response_model=List[GlossaryTerm])
async def get_all_terms():
    """Get all glossary terms"""
    return GLOSSARY_DATA


@router.get("/term/{term}", response_model=GlossaryTerm)
async def get_term(term: str):
    """Get a specific term by its name"""
    for item in GLOSSARY_DATA:
        if item["term"].lower() == term.lower():
            return item
    raise HTTPException(status_code=404, detail="Term not found")


@router.get("/search/{query}", response_model=List[GlossaryTerm])
async def search_terms(query: str):
    """Search terms by query string"""
    query = query.lower()
    results = [item for item in GLOSSARY_DATA if query in item["term"].lower() or query in item["definition"].lower()]
    return results


@router.get("/download")
async def download_glossary(format: Literal["json", "csv"] = "json"):
    """
    Download glossary in specified format

    Args:
        format: File format to download. Must be either "json" or "csv"
    """
    if format == "json":
        with NamedTemporaryFile(mode="w", delete=False, suffix=".json", encoding="utf-8") as temp_file:
            json.dump(GLOSSARY_DATA, temp_file, ensure_ascii=False, indent=2)
            temp_file_path = temp_file.name
        return FileResponse(temp_file_path, media_type="application/json", filename="glossary.json")

    elif format == "csv":
        with NamedTemporaryFile(mode="w", delete=False, suffix=".csv", encoding="utf-8", newline="") as temp_file:
            writer = csv.DictWriter(temp_file, fieldnames=["term", "definition"])
            writer.writeheader()
            writer.writerows(GLOSSARY_DATA)
            temp_file_path = temp_file.name
        return FileResponse(temp_file_path, media_type="text/csv", filename="glossary.csv")

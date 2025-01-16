from pydantic import BaseModel


class GlossaryTerm(BaseModel):
    term: str
    definition: str
    source: str | None = None
    core: bool | None = None

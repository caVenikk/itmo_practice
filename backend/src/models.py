from pydantic import BaseModel

class GlossaryTerm(BaseModel):
    term: str
    definition: str

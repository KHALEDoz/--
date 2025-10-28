from fastapi import APIRouter
import uuid

router = APIRouter()

@router.post("/upload")
def upload_mock():
    return {"job_id": str(uuid.uuid4())}

@router.get("/status/{job_id}")
def status(job_id: str):
    return {"job_id": job_id, "status": "completed", "message": "Mock ingest done."}

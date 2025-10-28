from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_risks():
    return [
        {"patient_id": 1, "risk_score": 0.32, "class": "medium"},
        {"patient_id": 2, "risk_score": 0.12, "class": "low"},
    ]

from fastapi import APIRouter

router = APIRouter()

@router.get("")
def model_performance():
    return {
        "auc": 0.86,
        "accuracy": 0.79,
        "precision": 0.77,
        "recall": 0.74,
        "updated_at": "2025-10-28T10:00:00Z",
    }

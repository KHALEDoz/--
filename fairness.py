from fastapi import APIRouter

router = APIRouter()

@router.get("")
def fairness_metrics():
    return {
        "groups": [
            {"group": "male", "tpr": 0.76, "fpr": 0.18},
            {"group": "female", "tpr": 0.74, "fpr": 0.17},
        ],
        "parity_diff": 0.02,
    }

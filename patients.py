from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_patients():
    return [
        {"id": 1, "name": "Ali Ahmed", "age": 52, "bp": 130, "chol": 210},
        {"id": 2, "name": "Sara Khalid", "age": 45, "bp": 120, "chol": 180},
    ]

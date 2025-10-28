from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter(prefix="/auth", tags=["auth"])

class RegisterIn(BaseModel):
    full_name: str
    email: EmailStr
    password: str

class LoginIn(BaseModel):
    email: EmailStr
    password: str

@router.post("/register")
def register(body: RegisterIn):
    # TODO: الحفظ في قاعدة البيانات لاحقًا
    return {"email": body.email, "full_name": body.full_name}

@router.post("/login")
def login(body: LoginIn):
    if not body.email or not body.password:
        raise HTTPException(status_code=400, detail="invalid credentials")
    # TODO: التحقق الحقيقي + JWT لاحقًا
    return {"access_token": "mock-token-123", "token_type": "bearer", "user": {"email": body.email}}

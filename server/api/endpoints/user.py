from fastapi import APIRouter, Depends, HTTPException, Body
from crud.user import create_user, get_user
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from core.security import get_password_hash, verify_password, create_access_token
from crud.user import get_user_by_email
from core.security import decode_access_token
from models.user import UserCreate, UserOut


router = APIRouter()


@router.get("/{user_id}", response_model=dict)
async def read_user(user_id: int):
    user = await get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/token")


@router.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await get_user_by_email(form_data.username)
    if not user:
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")

    if not verify_password(form_data.password, user["hashed_password"]):
        raise HTTPException(
            status_code=400, detail="Incorrect email or password")

    access_token = create_access_token(data={"sub": user["email"]})
    return {"access_token": access_token, "token_type": "bearer"}


async def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = decode_access_token(token)
        user = await get_user_by_email(payload["sub"])
        if user is None:
            raise HTTPException(status_code=400, detail="User not found")
        return user
    except:
        raise HTTPException(
            status_code=400, detail="Token is invalid or expired")

@router.post("/register/", response_model=UserOut)
async def register_user(user: UserCreate):
    existing_user = await get_user_by_email(user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    user_id = await create_user(user.dict())
    return {"id": user_id, "email": user.email, "name": user.name}


@router.get("/products/")
async def protected_endpoint(current_user: dict = Depends(get_current_user)):
    return {"message": "This is a protected endpoint", "user": current_user}

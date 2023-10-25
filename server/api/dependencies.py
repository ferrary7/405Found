from core.security import decode_access_token
from crud.user import get_user_by_email
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/users/token")


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

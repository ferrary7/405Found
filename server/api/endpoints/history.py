from fastapi import APIRouter, Depends
from crud.history import add_browsing_record, add_purchase_record, get_browsing_history, get_purchase_history
from api.dependencies import get_current_user

router = APIRouter()


@router.post("/browsing/")
async def record_browsing(product_id: int, current_user: dict = Depends(get_current_user)):
    await add_browsing_record(current_user["id"], product_id)
    return {"message": "Browsing record added"}


@router.post("/purchase/")
async def record_purchase(product_id: int, quantity: int, current_user: dict = Depends(get_current_user)):
    await add_purchase_record(current_user["id"], product_id, quantity)
    return {"message": "Purchase record added"}


@router.get("/browsing/")
async def fetch_browsing_history(current_user: dict = Depends(get_current_user)):
    return await get_browsing_history(current_user["id"])


@router.get("/purchase/")
async def fetch_purchase_history(current_user: dict = Depends(get_current_user)):
    return await get_purchase_history(current_user["id"])

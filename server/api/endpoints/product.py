from typing import List

from api.dependencies import get_current_user
from crud.product import create_product, get_product, get_all_products, update_product, delete_product
from fastapi import APIRouter, Depends, HTTPException
from models.product import ProductCreate, ProductUpdate, ProductInDB

router = APIRouter()


# Public route to view all products
@router.get("/", response_model=List[ProductInDB])
async def list_products():
    return await get_all_products()


# Public route to view a specific product
@router.get("/{product_id}", response_model=ProductInDB)
async def read_product(product_id: int):
    product = await get_product(product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product


# Protected route to add a product
@router.post("/", response_model=ProductInDB)
async def create_product_endpoint(product: ProductCreate, current_user: dict = Depends(get_current_user)):
    product_data = product.dict()
    product_data["user_id"] = current_user["id"]
    product_id = await create_product(product_data)
    return {**product_data, "id": product_id}


# Protected route to update a product
@router.put("/", response_model=ProductInDB)
async def update_existing_product(product: ProductUpdate, current_user: dict = Depends(get_current_user)):
    product_id = product.product_id
    existing_product = await get_product(product_id)
    if not existing_product:
        raise HTTPException(status_code=404, detail="Product not found")
    if existing_product["user_id"] != current_user["id"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    updated_product = await update_product(product_id, product.dict(exclude={"product_id"}))
    return updated_product


# Protected route to delete a product
@router.delete("/{product_id}", response_model=dict)
async def delete_product_endpoint(product_id: int, current_user: dict = Depends(get_current_user)):
    existing_product = await get_product(product_id)
    if not existing_product:
        raise HTTPException(status_code=404, detail="Product not found")
    if existing_product["user_id"] != current_user["id"]:
        raise HTTPException(status_code=403, detail="Not authorized")
    await delete_product(product_id)
    return {"message": "Product successfully deleted"}

from fastapi import APIRouter
from api.endpoints.user import router as user_router
from api.endpoints.product import router as product_router

router = APIRouter()

router.include_router(user_router, prefix="/users", tags=["users"])
router.include_router(product_router, prefix="/products", tags=["products"])

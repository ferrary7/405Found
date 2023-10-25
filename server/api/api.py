from api.endpoints.history import router as history_router
from api.endpoints.product import router as product_router
from api.endpoints.user import router as user_router
from fastapi import APIRouter

router = APIRouter()

router.include_router(user_router, prefix="/users", tags=["users"])
router.include_router(product_router, prefix="/products", tags=["products"])
router.include_router(history_router, prefix="/history", tags=["history"])

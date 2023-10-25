from fastapi import FastAPI

from api.api import router as api_router
from core.database import database

app = FastAPI()

app.include_router(api_router)


@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

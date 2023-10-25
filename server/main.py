from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.api import router as api_router
from core.database import database
from recommendation.recommend import setup_recommendations

app = FastAPI()

app.include_router(api_router)

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup():
    await database.connect()
    await setup_recommendations()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

from models.user import users
from core.database import database
from core.security import get_password_hash


async def get_user(user_id: int):
    query = users.select().where(users.c.id == user_id)
    return await database.fetch_one(query)

async def get_user_by_email(email: str):
    query = users.select().where(users.c.email == email)
    user = await database.fetch_one(query)
    return user

async def create_user(user: dict):
    hashed_password = get_password_hash(user["password"])
    query = users.insert().values(email=user["email"], hashed_password=hashed_password, name=user["name"])
    last_record_id = await database.execute(query)
    return last_record_id

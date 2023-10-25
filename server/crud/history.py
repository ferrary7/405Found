from core.database import database
from models.history import browsing_history, purchase_history


async def add_browsing_record(user_id: int, product_id: int):
    query = browsing_history.insert().values(user_id=user_id, product_id=product_id)
    await database.execute(query)


async def add_purchase_record(user_id: int, product_id: int, quantity: int):
    query = purchase_history.insert().values(user_id=user_id, product_id=product_id, quantity=quantity)
    await database.execute(query)


async def get_browsing_history(user_id: int):
    query = browsing_history.select().where(browsing_history.c.user_id == user_id)
    return await database.fetch_all(query)


async def get_purchase_history(user_id: int):
    query = purchase_history.select().where(purchase_history.c.user_id == user_id)
    return await database.fetch_all(query)

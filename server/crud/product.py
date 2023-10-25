from models.product import products
from core.database import database

async def create_product(product_data: dict):
    query = products.insert().values(**product_data)
    product_id = await database.execute(query)
    return product_id

async def get_product(product_id: int):
    query = products.select().where(products.c.id == product_id)
    product = await database.fetch_one(query)
    return product

async def get_all_products():
    query = products.select()
    all_products = await database.fetch_all(query)
    return all_products

async def update_product(product_id: int, product_data: dict):
    query = (
        products.update()
        .where(products.c.id == product_id)
        .values(**product_data)
    )
    await database.execute(query)
    return await get_product(product_id)

async def delete_product(product_id: int):
    query = products.delete().where(products.c.id == product_id)
    await database.execute(query)
    return {"status": "product deleted successfully"}

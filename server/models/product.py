from sqlalchemy import Table, Column, Integer, String, ForeignKey
from core.database import metadata
from pydantic import BaseModel

products = Table(
    "products", metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("name", String, index=True),
    Column("description", String),
    Column("price", Integer),
    Column("user_id", Integer, ForeignKey("users.id"))
)

class ProductBase(BaseModel):
    name: str
    description: str
    price: float

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    product_id: int

class ProductInDB(ProductBase):
    id: int
    user_id: int

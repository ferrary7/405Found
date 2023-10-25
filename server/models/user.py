from sqlalchemy import Table, Column, Integer, String
from core.database import metadata
from pydantic import BaseModel

# SQLAlchemy Table Definition
users = Table(
    "users", metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("name", String, index=True),
    Column("email", String, unique=True, index=True),
    Column("hashed_password", String)  # Store password securely as a hashed version
)

# Pydantic Models
class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    password: str
    name: str

class UserOut(UserBase):
    id: int
    name: str

class UserInDB(UserBase):
    hashed_password: str

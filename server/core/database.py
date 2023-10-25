from sqlalchemy import create_engine, MetaData
from databases import Database
from .config import DATABASE_URL

metadata = MetaData()

engine = create_engine(DATABASE_URL)
database = Database(DATABASE_URL)

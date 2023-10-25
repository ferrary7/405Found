from sqlalchemy import create_engine
from core.database import metadata
from models.user import users
from models.product import products
# from models.browsing import browsing_history
# from models.purchase import purchase_history
from core.config import DATABASE_URL

engine = create_engine(DATABASE_URL)
metadata.create_all(engine)

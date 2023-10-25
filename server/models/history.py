from core.database import metadata
from sqlalchemy import Table, Column, Integer, DateTime, ForeignKey, func

browsing_history = Table(
    "browsing_history", metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("user_id", Integer, ForeignKey("users.id")),
    Column("product_id", Integer, ForeignKey("products.id")),
    Column("viewed_at", DateTime(timezone=True), server_default=func.now())
)

purchase_history = Table(
    "purchase_history", metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("user_id", Integer, ForeignKey("users.id")),
    Column("product_id", Integer, ForeignKey("products.id")),
    Column("quantity", Integer),
    Column("purchased_at", DateTime(timezone=True), server_default=func.now())
)

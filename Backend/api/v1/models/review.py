from models import Base
from models import db
from datetime import datetime


class Review(db.Model):
    """Review Model"""

    id = db.Column(
        db.Integer, nullable=False, primary_key=True, unique=True, autoincrement=True
    )
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=True)
    place_id = db.Column(db.Integer, db.ForeignKey("places.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

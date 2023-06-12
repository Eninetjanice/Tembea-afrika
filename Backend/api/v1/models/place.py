from models import Base
from models import db
from datetime import datetime


class Place(db.Model):
    """Review Model"""

    id = db.Column(
        db.Integer, nullable=False, primary_key=True, unique=True, autoincrement=True
    )
    name = db.Column(db.String(400), nullable=False)
    location = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

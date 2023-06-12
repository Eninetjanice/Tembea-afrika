from flask import Blueprint
from api.v1.models.user import User
from api.v1.models import db

auth = Blueprint("auth", __name__, url_prefix="/auth")


@auth.get("/register", strict_slashes=False)
def register():
    new_user = User(email="adeyemo@tm30.net", username="adeyemo")
    db.session.add(new_user)
    db.session.commit()
    return "User Created"


@auth.get("/me")
def me():
    return {"user": "me"}

from flask import Blueprint

review = Blueprint("review", __name__, url_prefix="/")


@review.post("/register", strict_slashes=False)
def register():
    return "User Created"


@review.get("/me")
def me():
    return {"user": "me"}

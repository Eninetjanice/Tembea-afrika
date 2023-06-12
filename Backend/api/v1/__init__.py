from flask import Flask
import os
from api.v1.routes.auth import auth
from api.v1.routes.review import review
from api.v1.models import db


def create_app(test_config=None):
    """Initialize app creation"""
    app = Flask(__name__, instance_relative_config=True)

    if test_config is None:
        app.config.from_mapping(
            SECRET_KEY=os.environ.get("SECRET_KEY"),
            SQLALCHEMY_DATABASE_URI=os.environ.get("SQLALCHEMY_DATABASE_URI"),
        )

    else:
        app.config.from_mapping(test_config)

    db.app = app
    db.init_app(app)

    app.register_blueprint(auth)
    app.register_blueprint(review)

    return app

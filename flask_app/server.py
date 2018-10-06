from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

import loyal_points
import json
@app.route("/")
def main():
    return "Hello World!"

@app.route("/programs")
def programs():
    return json.dumps(loyal_points.get_my_programs())

@app.route("/transfer")
def transfer():
    return json.dumps(loyal_points.make_transfer())

from flask import Flask, jsonify, make_response, render_template, request
from helpers import validate_request

app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route("/api/get-lucky-num", methods=['POST'])
def lucky_num():
    """POST route to process form data and send json response"""

    req = {
        "name": request.json["name"],
        "email": request.json["email"],
        "year": request.json["year"],
        "color": request.json["color"]
    }

    validation = validate_request(req)

    print(validation)

    if validation:
        return 'Next'
    else:
        return make_response(validation, 400)
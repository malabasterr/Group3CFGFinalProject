from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # CORS support to allow cross-origin requests i.e. from one origin on the frontend to the backend

# This demonstrates a string that could be returned when on the 'root' path of the url, e.g. the homepage
@app.route("/")
def index():
    return "Hello, this is the root path!" 

# This is an example of what could be returned (an array of members) when at a different path of the url (/members)
@app.route("/members")
def members():
    return {"members":["Member1", "Member2"]}

if __name__ == "__main__":
    app.run(debug=True)
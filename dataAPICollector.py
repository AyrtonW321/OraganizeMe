# https://flask.palletsprojects.com/en/3.0.x/quickstart/
# documentation for flask above

# https://www.youtube.com/watch?v=a37BL0stIuM&ab_channel=PatrickLoeber
# video for flask tutorial (chat bot)

#This is to collect data like calendar events, weather, gmail and display it into the mainPage.html
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("mainPage.html")

@app.post("/")
def collectInfo():
    pass

if __name__ == "__main__":
    app.debug(debug=True)
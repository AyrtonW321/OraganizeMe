from flask import Flask
import dataAPICollector  # Import all api data script

app = Flask(__name__)

@app.route('/data')
def get_data(module, input):
    data = dataAPICollector.callmodule(module, input)  # Invoke your Python script function
    return data

if __name__ == '__main__':
    app.run(debug=True)


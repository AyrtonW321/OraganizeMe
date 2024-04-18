from flask import Flask, request
from flask_cors import CORS
from backend import dataAPICollector

app = Flask(__name__)
CORS(app)


@app.route('/data', methods=['GET'])
def get_data():
    data = 'hello world'
    # module = request.args.get('module')
    # input_value = request.args.get('input')
    # data = dataAPICollector.callmodule(module, input_value)
    return data

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
    app.run(debug=True)

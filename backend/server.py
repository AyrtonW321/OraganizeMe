from flask import Flask, request
import dataAPICollector

app = Flask(__name__)

@app.route('/data')
def get_data():
    module = request.args.get('module')
    input_value = request.args.get('input')
    data = dataAPICollector.callmodule(module, input_value)
    return data

if __name__ == '__main__':
    app.run(debug=True)

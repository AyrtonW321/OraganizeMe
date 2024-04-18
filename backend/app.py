from flask import Flask, request, jsonify
from flask_cors import CORS
import dataAPICollector
app = Flask(__name__)
CORS(app)

# python backend\app.py
# type in temrianl to satrt server

@app.route('/data')
def get_data():
    module = request.args.get('module')
    input_value = request.args.get('input')
    data = dataAPICollector.callmodule(module, input_value)
    if data is None:
        # Return a 404 error response if data is not found
        return jsonify({'error': 'Data not found'}), 404
    else:
        # Return a JSON response with the data
        return jsonify(data)
    
    

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000)
    app.run(debug=True)



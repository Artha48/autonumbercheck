from flask import Flask, request, jsonify
import re
import os

app = Flask(__name__, static_folder='static', static_url_path='')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    number = data.get('number')

    # Validate if the input is a number (including scientific notation)
    try:
        float(number)  # Check if input is a valid number
        # Optional: Check for scientific notation using regex
        if re.match(r'^-?\d+(\.\d+)?([eE][-+]?\d+)?$', number):
            return jsonify({"message": "Yes, it is a number", "number": number})
        else:
            return jsonify({"error": "No, it is not a valid scientific number"}), 400
    except (ValueError, TypeError):
        return jsonify({"error": "No, it is not a number"}), 400

@app.route('/')
def home():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    # Ensure compatibility for local testing
    app.run(debug=True)

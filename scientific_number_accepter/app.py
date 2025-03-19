from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    number = data.get('number')

    # Validasi bilangan ilmiah
    try:
        float(number)  # Cek apakah input adalah bilangan valid
        return jsonify({"message": "Yes, it is a number", "number": number})
    except ValueError:
        return jsonify({"error": "No, it is not a number"}), 400

@app.route('/')
def home():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(debug=True)
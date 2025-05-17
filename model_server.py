from flask import Flask, request, jsonify
from PIL import Image
import numpy as np

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    file = request.files['image']
    image = Image.open(file).resize((180, 180))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    prediction = np.random.rand()

    if prediction > 0.5:
        result = "🟣 Topuk çatlağı tespit edildi."
    else:
        result = "🟢 Ayak sağlıklı görünüyor."

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(port=5001)

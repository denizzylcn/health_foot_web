from flask import Flask, request, jsonify
from model_server import analyze_image  # model_server'dan analiz fonksiyonunu al

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'image' not in request.files:
        return jsonify({'result': 'Görsel bulunamadı.'}), 400

    image = request.files['image']

    # Gerçek tahmin fonksiyonunu çağır
    result = analyze_image(image)

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(port=5001)

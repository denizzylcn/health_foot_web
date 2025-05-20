from PIL import Image
import numpy as np
import tensorflow as tf

# Eğittiğin modeli yükle
model = tf.keras.models.load_model("ayak_model.keras")

# Etiketler (veri klasör adlarına göre)
class_names = ['catlak', 'kalinlasmis', 'mantar', 'mekanik', 'nasir']

def analyze_image(file):
    image = Image.open(file).resize((180, 180))
    image_array = np.array(image) / 255.0
    image_array = np.expand_dims(image_array, axis=0)

    predictions = model.predict(image_array)
    predicted_index = np.argmax(predictions[0])
    predicted_label = class_names[predicted_index]
    confidence = round(float(np.max(predictions[0])) * 100, 2)

    return f"{predicted_label.upper()} ({confidence}%)"

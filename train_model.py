import tensorflow as tf
from tensorflow.keras.utils import image_dataset_from_directory
from tensorflow.keras.models import Sequential # type: ignore
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense # type: ignore
import os

# Eğitim verisi yolu
dataset_dir = "ayak-dataset"

# Verileri yükle
dataset = image_dataset_from_directory(
    dataset_dir,
    image_size=(180, 180),
    batch_size=8
)

# Etiketleri yazdır (sınıfların sırası önemli)
print("Sınıflar:", dataset.class_names)

# Modeli oluştur
model = Sequential([
    Conv2D(16, (3, 3), activation='relu', input_shape=(180, 180, 3)),
    MaxPooling2D(),
    Conv2D(32, (3, 3), activation='relu'),
    MaxPooling2D(),
    Flatten(),
    Dense(64, activation='relu'),
    Dense(len(dataset.class_names), activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)

# Eğitimi başlat
model.fit(dataset, epochs=10)

# Eğitilen modeli kaydet
model.save("ayak_model.keras")
print("✅ Model başarıyla kaydedildi!")

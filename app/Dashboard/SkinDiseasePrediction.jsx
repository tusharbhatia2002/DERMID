'use client'

import React, { useState } from 'react';

const SkinDiseasePrediction = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handlePrediction = async () => {
    if (!selectedImage) {
      setError('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await fetch('http://localhost:8080/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 200) {
        const data = await response.json();
        setPredictionResult(data);
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(`Prediction failed with status ${response.status}: ${errorMessage}`);
        setPredictionResult(null);
      }
    } catch (error) {
      setError('Error predicting skin disease. Please try again.');
      setPredictionResult(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black mb-4 py-2">
      {/* Add margins to the container */}
      <div className="bg-blue-100 p-4 rounded-lg shadow-md w-96 mt-4 mb-4 overflow-y-auto max-h-screen">

        <h1 className="text-3xl font-extrabold mb-4 text-center">Skin Disease Prediction</h1>
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="imageUpload"
          />
          <label
            htmlFor="imageUpload"
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-600 text-center w-full block"
          >
            Upload Image
          </label>
          {selectedImage && (
            <div className="mt-4 text-center">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt={selectedImage.name}
                className="max-w-full h-auto rounded-lg"
              />
              <p className="text-sm mt-2">{selectedImage.name}</p>
            </div>
          )}
        </div>
        <div className="mb-4">
          <button
            onClick={handlePrediction}
            className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold transition duration-300 hover:bg-green-600 w-full block"
          >
            Predict
          </button>
        </div>
        {error && <p className="text-red-600">{error}</p>}
        {predictionResult && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-center text-black">Diagnosis: {predictionResult.prediction}</p>
            <p className="text-lg text-center text-black">Confidence: {predictionResult.score}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkinDiseasePrediction;

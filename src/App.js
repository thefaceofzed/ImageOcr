// App.js
import React, { useCallback, useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';
import './App.css';
import './index.css';
import { Circle } from './circle';
import logo from './DATA/logo.png';
import background from './DATA/background.png';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");

  const worker = createWorker();

  const convertImageToText = useCallback(async () => {
    if (!selectedImage) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data } = await worker.recognize(selectedImage);
    setTextResult(data.text);
  }, [worker, selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText]);

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center hover:bg-gray-700 transition duration-300 relative" style={{ backgroundImage: `url(${background})` }}>
      <img src={logo} alt="idcard" className="w-[170px] h-[170px] rounded-glowing bg-gray-900 mt-2 mr-auto" />

      <div className="header-container p-4 text-center text-white">
        <h1 className="text-3xl font-semibold">Welcome to the new image to text generator</h1>
        <p>Get words from images!</p>
      </div>

      <div className="input-wrapper p-4 flex flex-col items-center justify-center">
        <label htmlFor="upload" className="text-blue-500 hover:underline cursor-pointer">
          Upload Image
        </label>
        <input type="file" id="upload" accept="image/*" onChange={handleChangeImage} className="hidden" />
      </div>

      <div className="result p-4">
        {selectedImage && (
          <div className="box-image">
            <img src={URL.createObjectURL(selectedImage)} alt="thumb" className="rounded-lg shadow-lg" />
          </div>
        )}
        {textResult && (
          <div className="box-p mt-4">
            <p>{textResult}</p>
          </div>
        )}
      </div>

      <Circle />
    </div>
  );
}

export default App;


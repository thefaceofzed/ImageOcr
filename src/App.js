import React, { useState } from 'react';
import Form from './Components/FormData';
import { Circle } from './circle';
import Footer from './Components/Footer';
import 'tailwindcss/tailwind.css';
import Navbar from './Components/Navbar';
import logo from './DATA/logo.png';
import backgroundImage from './DATA/background.png';
import './index.css';

import Testimonials from './Components/Testimonials ';
import GetStarted from './Components/GetStarted';

const App = () => {
  const [image, setImage] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setImage(reader.result);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleApiCall = () => {
    if (image) {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json:',
          'X-WORKER-EXTRACTOR-ID': '348c30aa-28e3-4bd9-8f3f-3c910a99c61c',
          'X-WORKER-ENCODING': 'raw',
          'X-WORKER-PDF-DPI': '150',
          'X-WORKER-ASYNC': 'false',
          'X-WORKER-AUTO-ADJUST-IMAGE-SIZE': 'true',
          'X-WORKER-PROCESSING-MODE': 'per-page',
          'content-type': 'image/*',
          'X-WORKER-TOKEN': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9vd25lcl9pZCI6IjcxMDhkMmZjLTYxMGYtNDc5Mi05NmRlLTRkMmZkOTM1NDM1YyIsIndvcmtlcl90b2tlbl9pZCI6ImQ4MDkxYTIxLTQ4YzEtNGM2ZC1iOTU5LTg3M2EwMTUyYzAzZiIsInVzZXJfaWQiOiI3MTA4ZDJmYy02MTBmLTQ3OTItOTZkZS00ZDJmZDkzNTQzNWMifQ.uCTEv1vXL3EtFBfLMGUWRnr_KzA5tXlVikhtGCZahRk',
        },
        body: `data:image/jpeg;base64,${image.split(',')[1]}`,
      };

  
      fetch('https://worker.formextractorai.com/v2/extract', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setExtractedData(data); // Mettez à jour l'état avec les données extraites
      })
      .catch(error => console.error(error));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
    <img src={logo} alt="Dataprotect" className="w-[140px] h-[140px] rounded-glowing bg-gray-900 absolute top-0 left-0 ml-8 mt-8" />
    <div className="mx-auto max-w-2xl flex-grow flex flex-col"> {/* Ajout de la classe flex ici */}
      <Navbar />
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleApiCall}>Envoyer à l'API</button>

      {extractedData && <Form extractedData={extractedData} />}
      <Circle />
      <GetStarted />
      <Testimonials />
    </div>
    <div className="mt-auto">
      <Footer />
    </div>
  </div>
);
};

export default App;
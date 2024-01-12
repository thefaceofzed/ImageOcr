// WelcomeMessage.jsx

import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="rounded-lg p-4 pt-12 text-white text-center transition duration-300">
      <h1 className="text-2xl font-bold">
        Extraction de données à partir de documents d'identité à l'aide de la reconnaissance optique de caractères 
        <span style={{ color: 'wheat' }}> (OCR)</span>
      </h1>
    </div>
  );
};

export default WelcomeMessage;

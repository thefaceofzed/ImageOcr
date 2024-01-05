// Footer.jsx

import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12"> {/* Modification de la classe bg-gray-800 à bg-gray-900 */}
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex mb-4 space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 flex items-center"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 flex items-center"
          >
            <FaFacebook className="mr-2" />
            Facebook
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-400 flex items-center"
          >
            <FaInstagram className="mr-2" />
            Instagram
          </a>
          {/* Ajoutez d'autres liens sociaux selon vos besoins */}
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Votre Nom / Entreprise. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

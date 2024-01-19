import React, { useState } from 'react';
import { FaInfoCircle, FaSpinner, FaCheck } from 'react-icons/fa';
import StripeCheckout from 'react-stripe-checkout';


const Checkout = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const onToken = () => {
    // Affichez simplement une alerte ou un message pour indiquer que le paiement a réussi
    alert('Paiement réussi !');
    
    // Set the state to show payment success
    setPaymentSuccess(true);
  };

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg border-2 border-blue-500 hover:border-blue-700">
        <h1 className="text-4xl font-semibold mb-6 text-center">Paiement Checkout</h1>

        {/* ... (Reste du code inchangé) */}

        {/* Stripe Checkout Component */}
        <StripeCheckout
          token={onToken}
          stripeKey="pk_test_51OGhKkFaKNP9v9yf7ZnSuzj6bHGyvyDtaIuKV9AMIMhP87RbqA7lA4OKsMVqxSG1dLOByYj8HXVKUdMewrixahIZ00u0NxcNmy"
          // Autres propriétés comme le montant, la devise, etc., peuvent être ajoutées ici
        />

        {/* Affichez un message de paiement réussi si le paiement a réussi */}
        {paymentSuccess && (
          <div className="mt-4 flex items-center text-green-500">
            <FaCheck className="mr-2" />
            Paiement effectué avec succès !
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

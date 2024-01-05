import React from 'react';
import styles from '../style';
import person1Image from '../DATA/Portrait1.jpg';
import person2Image from '../DATA/Portrait2.png';
import person3Image from '../DATA/portrait3.jpg';
import person4Image from '../DATA/Portrait4.jpg';
import person5Image from '../DATA/Portrait5.jpg';

const testimonialsData = [
  {
    id: 1,
    name: 'Sneako',
    position: 'CEO, ',
    feedback: 'Pround of you guys.',
    image: person1Image,
  },
  {
    id: 2,
    name: 'joe rogan',
    position: 'CTO, ',
    feedback: 'nice work  .',
    image: person2Image,
  },
  {
    id: 3,
    name: 'Pewdiepie',
    position: 'COO',
    feedback: 'well done guys you can easily extract data from a document and display it in a form',
    image: person3Image,
  }
  
];

const Testimonials = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
          <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    
          <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
              What people say about us
            </h2>
          </div>
  

<div className="grid grid-cols-3 gap-4" style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '20px' }}>
  {testimonialsData.map((card) => (
    <div key={card.id} className="my-4"> {/* Ajouter une div ici avec une marge */}
      <div
        className={`${styles.card} bg-white p-6 rounded-lg shadow-lg`}
        style={{
          backgroundImage: `url(${card.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '400px',
          width: '300px',
          border: '2px solid blue',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px',
          boxSizing: 'border-box',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <h3 className="text-xl font-semibold mb-2">{card.name}</h3>
        <p className="text-white">{card.position}</p>
        <p className="text-white mt-4">{card.feedback}</p>
      </div>
    </div>
  ))}
</div>  



        </section>
      );
    };
    
    export default Testimonials;
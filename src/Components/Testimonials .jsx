import React from "react";
import styles from "../style";
import person1Image from "../DATA/Portrait1.jpg";
import person2Image from "../DATA/Portrait2.png";
import person3Image from "../DATA/portrait3.jpg";
import person4Image from "../DATA/Portrait4.jpg";
import person5Image from "../DATA/Portrait5.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "Sneako",
    position: "CEO, ",
    feedback: "Pround of you guys.",
    image: person1Image,
  },
];

const Testimonials = () => {
  return (
  

      

      <div
        className="grid grid-cols-3 gap-4"
        style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "20px" }}
      >
        {testimonialsData.map((card) => (
          <div key={card.id} className="my-4">
            {" "}
            {/* Ajouter une div ici avec une marge */}
            <div
              className={`${styles.card} bg-white p-6 rounded-lg shadow-lg`}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "400px",
                width: "670px",
                border: "2px solid blue",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "20px",
                boxSizing: "border-box",
                transition: "transform 0.3s ease-in-out",
              }}
            ></div>
          </div>
        ))}
      </div>
  );
};

export default Testimonials;

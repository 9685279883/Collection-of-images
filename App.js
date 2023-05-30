
import React, { useEffect } from "react";
import { useState } from "react";
import image1 from "../src/images/Goa.jpeg";
import image2 from "../src/images/Darjeeling.jpeg"
import image3 from "../src/images/Jaipur.jpeg"
import image4 from "../src/images/Kochi.jpeg"
import image5 from "../src/images/Varanasi.jpeg";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const allImages = [image1, image2, image3, image4, image5];
  const allDesc = ["GOA is a small state on India's western coast, known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture. The state is also known for its spicy seafood dishes and unique cultural traditions.", 
  "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle.", 
  "Jaipur is the capital city of the Indian state of Rajasthan, known for its stunning pink-hued buildings and palaces. The city is also known as the due to the color of many of its buildings. Jaipur is famous for its intricate textiles.", 
  "Kochi is a port city in the Indian state of Kerala, known for its historic connections to trade and commerce. The city is home to several stunning churches, synagogues, and mosques, as well as a rich culinary tradition that blends Indian.",
  "Varanasi is a holy city in northern India, situated on the banks of the sacred river Ganges. The city is a major pilgrimage site for Hindus and is famous for its ancient temples, winding alleyways, and colorful festivals."];

  const handleNext = () => {
    if (activeIndex === allImages.length - 1) {
      setActiveIndex(0);
    }
    else {
      setActiveIndex(activeIndex + 1);
    }
  }

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex((activeIndex) => activeIndex - 1);
    }

    else if (activeIndex <= 0) {
      setActiveIndex(4);
    }
  }

  useEffect(() => {
    const handleAutoplay = setInterval(handleNext, 3000);
    return () => clearInterval(handleAutoplay);
  }, [handleNext])

  return (

    <>

      <div className="carousel__container">
        <img width={2000} height={900} style={{ borderRadius: 230, objectFit: "cover" }} alt="img" className="image" src={allImages[activeIndex]} />
        <h2 className="carousel__title">{allDesc[activeIndex]}</h2>
      </div>

      <div className="buttons">

        <button
        className="prev"
          onClick={handlePrev}>
          &laquo;
          PREVIOUS
        </button>

        <button
        className="next"
          onClick={handleNext}>
          NEXT
          &raquo;
        </button>

      </div>

    </>
  );
}

export default App;
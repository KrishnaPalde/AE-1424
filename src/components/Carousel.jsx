import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";



export default function Carousel(props) {
  const slides = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
    },

    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
        
        clearInterval(intervalId);
      };
    }, [currentIndex]); 

  return (
    <div className="max-w-full h-[600px] w-full m-auto py-8 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})`, loading:"lazy" }}
        className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
      ></div>
      
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2 top-4" id="carousel_items">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

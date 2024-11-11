import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
  const slides = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/banner1.jpg?alt=media&token=de6a7739-a570-4fa0-bdcf-fe37ce3af6fe",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/banner%202.jpg?alt=media&token=cafb8857-a947-4d52-b790-5b8c356f9341",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/banner1.jpg?alt=media&token=de6a7739-a570-4fa0-bdcf-fe37ce3af6fe",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[700px] mx-4 "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.url}
              alt={`Slide ${index + 1}`}
              className="w-full h-[650px] object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        
        .swiper-pagination-bullet {
          background-color: #e67e23 !important; /* Change the dot color */
        }

        .swiper-pagination-bullet-active {
          background-color: #e67e23 !important; /* Active dot color */
        }
      `}</style>
    </>
  );
}

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import config from '@/config';
import LazyLoad from 'react-lazyload';

const API_URL = config.API_URL;

export default function Carousel() { 
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const slides = [
  //   {
  //     url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/banner1.jpg?alt=media&token=de6a7739-a570-4fa0-bdcf-fe37ce3af6fe",
  //   },
  //   {
  //     url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/banner%202.jpg?alt=media&token=cafb8857-a947-4d52-b790-5b8c356f9341",
  //   },
  //   {
  //     url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/banner1.jpg?alt=media&token=de6a7739-a570-4fa0-bdcf-fe37ce3af6fe",
  //   },
  //   {
  //     url: "https://firebasestorage.googleapis.com/v0/b/tranquil-trails-70973.appspot.com/o/123.png?alt=media&token=9410c10f-8752-4d1b-8475-b5f8aa115f55",
  //   },
  // ];

  useEffect(() => {
      const fetchBanners = async () => {
        try {
          const response = await fetch(API_URL + "/banners");
          if (!response.ok) throw new Error("Failed to fetch banners");
          const data = await response.json();
          setBanners(data);
        } catch (err) {
          setError("Failed to load banners.");
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchBanners();
    }, []);

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
        className="max-w-full h-[700px] mx-4"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <LazyLoad key={index} height={200} offset={150} once>
            <img
              src={banner.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-[650px] object-cover "
            />
            </LazyLoad>
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

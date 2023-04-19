import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./videoworkstyles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Photographervideogallerygrid() {
  return (
    <div>
      <section className="overflow-hidden bg-white  p-16">
        <p className="md:text-5xl text-2xl text-[#000] text-center align-middle pb-8">
          Videos
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          //   navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/MST7Ma7Kyts"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="lg:w-[80%] rounded-lg lg:ring-2 lg:shadow-blue-400/40 lg:shadow-lg"
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/YF02TlOhlug?start=7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:w-[80%] rounded-lg lg:ring-2 lg:shadow-blue-400/40 lg:shadow-lg"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1S0RNHVX2n8?start=6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:w-[80%] rounded-lg lg:ring-2 lg:shadow-blue-400/40 lg:shadow-lg"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-30O5YWHvOI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:w-[80%] rounded-lg lg:ring-2 lg:shadow-blue-400/40 lg:shadow-lg"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

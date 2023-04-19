import React from "react";
// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./imgworkstyle.css";

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";

export default function Photographerimggallerygrid() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-16">
      <p className="md:text-5xl text-2xl text-[#ffff] text-center align-middle">
        Photos
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
        className="mySwiper lg:bg-gray-500/20 lg:rounded-lg lg:border-2 m-8 transition-transform"
      >
        <SwiperSlide>
          <img
            alt="img1"
            src="https://imgs.search.brave.com/T-a8fMGlAuVaxhlNMcAFvJZHY448wz3io6tjJTPOPrU/rs:fit:1200:800:1/g:ce/aHR0cDovL3NsYXdh/d2FsY3phay5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTIvTHV4dXJ5LUlu/ZGlhbi1XZWRkaW5n/LVBob3RvZ3JhcGh5/LUxvbmRvbi1EZXN0/aW5hdGlvbi04Lmpw/Zw"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="img2"
            src="https://imgs.search.brave.com/B01CLP3xHSJhnX0zopJcAL7YIdwNSNegL8LCFOwN1d4/rs:fit:1200:1000:1/g:ce/aHR0cDovL2luZGlh/bndlZGRpbmdidXp6/LmNvbS9kcml2ZS91/cGxvYWRzLzIwMTYv/MDQvMDI5X0lNR184/MjU2LWNvcHkuanBn"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="img3"
            src="https://i.pinimg.com/originals/58/06/bc/5806bcaa0a1d7bc9c08c59aa23278718.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="img4"
            src="http://www.jaypankhania.com/wp-content/uploads/2016/01/02-8170-post/indian-pre-wedding-shoot-beach-durdle-door-07.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="img5"
            src="https://allevents-blog.s3.amazonaws.com/blog/wp-content/uploads/2014/09/0024.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="img6"
            src="https://media.cntraveller.in/wp-content/uploads/2018/10/GujaratTourism1.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

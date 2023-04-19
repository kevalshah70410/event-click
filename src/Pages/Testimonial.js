// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-flip";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./testimonialstyles.css";

// // import required modules
// import { EffectFlip, Pagination, Navigation } from "swiper";

// export default function Testimonial() {
//   return (
//     <>
//       <Swiper
//         effect={"flip"}
//         grabCursor={true}
//         pagination={true}
//         navigation={true}
//         modules={[EffectFlip, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// -------------------------------------------------------------------------------------------
// import React, { Component } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import "./testimonialstyles.css";
// export default class Testimonials extends Component {
//   render() {
//     return (
//       <Carousel
//         showArrows={true}
//         infiniteLoop={true}
//         showThumbs={false}
//         showStatus={false}
//         autoPlay={true}
//         interval={6100}
//       >
//         <div>
//           <img src="/images/shirley.png" />
//           <div className="myCarousel ">
//             <h3>Shirley Fultz</h3>
//             <h4>Designer</h4>
//             <p>
//               It's freeing to be able to catch up on customized news and not be
//               distracted by a social media element on the same site
//             </p>
//           </div>
//         </div>

//         <div>
//           <img src="/images/daniel.png" />
//           <div className="myCarousel">
//             <h3>Daniel Keystone</h3>
//             <h4>Designer</h4>
//             <p>
//               The simple and intuitive design makes it easy for me use. I highly
//               recommend Fetch to my peers.
//             </p>
//           </div>
//         </div>

//         <div>
//           <img src="/images/theo.png" />
//           <div className="myCarousel">
//             <h3>Theo Sorel</h3>
//             <h4>Designer</h4>
//             <p>
//               I enjoy catching up with Fetch on my laptop, or on my phone when
//               I'm on the go!
//             </p>
//           </div>
//         </div>
//       </Carousel>
//     );
//   }
// }

// ----------------------------------------------------------------------------------------------
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testimonialstyles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Testimonial() {
  return (
    <div className="bg-white pb-20">
      <div>
        <p className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          Customer Feedback
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mx-auto max-w-5xl px-4 py-8">
            <section className="rounded-lg bg-gray-100 p-8">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="aspect-square w-full rounded-lg object-cover"
                />

                <blockquote className="sm:col-span-2">
                  <p className="text-xl font-medium sm:text-2xl">
                    I am very happy to your website and also it's recommondation
                    to all the photographer to use this website because it's
                    provide nice management for event booking or appointment
                    regarding.
                  </p>

                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                    <p className="text-sm uppercase text-gray-500 sm:ml-3">
                      <strong>Keval Shah</strong>, Photoghrapher.
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mx-auto max-w-5xl px-4 py-8">
            <section className="rounded-lg bg-gray-100 p-8">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="aspect-square w-full rounded-lg object-cover"
                />

                <blockquote className="sm:col-span-2">
                  <p className="text-xl font-medium sm:text-2xl">
                    I am recommend to all please go thru this website to find
                    the best photographer. It is very nice website.
                  </p>

                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                    <p className="text-sm uppercase text-gray-500 sm:ml-3">
                      <strong>Keval Shah</strong>,User
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mx-auto max-w-5xl px-4 py-8">
            <section className="rounded-lg bg-gray-100 p-8">
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1625019030820-e4ed970a6c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="aspect-square w-full rounded-lg object-cover"
                />

                <blockquote className="sm:col-span-2">
                  <p className="text-xl font-medium sm:text-2xl">
                    This is very nice website to find the photographer as your
                    recommendation and It is very nice online platfrorm to book
                    the photographer.
                  </p>

                  <cite className="mt-8 inline-flex items-center not-italic">
                    <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                    <p className="text-sm uppercase text-gray-500 sm:ml-3">
                      <strong>Raj Patel</strong>, User.
                    </p>
                  </cite>
                </blockquote>
              </div>
            </section>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

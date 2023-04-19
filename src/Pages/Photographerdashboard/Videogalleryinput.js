// import React from 'react'
// import AddIcon from "@mui/icons-material/Add";
// function Videogalleryinput() {
//   return (
//     <div>
//         <div className="flex justify-between ">
//               <h1 className="font-bold text-xl title-font text-left  mx-5">
//                 Upload Work Videos :
//               </h1>
//             </div>
//             <section class="text-gray-600 body-font">
//               <div class="container px-5 py-12 mx-auto">
//                 <div class="flex flex-col"></div>
//                 <div class="flex flex-wrap sm:-m-4 mx-4 -mb-10 -mt-4">
//                   <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
//                     <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                       <div class="lg:h-52 md:h-36  w-full object-cover object-center bg-gray-200 py-16">
//                         <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
//                           <circle cx="12" cy="7" r="4"></circle>
//                           <div className="text-white text-xl">
//                             <AddIcon />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
//                     <div class="rounded-lg h-64 overflow-hidden">
//                       <iframe
//                         width="300"
//                         height="200"
//                         src="https://www.youtube.com/embed/7pVpquui3Rc"
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowfullscreen
//                       ></iframe>
//                     </div>
//                   </div>
//                   <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
//                     <div class="rounded-lg h-64 overflow-hidden">
//                       <iframe
//                         width="300"
//                         height="200"
//                         src="https://www.youtube.com/embed/JNKZN8uq1H8"
//                         title="YouTube video player"
//                         frameborder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowfullscreen
//                       ></iframe>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//     </div>
//   )
// }

// export default Videogalleryinput

import React from "react";
function Videogalleryinput() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <button className="text-center lg:p-[50px] p-[50px] ml-5 m-5 text-5xl ">
                  +
                </button>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://www.youtube.com/embed/YF02TlOhlug?start=5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <iframe
                  width="560"
                  height="315"
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://www.youtube.com/embed/YF02TlOhlug?start=5"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Videogalleryinput;

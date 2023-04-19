import React from "react";
// import AddIcon from "@mui/icons-material/Add";

import MiniDrawer from "../Photographerdashboard/MiniDrawer";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Imagegalleryinput from "./Imagegalleryinput";
import Videogalleryinput from "./Videogalleryinput";
import Photographerinputpricing from "./Photographerinputpricing";
// import Photographerinputpricing from "./Photographerinputpricing";

function Dash() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Typography paragraph>
          {/* <section className="flex flex-col mt-5 p-10"> */}
          {/* <div className="flex justify-between ">
              <h1 className="font-bold text-xl title-font text-left  mx-5">
                Upload Work Photos :
              </h1>
            </div>

            <section class="text-gray-600 body-font">
              <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col"></div>
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="lg:h-52 md:h-36  w-full object-cover object-center bg-gray-200 py-16">
                        <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
                          <circle cx="12" cy="7" r="4"></circle>
                          <div className="text-white text-xl">
                            <AddIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-52 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qPmyou8HM0n-ia6ZoZYnSPZDyiyfE1Rxlw&usqp=CAU"
                      />
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-52 overflow-hidden">
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src="https://www.grandweddings.co.in/wp-content/uploads/2020/01/Wedding-Event.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
      
            <Imagegalleryinput />
          
          {/* <div className="flex justify-between ">
              <h1 className="font-bold text-xl title-font text-left  mx-5">
                Upload Work Photos :
              </h1>
            </div>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col"></div>
                <div class="flex flex-wrap sm:-m-4 mx-4 -mb-10 -mt-4">
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <div class="lg:h-52 md:h-36  w-full object-cover object-center bg-gray-200 py-16">
                        <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
                          <circle cx="12" cy="7" r="4"></circle>
                          <div className="text-white text-xl">
                            <AddIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <iframe
                        width="300"
                        height="200"
                        src="https://www.youtube.com/embed/7pVpquui3Rc"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                    <div class="rounded-lg h-64 overflow-hidden">
                      <iframe
                        width="300"
                        height="200"
                        src="https://www.youtube.com/embed/JNKZN8uq1H8"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}
          <Videogalleryinput />
          {/* <Photographerinputpricing/> */}
          {/* </section> */}

          <Photographerinputpricing/>
        </Typography>
      </Box>

      {/* <section className="pl-[200px] flex flex-col mt-5 mx-auto ">
          <div className="flex justify-between ">
            <h1 className="font-bold text-xl title-font text-left  mx-5">
              Upload Work Photos :
            </h1>
          </div>

          <section class="text-gray-600 body-font">
            <div class="container px-5 py-12 mx-auto">
              <div class="flex flex-col"></div>
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div class="lg:h-52 md:h-36  w-full object-cover object-center bg-gray-200 py-16">
                      <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
                        <circle cx="12" cy="7" r="4"></circle>
                        <div className="text-white text-xl">
                          <AddIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-52 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qPmyou8HM0n-ia6ZoZYnSPZDyiyfE1Rxlw&usqp=CAU"
                    />
                  </div>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-52 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://www.grandweddings.co.in/wp-content/uploads/2020/01/Wedding-Event.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h1 className="font-bold text-xl title-font text-left  mx-5">
            Upload Your Videos :
          </h1>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-12 mx-auto">
              <div class="flex flex-col"></div>
              <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <div class="lg:h-52 md:h-36  w-full object-cover object-center bg-gray-200 py-16">
                      <div class="w-20 h-20 py-10 rounded-full inline-flex items-center justify-center bg-blue-500 text-gray-400  ">
                        <circle cx="12" cy="7" r="4"></circle>
                        <div className="text-white text-xl">
                          <AddIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/7pVpquui3Rc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/JNKZN8uq1H8"
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
        </section> */}
    </div>
  );
}

export default Dash;

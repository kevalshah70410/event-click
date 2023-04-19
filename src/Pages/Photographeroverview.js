import React from "react";
import Photographerimggallerygrid from "./Photographerimggallerygrid";
import Photographervideogallerygrid from "./Photographervideogallerygrid";
import Photographerpricing from "./Photographerpricing";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
import NavigationMenu from "./NavigationMenu";
function Photographeroverview() {
  return (
    <div className="bg-white">
      <NavigationMenu />
      {/* First Section */}
      <section className="overflow-hidden bg-[url(file:///D:/Study/Collage/SEM-8/Internship/eventclick/src/Pages/Images/home2bgimg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <blockquote className="rounded-lg bg-gray-100/0 p-8">
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                  className="h-20 w-20 rounded-full object-cover ring-2 ring-blue-500  ring-offset-2r"
                />

                <div className="ml-5">
                  {/* <div className="flex justify-center gap-0.5 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div> */}

                  <p className="mt-5 text-lg font-medium text-white">
                    ravimaheta@32
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-300">
                    Bhuyangdev
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-400">
                    Category: Wedding
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-400">
                    8-Years
                  </p>

                  {/* <p className="mt-1 text-sm font-medium text-white">
                    Rating: 5 Star
                  </p> */}
                  <div>
                    <Stack>
                      <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={0.5}
                        readOnly
                        size="small"
                        className="mb-4 mt-1 ml-4
                        
                        
                        lg:ml-0"
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        <p className="lg:text-4xl text-2xl pt-5 pb-8">About Me</p>
        <section className="rounded-lg bg-gray-100/0  pb-5">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="aspect-square w-full rounded-lg object-cover"
            />

            <blockquote className="sm:col-span-2 ">
              <p className="text-lg font-medium  text-left text-gray-500 sm:ml-3">
                Hello Everyone...! My name is Ravi Maheta. I have being 8 years
                experience of photographer. I was completed the course of
                photographer in Reliance Education at 2015. I am expertise in
                Pre-wedding Photoshoot, Wedding Photoshoot as well as Party
                Photoshoot.Here below you can also see my work. If you will book
                me I am not dissapoint you.
              </p>

              {/* <cite className="mt-8 inline-flex items-center not-italic">
                <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                <p className="text-sm uppercase text-gray-500 sm:ml-3">
                  <strong>Justin Harrison</strong>, Beatle Inc.
                </p>
              </cite> */}
            </blockquote>
          </div>
        </section>
      </div>

      {/* Third Section */}
      <section>
        <Photographerimggallerygrid />
      </section>
      {/* Fourth Section */}
      <section>
        <Photographervideogallerygrid />
      </section>
      {/* Fifth Section */}
      <section>
        <Photographerpricing />
      </section>
    </div>
  );
}

export default Photographeroverview;

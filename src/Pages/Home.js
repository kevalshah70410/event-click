import React, { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Selectcategory from "./Selectcategory";
import Testimonial from "./Testimonial";
import Rating from "@mui/material/Rating";
import { Stack } from "@mui/material";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase";
// import Searchbar from "./Searchbar";

function Home() {
  const [photographerList, setPhotoGrapherList] = useState([]);
  useEffect(() => {
    debugger;
    const arr = [];
    getDocs(collection(db, "user")).then((user) => {
      user.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        debugger;
        if (doc.data().role != "user") {
          if (arr.length < 3) {
            arr.push(doc.data());
            setPhotoGrapherList(arr);
          }
        }
      });
    });
  }, []);
  console.log(photographerList);
  return (
    <div className="bg-white">
      <NavigationMenu />
      {/* First Section */}
      <section className="overflow-hidden bg-[url(https://static.photocdn.pt/images/articles/2017/05/24/iStock-466345427.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-bold text-white sm:text-5xl md:text-5xl text-center">
              Let's Find The Photographer
            </h2>

            {/* <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p> */}

            <div className="mt-8 sm:mt-8">
              {/* <a
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a> */}
              {/* <Searchbar /> */}
              <Searchbar />
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="bg-white mt-8 align-middle">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Top Rated Photographers
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {photographerList &&
              photographerList.length > 0 &&
              photographerList.map((photographer) => (
                <div>
                  <blockquote className="rounded-lg bg-gray-100 shadow-lg shadow-gray-500/40 border-2 p-10">
                    <div className="flex items-center gap-4">
                      <img
                        alt="Man"
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="h-16 w-16 rounded-full object-cover ring-2 ring-blue-500  ring-offset-2"
                      />

                      <div>
                        <p className="mt-3 flex text-lg font-medium text-gray-700">
                          {photographer.username}
                        </p>
                        <div className="">
                          <Stack>
                            <Rating
                              name="half-rating-read"
                              defaultValue={5}
                              precision={0.5}
                              readOnly
                              size="small"
                              className="mb-4 mt-1 -ml-1 lg:-ml-1"
                            />
                          </Stack>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-gray-500 text-left">
                      <p>Expertise: {photographer.expertise}</p>
                      {/* <br /> */}

                      {/* <br /> */}
                      <p>Area: {photographer.area}</p>
                      <p>Experience:{photographer.experience}</p>
                      <Link to={"/Photographeroverview"}>
                        <button className="text-white hover:bg-cyan-500/20 shadow-md shadow-cyan-500/50 bg-cyan-500 hover:text-cyan-500 transition-colors duration-500 w-[100px] h-[30px] mt-5 lg:mt-0 rounded-lg lg:float-right">
                          View
                        </button>
                      </Link>
                    </p>
                  </blockquote>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/*Third Section  */}
      <section>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                className="h-4 w-4"
                fill="#ffff"
                fill-opacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,218.7C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-white">
            Search By Event
          </h2>
          <Selectcategory />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffff"
                fill-opacity="1"
                d="M0,192L48,197.3C96,203,192,213,288,218.7C384,224,480,224,576,218.7C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section>
        <Testimonial />
      </section>
    </div>
  );
}

export default Home;

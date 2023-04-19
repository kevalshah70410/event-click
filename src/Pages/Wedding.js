import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import NavigationMenu from "./NavigationMenu";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import Photographerfilter from "./Photographerfilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
function Wedding() {
  const [photographerList, setPhotoGrapherList] = useState([]);
  useEffect(() => {
    const arr = [];
    getDocs(collection(db, "user")).then((user) => {
      user.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data().role != "user") {
          arr.push(doc.data());
          setPhotoGrapherList(arr);
        }
      });
    });
  }, []);
  return (
    <div className="bg-white">
      <NavigationMenu />
      <section className="overflow-hidden bg-[url(https://i.pinimg.com/originals/99/82/31/9982317ff03679961d06e3b2faa0f390.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            {/* <h2 className="text-lg font-bold text-white sm:text-5xl md:text-5xl text-center">
              Let's Find The Photographer
            </h2> */}
            <div className="text-center">
              {/* <Photographerfilter /> */}
              <p className="text-5xl text-white">Wedding</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 flex-col ">
            {photographerList &&
              photographerList.length > 0 &&
              photographerList.map((photographer) => (
                <div className="w-full p-4  bg-white shadow-lg shadow-gray-500/40 mt-4 mb-4 rounded-lg ">
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-[150px] h-[150px] object-cover object-center sm:mb-0 mb-4"
                      src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    />
                    <div className="flex-grow sm:pl-8">
                      <h2 className="title-font font-medium lg:mt-10 text-lg text-cyan-600">
                        {photographer.username}
                      </h2>

                      <h3 className="text-gray-800 -mt-3 mb-2 ">
                        {" "}
                        {photographer.area}
                      </h3>
                      {/* <p className="">Category: {photographer.expertise}</p> */}
                      <p className="">Category:Wedding </p>
                      <p className="mb-4 flex">
                        Experience:
                        <p className="ml-1"> {photographer.experience}</p>
                      </p>
                      <Stack>
                        <Rating
                          name="half-rating-read"
                          defaultValue={5}
                          precision={0.5}
                          readOnly
                          className="mb-4 -mt-4 ml-2 lg:-ml-1"
                        />
                      </Stack>
                      <Link to={"/Photographeroverview"}>
                        <button className="text-white hover:bg-cyan-500/20 shadow-md shadow-cyan-500/50 bg-cyan-500 hover:text-cyan-500 transition-colors duration-500 w-[100px] h-[30px]  rounded-lg lg:float-right">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="w-full p-4  bg-white shadow-lg shadow-gray-500/40 mt-4 mb-4 rounded-lg">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[150px] h-[150px] object-cover object-center sm:mb-0 mb-4"
                  src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1812&q=80"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium lg:mt-10 text-lg text-cyan-600">
                    Naman Patel
                  </h2>

                  <h3 className="text-gray-800 -mt-3 mb-2 ">Babra , Amreli</h3>
                  <p className="">Wedding , Party</p>
                  <p className="mb-4 flex">
                    Experience:<p className="ml-1"> 5-years</p>
                  </p>
                  <Stack>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      className="mb-4 -mt-4 ml-2 lg:-ml-1"
                    />
                  </Stack>
                  <Link to={"/Photographeroverview"}>
                    <button className="text-white hover:bg-cyan-500/20 shadow-md shadow-cyan-500/50 bg-cyan-500 hover:text-cyan-500 transition-colors duration-500 w-[100px] h-[30px]  rounded-lg lg:float-right">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}

            {/* <div className="w-full p-4  bg-white shadow-lg shadow-gray-500/40 mt-4 mb-4 rounded-lg">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-[150px] h-[150px] object-cover object-center sm:mb-0 mb-4"
                  src="https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                />
                <div className="flex-grow sm:pl-8">
                  <h2 className="title-font font-medium lg:mt-10 text-lg text-cyan-600">
                    Raj Shah
                  </h2>

                  <h3 className="text-gray-800 -mt-3 mb-2 ">
                    Naranpura , Ahemdabad
                  </h3>
                  <p className="">Wedding</p>
                  <p className="mb-4 flex">
                    Experience:<p className="ml-1"> 3-years</p>
                  </p>
                  <Stack>
                    <Rating
                      name="half-rating-read"
                      defaultValue={4}
                      precision={0.5}
                      readOnly
                      className="mb-4 -mt-4 ml-2 lg:-ml-1"
                    />
                  </Stack>
                  <Link to={"/Photographeroverview"}>
                    <button className="text-white hover:bg-cyan-500/20 shadow-md shadow-cyan-500/50 bg-cyan-500 hover:text-cyan-500 transition-colors duration-500 w-[100px] h-[30px]  rounded-lg lg:float-right">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Wedding;

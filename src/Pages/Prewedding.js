// import React from "react";
// // import img5 from "./Images/img5.jpg";
// import jileesh from "./Images/o1.jpeg";
// import GradeIcon from "@mui/icons-material/Grade";
// import pic from "./Images/logo.png";
// import pic1 from "./Images/j1.jpeg";
// import pic2 from "./Images/j2.jpeg";
// import pic3 from "./Images/j3.jpeg";
// import pic4 from "./Images/login.png";
// // import Navbar from './Navbar';
// import NavigationMenu from "./NavigationMenu";

// function Prewedding() {
//   return (
//     <div>
//       <NavigationMenu />
//       {/* <div><img classNameName='row10' src={img5} alt=''/></div>  */}

//       <section className="text-gray-600 body-font overflow-hidden ">
//         <div className="container2 px-5 py-24 mx-auto ">
//           <div className="-my-8 divide-y-2 divide-gray-100 grid gap-4 grid-cols-2 grid-rows-3">
//             <div className="py-8 flex flex-wrap md:flex-nowrap">
//               <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <img src={jileesh} alt="" />
//               </div>
//               <div className="md:flex-grow pl-10 ">
//                 <h2 className="text-4xl font-medium text-gray-900 title-font mb-2">
//                   Jileesh Patel
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Category : Pre-Wedding
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Area : Nikol , Ahmedabad
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Experiance : 3 Years
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Rating : <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />{" "}
//                   <GradeIcon style={{ color: "182f6d" }} />{" "}
//                   <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                 </p>
//                 <p className="leading-relaxed text-black"></p>
//               </div>
//             </div>
//             <div className="py-8 flex flex-wrap md:flex-nowrap">
//               <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <img src={pic} alt="" />
//               </div>
//               <div className="md:flex-grow pl-10 ">
//                 <h2 className="text-4xl font-medium text-gray-900 title-font mb-2">
//                   Dhrumil Patel
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Category : Pre-Wedding
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Area : Thaltej , Ahmedabad
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Experiance : 2 Years
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Rating : <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />{" "}
//                   <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                 </p>
//                 <p className="leading-relaxed text-black"></p>
//               </div>
//             </div>
//             <div className="py-8 flex flex-wrap md:flex-nowrap">
//               <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <img src={pic1} alt="" />
//               </div>
//               <div className="md:flex-grow pl-10 ">
//                 <h2 className="text-4xl font-medium text-gray-900 title-font mb-2">
//                   Aakash Patel
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Category : Pre-Wedding
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Area : Bapunagar , Ahmedabad
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Experiance : 3 Years
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Rating : <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                 </p>
//                 <p className="leading-relaxed text-black"></p>
//               </div>
//             </div>
//             <div className="py-8 flex flex-wrap md:flex-nowrap">
//               <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <img src={pic2} alt="" />
//               </div>
//               <div className="md:flex-grow pl-10">
//                 <h2 className="text-4xl font-medium text-gray-900 title-font mb-2">
//                   Nisarg Patel
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Category : Pre-Wedding
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Area : Chankheda , Ahmedabad
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Experiance : 3 Years
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Rating : <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />{" "}
//                   <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                 </p>
//                 <p className="leading-relaxed text-black"></p>
//               </div>
//             </div>
//             <div className="py-8 flex flex-wrap md:flex-nowrap">
//               <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <img src={pic3} alt="" />
//               </div>
//               <div className="md:flex-grow pl-10 ">
//                 <h2 className="text-4xl font-medium text-gray-900 title-font mb-2">
//                   Meet Patel
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Category : Pre-Wedding
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Area : Thaltej , Ahmedabad
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Experiance : 5 Years
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Rating : <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                 </p>
//                 <p className="leading-relaxed text-black"></p>
//               </div>
//             </div>
//             <div className="py-8 flex flex-wrap md:flex-nowrap">
//               <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//                 <img src={pic4} alt="" />
//               </div>
//               <div className="md:flex-grow pl-10 ">
//                 <h2 className="text-4xl font-medium text-gray-900 title-font mb-2">
//                   Darshit Patel
//                 </h2>
//                 <p className="leading-relaxed text-black">
//                   Category : Pre-Wedding
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Area : Science city , Ahmedabad
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Experiance : 2 Years
//                 </p>
//                 <p className="leading-relaxed text-black">
//                   Rating : <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />{" "}
//                   <GradeIcon style={{ color: "182f6d" }} />{" "}
//                   <GradeIcon style={{ color: "182f6d" }} />
//                   <GradeIcon style={{ color: "182f6d" }} />
//                 </p>
//                 <p className="leading-relaxed text-black"></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Prewedding;



import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import NavigationMenu from "./NavigationMenu";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
// import Photographerfilter from "./Photographerfilter";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
function Prewedding() {
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
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1631621583126-ed10a80f62b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/60 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left">
            {/* <h2 className="text-lg font-bold text-white sm:text-5xl md:text-5xl text-center">
              Let's Find The Photographer
            </h2> */}
            <div className="text-center">
              {/* <Photographerfilter /> */}
              <p className="text-5xl text-white">Pre-Wedding</p>
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
                      <p className="">Category:Pre-Wedding </p>
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

export default Prewedding;

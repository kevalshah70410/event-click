// import React from 'react';

// function Booking() {
//   return (
//     <div>
//         <section className="text-gray-600 body-font relative">
//   <div className="container px-5 py-10 mx-auto">
//     <div className="flex flex-col text-center w-full mb-12">
//       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">BOOKING</h1>
//       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-grey-900">Event Details</h1>
//     </div>
//     <div className="lg:w-1/2 md:w-2/3 mx-auto">
//       <div className=" flex-wrap -m-2">
//         <div className="p-2 w-1/2 ">
//           <div className="relative flex space-x-4">
//             <label for="name" className="leading-7 text-sm text-gray-600">Name:</label>
//             <input type="text" id="name" name="name"  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-1/2 ">
//           <div className="relative flex space-x-4">
//             <label for="Event Date" className="leading-7 text-sm text-gray-600 ">EventDate:</label>
//             <input type="text" id="Event Date" name="Event Date" placeholder='Start'className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//             <input type="text" id="Event Date" name="Event Date" placeholder='End'className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-1/2 ">
//           <div className="relative flex space-x-4">
//             <label for="name" className="leading-7 text-sm text-gray-600">Package:</label>
//             <select className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
//               <option>Silver</option>
//               <option>Gold</option>
//               <option>Platinium</option>
//             </select >
//             {/* <label for="name" className="leading-7 text-sm text-gray-600">Package:</label>
//             <input type="text" id="Package" name="Package" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
//           </div>
//         </div>
//         <div className="p-2 w-full">
//           <div className="relative flex space-x-4">
//             <label for="Address" className="leading-7 text-sm text-gray-600">Address:</label>
//             <textarea id="Address" name="Address" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//           </div>
//         </div>
//         <div className="p-2 w-1/2">
//           <div className="relative flex space-x-4">
//             <label for="email" className="leading-7 text-sm text-gray-600">Email:</label>
//             <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-1/2">
//           <div className="relative flex space-x-4">
//             <label for="email" className="leading-7 text-sm text-gray-600">Contact:</label>
//             <input type="tel" id="contact" name="Contact" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//           </div>
//         </div>
//         <div className="p-2 w-full">
//           <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
//         </div>

//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// };

// export default Booking;

// -----------------------------------------------------------------------------------------------------------------------

import React from "react";
import bookingimg from "./Images/Booking.jpg";
import NavigationMenu from "./NavigationMenu";
// import { Link } from "@mui/material";
import { Link } from "react-router-dom";

function Booking() {
  return (
    <div className="">
      <NavigationMenu />
      <section className=" bg-gradient-to-l from-cyan-500/80 to-blue-500/60 min-h-screen flex items-center justify-center">
        {/* <!-- Booking container --> */}
        <div className="bg-gray-100/40 flex rounded-2xl shadow-2xl shadow-white/40 lg:max-w-5xl p-2 m-10 mb-20 items-center group-active:scale-x-150">
          {/* <!-- image --> */}
          <div className="md:block hidden w-1/2">
            <img alt="BookigIg" className="rounded-2xl" src={bookingimg} />
          </div>

          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl  text-blue-800">
              Book Your Event
            </h2>
            {/* <p className="text-xs mt-4 text-[#002D74]">
              Welcome to our platform.....
            </p> */}

            <form action="" className="flex flex-col gap-4">
              <div className="relative">
                <input
                  className="p-2 mt-5 rounded-xl border outline-none w-full"
                  type="text"
                  name="customername"
                  placeholder="Name"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border outline-none w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="relative">
                <input
                  className="p-2 rounded-xl border outline-none w-full"
                  type="text"
                  name="contactnumber"
                  placeholder="Contact Number"
                />
              </div>
              <div className="relative">
                <div className="flex space-x-4">
                  <input
                    type="date"
                    id="Event Date"
                    name="Event Date"
                    placeholder="Start Date"
                    className="p-2 rounded-xl border outline-none w-full text-gray-800/50 "
                  />
                  <input
                    type="date"
                    id="Event Date"
                    name="Event Date"
                    placeholder="End Date"
                    className="p-2 rounded-xl border outline-none w-full text-gray-800/50"
                  />
                </div>
              </div>
              <select className="p-2 rounded-xl border outline-none ">
                <option
                  value=""
                  className="text-[#595959] text-[16px]"
                  disabled
                  selected
                  hidden
                >
                  Select Package
                </option>
                <option value="User" className="text-[#595959] text-[16px]">
                  Silver
                </option>
                <option value="Gold" className="text-[#595959] text-[16px]">
                  Gold
                </option>
                <option value="Platinum" className="text-[#595959] text-[16px]">
                  Platinum
                </option>
              </select>
              <div className="relative">
                <textarea
                  className="p-2 rounded-xl border outline-none w-full resize-none "
                  type="textarea"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <Link to={"/Payment"}>
                <button className="bg-blue-600 w-full rounded-xl text-white py-2 hover:scale-105 duration-300">
                  Next
                </button>
              </Link>
              <Link to={"/Photographeroverview"}>
                <button className="bg-cyan-600 w-full rounded-xl text-white py-2 hover:scale-105 duration-300">
                  Back
                </button>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;

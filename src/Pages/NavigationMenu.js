// ---------------------------------------------------------------------------------------------------------

// import { useRef } from "react";
// // import { FaBars, FaTimes } from "react-icons/fa";
// import ClearIcon from "@mui/icons-material/Clear";
// import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
// import "./NavigationMenu.css";

// function Navbar() {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classNameList.toggle("responsive_nav");
//   };

//   return (
//     <header>
//       <h3>LOGO</h3>
//       <nav ref={navRef}>
//         <a href="/#">Home</a>
//         <a href="/#">My work</a>
//         <a href="/#">Blog</a>
//         <a href="/#">About me</a>
//         <button classNameName="nav-btn nav-close-btn" onClick={showNavbar}>
//           <ClearIcon />
//         </button>
//       </nav>
//       <button classNameName="nav-btn" onClick={showNavbar}>
//         <MenuTwoToneIcon />
//       </button>
//     </header>
//   );
// }

// export default Navbar;

// ---------------------------------------------------------------------------------------------------------

// import React from "react";
// import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import { Link } from "react-router-dom";
// function NavigationMenu() {
//   return (
//     <div>
//       <div classNameName="bg-gray-100 relative">
//         <nav classNameName=" fixed top-0 left-0 bg-gradient-to-r  from-cyan-500 to-blue-500 w-full shadow-md shadow-[#66a9f7] opacity-100">
//           <div classNameName="container m-auto flex justify-between items-center text-gray-700 ">
//             <h1 classNameName="pl-8 py-4 text-xl font-bold text-white">
//               EVENTCLICK
//             </h1>
//             <ul classNameName="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
//               <li classNameName="text-white  hover:bg-[#ffffff] hover:text-[#1381ff] hover:rounded-md  py-2 px-6  ">
//                 <Link to="/">Home</Link>
//               </li>
//               <li classNameName="text-white  hover:bg-[#ffffff] hover:text-[#1381ff] hover:rounded-md  py-2 px-6 ">
//                 <Link to="/Photographers">Photographers</Link>
//               </li>
//               <li classNameName="text-white  hover:bg-[#ffffff] hover:text-[#1381ff] hover:rounded-md  py-2 px-6 ">
//                 <Link to="/About"> About</Link>
//               </li>
//               <li classNameName="text-white  hover:bg-[#ffffff] hover:text-[#1381ff] hover:rounded-md  py-2 px-6 ">
//                 <Link to="/ContactUs">Contact Us</Link>
//               </li>
//               <button classNameName="text-[#1381ff] bg-white border-2 rounded-full py-2 px-6 ml-5 ">
//                 <Link to="/Signin"> Log-In / Sign-Up</Link>
//               </button>
//               <button classNameName="text-white  py-2 px-6">
//                 <Link to="/CustomerAccountSetting">
//                   {" "}
//                   <SettingsOutlinedIcon />
//                 </Link>
//               </button>
//             </ul>
//             <button classNameName="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none group">
//               {/* <div classNameName="w-5 h-1  bg-gray-600 mb-1"></div>
//               <div classNameName="w-5 h-1 bg-gray-600 mb-1"></div>
//               <div classNameName="w-5 h-1 bg-gray-600 "></div> */}
//               <MenuTwoToneIcon classNameName="text-white " />
//               <div classNameName="absolute top-0 -right-full h-screen w-6/12 bg-[#ffffffea]/20  border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
//                 <ul classNameName="flex flex-col items-center w-full text-base cursor-poiter pt-10">
//                   <li classNameName="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white py-4 px-6 w-full">
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li classNameName="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white py-4 px-6 w-full">
//                     <Link to="/Photographers">Photographers</Link>
//                   </li>
//                   <li classNameName="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white py-4 px-6 w-full">
//                     <Link to="/About"> About</Link>
//                   </li>
//                   <li classNameName="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white py-4 px-6 w-full">
//                     Contact Us
//                   </li>
//                   <li classNameName="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white py-4 px-6 w-full">
//                     <Link to="/Signin"> Log-In / Sign-Up</Link>
//                   </li>
//                   <li classNameName="hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white py-4 px-6 w-full">
//                     <Link to="/CustomerAccountSetting">Setting</Link>
//                   </li>
//                 </ul>
//               </div>
//             </button>
//           </div>
//         </nav>
//       </div>
//       {/* <section classNameName="mt-20 px-4">
//         <p classNameName="mb-2">
//           <h1>Welcome To Our Website...</h1>
//         </p>
//       </section> */}
//     </div>
//   );
// }

// export default NavigationMenu;

// ---------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import "../Components/navbar.css";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import { ImCross } from "react-icons/im";

// const NavigationMenu = () => {
//   const [Mobile, setMobile] = useState(false);
//   return (
//     <div>
//       <nav classNameName="navbar flex justify-around items-center h-[10vh]">
//         <h3 classNameName="logo">Logo</h3>
//         <ul
//           classNameName={Mobile ? "nav-links-mobile" : "nav-links"}
//           onClick={() => setMobile(false)}
//         >
//           <Link to="/" classNameName="home">
//             <li>Home</li>
//           </Link>
//           <Link to="/Photographers" classNameName="photographers">
//             <li>Photographers</li>
//           </Link>
//           <Link to="/About" classNameName="about">
//             <li>About</li>
//           </Link>
//           <Link to="/ContactUS" classNameName="contactus">
//             <li>ContactUS</li>
//           </Link>
//         </ul>

//         <button classNameName="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
//           {Mobile ? <ImCross classNameName="" /> : <FaBars />}
//         </button>
//       </nav>
//     </div>
//   );
// };
// export default NavigationMenu;

//------------------------------------------------------------------------------------------------------------------

import React from "react";
import { Link } from "react-router-dom";
import logo from "./Images/logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function NavigationMenu() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" bg-gray-50 ">
        <header>
          <div className="relative z-20 border-b bg-white ">
            <div className=" px-6 md:px-12 lg:container lg:mx-auto lg:px-6 lg:py-4">
              <div className="flex items-center justify-between">
                <div className="relative z-20">
                  <img src={logo} alt="Eventclick-Logo" className="w-40" />
                </div>

                <div className="flex items-center justify-end border-l lg:border-l-0">
                  <input
                    type="checkbox"
                    name="hamburger"
                    id="hamburger"
                    className="peer"
                    hidden
                  />
                  <label
                    for="hamburger"
                    className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                  >
                    <div
                      aria-hidden="true"
                      className="m-auto h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 transition duration-300"
                    ></div>
                  </label>

                  <div className="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-white border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">
                    <div className="flex flex-col h-full justify-between lg:items-center lg:flex-row">
                      <ul className="px-6 pt-32 text-gray-700 space-y-8 md:px-12 lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0">
                        <li>
                          <span className="relative hover:text-cyan-800 ">
                            <Link to="/">Home</Link>
                          </span>
                        </li>
                        <li>
                          <span className="relative hover:text-cyan-800">
                            <Link to="/Photographers">Photographers</Link>
                          </span>
                        </li>
                        <li>
                          <span className="relative hover:text-cyan-800">
                            <Link to="/About">About</Link>
                          </span>
                        </li>
                        <li>
                          <span className="relative hover:text-cyan-800">
                            <Link to="/Contactus">Contact US</Link>
                          </span>
                        </li>
                        {localStorage.getItem("user") &&
                          JSON.parse(localStorage.getItem("user")) &&
                          JSON.parse(localStorage.getItem("user")).role ===
                            "user" && (
                            <li>
                              <span className="relative hover:text-cyan-800">
                                <Link to="/CustomerAccountSetting">
                                  Settings
                                </Link>
                              </span>
                            </li>
                          )}
                        {localStorage.getItem("user") &&
                          JSON.parse(localStorage.getItem("user")) &&
                          JSON.parse(localStorage.getItem("user")).role ===
                            "Photographer" && (
                            <li>
                              <span className="relative hover:text-cyan-800">
                                <Link to="/dash">Dashboard</Link>
                              </span>
                            </li>
                          )}
                      </ul>

                      <div className="border-t py-8 px-6 md:px-12 md:py-16 lg:border-t-0 lg:border-l lg:py-0 lg:pr-0 lg:pl-6">
                        <div className="block px-6 py-3 rounded-full bg-gradient-to-r from-sky-600 to-cyan-400 text-center text-white">
                          {localStorage.getItem("user") ? (
                            <Button
                              onClick={() => {
                                localStorage.clear();
                                navigate("/Login");
                              }}
                            >
                              <p className="text-white normal-case">Log-Out</p>
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                navigate("/Login");
                              }}
                            >
                              <p className="text-white normal-case">
                                Login / Sign-Up
                              </p>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default NavigationMenu;

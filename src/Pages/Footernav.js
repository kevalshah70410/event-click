import React from "react";
import { Icon } from "@mui/material";
import PinterestIcon from "@mui/icons-material/Pinterest";
function Footernav() {
  return (
    <div className="footer-container">
      <footer className="bg-[#54A3FF]/20 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/*---------------------------------------- Nav Menu----------------------------------- */}
          <div className="flex-grow flex flex-wrap -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4 text-center">
              <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                Menus
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="http://localhost:3000/"
                    className="text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/Photographers"
                    className="text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                  >
                    Photographers
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/About"
                    className="text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="http://localhost:3000/Contactus"
                    className="text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
            {/* ---------------------------Categories------------------------------------- */}
            <div className="lg:w-1/5 md:w-1/2 w-full px-4 text-center">
              <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                Categories
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    Pre-Wedding
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    Wedding
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    Party
                  </p>
                </li>
                {/* <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    Professional
                  </p>
                </li> */}
              </nav>
            </div>
            {/* --------------------------- Others -------------------------------- */}
            <div className="lg:w-1/5 md:w-1/2 w-full px-4 text-center">
              <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                Others
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    Terms Of Use
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    Privacy Policy
                  </p>
                </li>
              </nav>
            </div>
            {/* -------------------------------------Contact------------------------------------- */}
            <div className="lg:w-1/5 md:w-1/2 w-full px-0 text-center">
              <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                Contact
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    +91 85125 81845
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 hover:text-blue-500 hover:cursor-pointer">
                    support@eventclick.com
                  </p>
                </li>
              </nav>
            </div>
            {/* -------------------------------------Follow Us------------------------------------- */}
            <div className="lg:w-1/5 md:w-1/2 w-full px-4 text-center">
              <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                Follow US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-gray-600 hover:text-gray-800 hover:cursor-pointer">
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                      <a
                        href="https://twitter.com/i/flow/login"
                        // target="_blank"
                        className="ml-3 text-gray-600 hover:text-blue-500"
                      >
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      {/* Insta logo */}
                      <a
                        href="https://www.instagram.com/"
                        // target="_blank"
                        className="ml-3 text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      {/* linkedin logo */}
                      <a
                        href="https://www.linkedin.com/"
                        // target="_blank"
                        className="ml-3 text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="0"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="none"
                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                          ></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                      {/* Pinterest logo */}
                      <a
                        href="https://in.pinterest.com/"
                        // target="_blank"
                        className="ml-2.5 text-gray-600 hover:text-blue-500 hover:cursor-pointer"
                      >
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="0"
                          className="w-6 h-6 "
                          viewBox="0 0 24 24"
                        >
                          <PinterestIcon />
                        </svg>
                      </a>
                    </span>
                  </p>
                </li>
              </nav>
            </div>
          </div>
        </div>

        {/*---------------------------------------------------- last footer ----------------------------------------------- */}
        {/*---------------------------------- Copyright --------------------------------- */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className=" py-1 flex flex-wrap flex-col sm:flex-row">
            <p className="text-slate-50 flex m-auto text-sm text-center sm:text-left">
              Copyright © 2023 EventClick
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footernav;

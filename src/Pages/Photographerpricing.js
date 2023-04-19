import React from "react";
import "./Pricing.css";
import { Link } from "react-router-dom";
function Photographerpricing() {
  return (
    <div className="p-8 bg-gradient-to-r from-cyan-500/50 to-blue-500/80">
      <p className="md:text-5xl text-2xl text-white text-center align-middle">
        Pricing
      </p>
      <div id="pricing" className="flex flex-wrap mt-[50px] mb-[50px] ">
        <div className="single-card p-[20px]">
          <div className="wrapper rounded-lg bg-white h-full p-[30px] shadow-lg shadow-slate-400">
            <p className="text-gray-500 text-lg ">SILVER</p>
            <h1 className="text-blue-600">10,000 &#x20B9;</h1>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <p>1 Day</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <p>2 Photographers</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <p>1 Videographer</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  {" "}
                  <p>50-Page Photoalbum </p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  {" "}
                  <p>DVD Provide</p>
                </span>
              </li>
              <li className="disable">
                <i className="fas fa-check"></i>
                <span>
                  {" "}
                  <p>Pendrive</p>
                </span>
              </li>
              <li className="disable">
                <i className="fas fa-times"></i>
                <span>Duplicate DVD Provide</span>
              </li>
            </ul>
            {/* <Link to={"/Booking"}>
              <button className="bg-blue-500 text-white shadow-md shadow-blue-400 cursor-pointer transition ease-in-out duration-500 hover:bg-white hover:text-blue-500">
                Book Now
              </button>
            </Link> */}
          </div>
        </div>

        <div className="single-card p-[20px]">
          <div className="wrapper rounded-lg bg-white  h-full p-[30px] shadow-lg shadow-slate-400">
            <p className="text-gray-500 text-lg ">GOLD</p>
            <h1 className="text-blue-600">12,000 &#x20B9;</h1>
            <ul>
              <li>
                <i className="fas fa-check "></i>
                <span>
                  <p>3 Day</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check "></i>
                <span>
                  <p>3 Photographers</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check "></i>
                <span>
                  <p>2 Videographer</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check "></i>
                <span>
                  {" "}
                  <p>100-Page Photoalbum </p>
                </span>
              </li>
              <li>
                <i className="fas fa-check "></i>
                <span>
                  {" "}
                  <p>DVD Provide</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check "></i>
                <span>
                  {" "}
                  <p>Pendrive</p>
                </span>
              </li>
              <li className="disable">
                <i className="fas fa-times"></i>
                <span>Duplicate DVD Provide</span>
              </li>
            </ul>
            {/* <Link to={"/Booking"}>
              <button className="bg-blue-500 text-white shadow-md shadow-blue-400 cursor-pointer transition ease-in-out duration-500 hover:bg-white hover:text-blue-500">
                Book Now
              </button>
            </Link> */}
          </div>
        </div>

        <div className="single-card p-[20px]">
          <div className="wrapper rounded-lg bg-white h-full p-[30px] shadow-lg shadow-slate-400">
            <p className="text-gray-500 text-lg ">PLATINUM</p>
            <h1 className="text-blue-600">20,000 &#x20B9;</h1>
            <ul>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <p>5 Day</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <p>3 Photographers</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  <p>2 Videographer</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  {" "}
                  <p>150-Page Photoalbum </p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  {" "}
                  <p>DVD Provide</p>
                </span>
              </li>
              <li>
                <i className="fas fa-check"></i>
                <span>
                  {" "}
                  <p>Pendrive</p>
                </span>
              </li>
              <li>
                <i className="fas fa-times"></i>
                <span>Duplicate DVD Provide</span>
              </li>
            </ul>
            {/* <Link to={"/Booking"}>
              <button className="bg-blue-500 text-white shadow-md shadow-blue-400 cursor-pointer transition ease-in-out duration-500 hover:bg-white hover:text-blue-500">
                Book Now
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <Link to={"/Booking"}>
        <button className="bg-blue-500 h-[50px] -mt-2 mb-5 sm:mb-5 text-center rounded-full w-[200px] text-white shadow-md  shadow-blue-400 cursor-pointer transition ease-in-out duration-500 hover:bg-white hover:text-blue-500">
          Book Now
        </button>
      </Link>
    </div>
  );
}

export default Photographerpricing;

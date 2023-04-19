import React from "react";
import "./Photographerinputpricing.css";
import { Link } from "react-router-dom";
function Photographerinputpricing() {
  return (
    <div className="p-0 -pt-2">
      <p className="font-bold text-xl title-font text-left  mx-5">Pricing</p>
      <div id="pricing" className="flex flex-wrap mt-[50px] mb-[50px] ">
        <div className="single-card p-[] lg:pr-8 lg:-ml-8">
          <div className="wrapper rounded-lg bg-white h-full p-[30px] shadow-lg shadow-slate-400">
            <p className="text-gray-500 text-lg ">SILVER</p>
            <input
              type="text"
              placeholder="Rupees (&#x20B9;)"
              className="outline-none text-blue-600 ring-1 rounded-md text-lg text-center mt-5 mb-5 "
              pattern=""
            ></input>
            <ul>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Day"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Photographers"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Videographer"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Pages in Photoalbum"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Other Provide"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li className="disable">
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Not Provided-1"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li className="disable">
                {/* <i className="fas fa-times"></i> */}
                <input
                  type="text"
                  placeholder="Not Provided-2"
                  className="outline-none ring-1 rounded-md text-lg"
                ></input>
              </li>
            </ul>
            {/* <Link to={"/Booking"}>
              <button className="bg-blue-500 text-white shadow-md shadow-blue-400 cursor-pointer transition ease-in-out duration-500 hover:bg-white hover:text-blue-500">
                Book Now
              </button>
            </Link> */}
          </div>
        </div>

        <div className="single-card p-[] lg:pr-2 lg:-ml-5">
          <div className="wrapper rounded-lg bg-white  h-full p-[30px] shadow-lg shadow-slate-400">
            <p className="text-gray-500 text-lg ">GOLD</p>
            <input
              type="text"
              placeholder="Rupees (&#x20B9;)"
              className="outline-none text-blue-600 ring-1 rounded-md text-lg text-center mt-5 mb-5 "
              pattern=""
            ></input>
            <ul>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Day"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Photographers"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Videographer"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Pages in Photoalbum"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Other Provide"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li className="disable">
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Provided-1"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li className="disable">
                {/* <i className="fas fa-times"></i> */}
                <input
                  type="text"
                  placeholder="Not Provided-2"
                  className="outline-none ring-1 rounded-md text-lg"
                ></input>
              </li>
            </ul>
            {/* <Link to={"/Booking"}>
              <button className="bg-blue-500 text-white shadow-md shadow-blue-400 cursor-pointer transition ease-in-out duration-500 hover:bg-white hover:text-blue-500">
                Book Now
              </button>
            </Link> */}
          </div>
        </div>

        <div className="single-card p-[] lg:pl-2">
          <div className="wrapper rounded-lg bg-white h-full p-[30px] shadow-lg shadow-slate-400">
            <p className="text-gray-500 text-lg ">PLATINUM</p>
            <input
              type="text"
              placeholder="Rupees (&#x20B9;)"
              className="outline-none text-blue-600 ring-1 rounded-md text-lg text-center mt-5 mb-5 "
              pattern=""
            ></input>
            <ul>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Day"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Photographers"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  <input
                    type="text"
                    placeholder="Videographer"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Pages in Photoalbum"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li>
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Other Provide"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li className="disable">
                {/* <i className="fas fa-check"></i> */}
                <span>
                  {" "}
                  <input
                    type="text"
                    placeholder="Provided-1"
                    className="outline-none ring-1 rounded-md text-lg"
                  ></input>
                </span>
              </li>
              <li className="disable">
                {/* <i className="fas fa-times"></i> */}
                <input
                  type="text"
                  placeholder="Provided-2"
                  className="outline-none ring-1 rounded-md text-lg"
                ></input>
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
          Save
        </button>
      </Link>
    </div>
  );
}

export default Photographerinputpricing;
